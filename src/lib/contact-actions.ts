'use server';

import { z } from 'zod';

const optionalText = z.string().max(3000).optional().or(z.literal(''));

const contactSchema = z
  .object({
    name: z.string().min(2, { message: 'O nome é obrigatório.' }).max(120),
    company: z.string().max(160).optional().or(z.literal('')),
    email: z.string().email({ message: 'Por favor, insira um email válido.' }).max(200),
    phone: z.string().min(10, { message: 'Por favor, insira um telefone válido.' }).max(40),
    city: z.string().max(160).optional().or(z.literal('')),
    product: z.string().max(240).optional().or(z.literal('')),
    material: z.string().max(240).optional().or(z.literal('')),
    dimensions: z.string().max(500).optional().or(z.literal('')),
    deadline: z.string().max(160).optional().or(z.literal('')),
    location: z.string().max(200).optional().or(z.literal('')),
    message: optionalText,
    privacy: z.boolean().optional(),
    source: z.string().max(80).optional(),
  })
  .superRefine((data, context) => {
    const technicalLandingPages = new Set([
      'lp-tubos',
      'lp-bucha',
      'lp-rolos-forno',
      'lp-sink-rolls',
      'lp-fundicao-centrifugada',
    ]);

    if (technicalLandingPages.has(data.source || '') && !data.privacy) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['privacy'],
        message: 'É necessário aceitar a Política de Privacidade.',
      });
    }

    if (technicalLandingPages.has(data.source || '')) {
      const technicalRequiredFields: Array<[keyof typeof data, string]> = [
        ['company', 'Informe a empresa.'],
        ['dimensions', 'Informe as dimensões e a quantidade.'],
      ];

      for (const [field, message] of technicalRequiredFields) {
        if (!data[field]) {
          context.addIssue({ code: z.ZodIssueCode.custom, path: [field], message });
        }
      }
    }

    if (data.source) return;

    const requiredFields: Array<[keyof typeof data, string]> = [
      ['company', 'Informe a empresa.'],
      ['product', 'Informe o produto ou a aplicação.'],
      ['dimensions', 'Informe as dimensões e a quantidade.'],
      ['location', 'Informe o país e o estado.'],
    ];

    for (const [field, message] of requiredFields) {
      if (!data[field]) {
        context.addIssue({ code: z.ZodIssueCode.custom, path: [field], message });
      }
    }

    if (!data.privacy) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['privacy'],
        message: 'É necessário aceitar a Política de Privacidade.',
      });
    }
  });

const LEAD_TO_EMAIL = process.env.LEAD_TO_EMAIL || 'vendas@aceros.com.br';
const LEAD_FROM_EMAIL = process.env.LEAD_FROM_EMAIL || 'Aceros Website <onboarding@resend.dev>';
const MAX_ATTACHMENT_SIZE = 5 * 1024 * 1024;
const ALLOWED_ATTACHMENT_EXTENSIONS = new Set([
  'pdf', 'dwg', 'dxf', 'step', 'stp', 'iges', 'igs', 'jpg', 'jpeg', 'png',
]);

function textValue(data: FormData, key: string) {
  const value = data.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

function normalizeInput(data: unknown): unknown {
  if (!(data instanceof FormData)) return data;

  return {
    name: textValue(data, 'name'),
    company: textValue(data, 'company'),
    email: textValue(data, 'email'),
    phone: textValue(data, 'phone'),
    city: textValue(data, 'city'),
    product: textValue(data, 'product'),
    material: textValue(data, 'material'),
    dimensions: textValue(data, 'dimensions'),
    deadline: textValue(data, 'deadline'),
    location: textValue(data, 'location'),
    message: textValue(data, 'message'),
    privacy: textValue(data, 'privacy') === 'true',
    source: textValue(data, 'source') || undefined,
  };
}

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function safeSubject(value: string) {
  return value.replace(/[\r\n]+/g, ' ').slice(0, 120);
}

function tableRow(label: string, value?: string) {
  return `<tr><td style="padding: 8px 12px 8px 0; vertical-align: top;"><strong>${label}:</strong></td><td style="padding: 8px 0;">${escapeHtml(value || 'Não informado')}</td></tr>`;
}

export async function saveContactMessage(
  data: unknown,
): Promise<{ success: boolean; error?: string }> {
  try {
    const validatedData = contactSchema.parse(normalizeInput(data));
    const drawing = data instanceof FormData ? data.get('drawing') : null;
    const sourceLabels: Record<string, string> = {
      'lp-tubos': 'Tubos de Aço Inox',
      'lp-bucha': 'Buchas de Aço Inox',
      'lp-rolos-forno': 'Rolos de Forno',
      'lp-sink-rolls': 'Sink Rolls',
      'lp-fundicao-centrifugada': 'Fundição Centrifugada',
    };
    const sourceLabel = validatedData.source
      ? sourceLabels[validatedData.source] || 'Geral'
      : 'Formulário de Orçamento Técnico';

    let attachment: { filename: string; content: string } | undefined;
    if (drawing instanceof File && drawing.size > 0) {
      const extension = drawing.name.split('.').pop()?.toLowerCase() || '';
      if (!ALLOWED_ATTACHMENT_EXTENSIONS.has(extension)) {
        return { success: false, error: 'Formato de desenho técnico não permitido.' };
      }
      if (drawing.size > MAX_ATTACHMENT_SIZE) {
        return { success: false, error: 'O desenho técnico deve ter no máximo 5 MB.' };
      }

      attachment = {
        filename: drawing.name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 160),
        content: Buffer.from(await drawing.arrayBuffer()).toString('base64'),
      };
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Sem RESEND_API_KEY configurada — nao ha como enviar o lead por e-mail.
      // Retornamos success:false explicitamente para que o front informe o usuario
      // e para que a Elevix seja alertada pra configurar a chave.
      console.warn(
        '[contact] RESEND_API_KEY não configurada. Lead não foi enviado.',
      );
      return {
        success: false,
        error:
          'Não foi possível enviar sua mensagem no momento. Tente novamente ou fale conosco pelo WhatsApp.',
      };
    }

    const emailHtml = `
      <div style="font-family: sans-serif; color: #333; max-width: 680px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #ef7b21; border-bottom: 2px solid #ef7b21; padding-bottom: 10px;">Novo lead — ${escapeHtml(sourceLabel)}</h2>
        <p><strong>Origem:</strong> ${escapeHtml(sourceLabel)}</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <table style="width: 100%; border-collapse: collapse;">
          ${tableRow('Nome', validatedData.name)}
          ${tableRow('Empresa', validatedData.company)}
          ${tableRow('Telefone/WhatsApp', validatedData.phone)}
          ${tableRow('E-mail', validatedData.email)}
          ${tableRow('País/Estado', validatedData.location || validatedData.city)}
          ${tableRow('Produto ou aplicação', validatedData.product)}
          ${tableRow('Liga ou material', validatedData.material)}
          ${tableRow('Dimensões e quantidade', validatedData.dimensions)}
          ${tableRow('Prazo desejado', validatedData.deadline)}
          ${tableRow('Desenho técnico', attachment?.filename)}
        </table>
        <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
          <strong>Informações adicionais:</strong><br />
          <p style="white-space: pre-wrap;">${escapeHtml(validatedData.message || 'Sem mensagem adicional.')}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #666;">
          Lead recebido em ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
        </p>
      </div>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: LEAD_FROM_EMAIL,
        to: [LEAD_TO_EMAIL],
        reply_to: validatedData.email,
        subject: `[Lead ${safeSubject(sourceLabel)}] ${safeSubject(validatedData.name)} — ${safeSubject(validatedData.company || 'sem empresa')}`,
        html: emailHtml,
        attachments: attachment ? [attachment] : undefined,
      }),
    });

    if (!resendResponse.ok) {
      const err = await resendResponse.text().catch(() => 'erro desconhecido');
      console.error('[contact] Resend retornou erro:', resendResponse.status, err);
      return {
        success: false,
        error:
          'Não conseguimos enviar sua mensagem agora. Fale conosco pelo WhatsApp ou tente novamente em instantes.',
      };
    }

    return { success: true };
  } catch (error: unknown) {
    console.error(
      '[contact] Erro ao processar formulário:',
      error instanceof Error ? error.message : 'erro desconhecido',
    );
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: 'Por favor, preencha os campos obrigatórios corretamente.',
      };
    }
    return {
      success: false,
      error:
        'Ocorreu um erro inesperado. Tente novamente ou fale conosco pelo WhatsApp.',
    };
  }
}
