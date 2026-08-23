'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'O nome é obrigatório.' }),
  company: z.string().optional().or(z.literal('')),
  email: z
    .string()
    .email({ message: 'Por favor, insira um email válido.' }),
  phone: z.string().min(10, { message: 'Por favor, insira um telefone válido.' }),
  city: z.string().optional().or(z.literal('')),
  message: z.string().optional().or(z.literal('')),
  source: z.string().optional(),
});

const LEAD_TO_EMAIL = process.env.LEAD_TO_EMAIL || 'vendas@aceros.com.br';
const LEAD_FROM_EMAIL = process.env.LEAD_FROM_EMAIL || 'Aceros Website <onboarding@resend.dev>';

export async function saveContactMessage(
  data: any,
): Promise<{ success: boolean; error?: string }> {
  try {
    const validatedData = contactSchema.parse(data);
    const sourceLabel =
      validatedData.source === 'lp-tubos'
        ? 'Tubos de Aço Inox'
        : validatedData.source === 'lp-bucha'
          ? 'Buchas de Aço Inox'
          : 'Geral';

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Sem RESEND_API_KEY configurada — nao ha como enviar o lead por e-mail.
      // Retornamos success:false explicitamente para que o front informe o usuario
      // e para que a Elevix seja alertada pra configurar a chave.
      console.warn(
        '[contact] RESEND_API_KEY nao configurada. Lead nao foi enviado.',
        validatedData,
      );
      return {
        success: false,
        error:
          'Não foi possível enviar sua mensagem no momento. Tente novamente ou fale conosco pelo WhatsApp.',
      };
    }

    const emailHtml = `
      <div style="font-family: sans-serif; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #ff8c00; border-bottom: 2px solid #ff8c00; padding-bottom: 10px;">Novo Lead — ${sourceLabel}</h2>
        <p><strong>Origem:</strong> ${sourceLabel === 'Geral' ? 'Formulário de Contato' : 'Landing Page de ' + sourceLabel}</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0;"><strong>Nome:</strong></td><td>${validatedData.name}</td></tr>
          <tr><td style="padding: 8px 0;"><strong>Empresa:</strong></td><td>${validatedData.company || 'Não informado'}</td></tr>
          <tr><td style="padding: 8px 0;"><strong>Telefone/WhatsApp:</strong></td><td>${validatedData.phone}</td></tr>
          <tr><td style="padding: 8px 0;"><strong>Cidade/UF:</strong></td><td>${validatedData.city || 'Não informado'}</td></tr>
          <tr><td style="padding: 8px 0;"><strong>E-mail:</strong></td><td>${validatedData.email}</td></tr>
        </table>
        <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
          <strong>Mensagem/Especificações:</strong><br />
          <p style="white-space: pre-wrap;">${validatedData.message || 'Sem mensagem adicional.'}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #888;">
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
        subject: `[Lead ${sourceLabel}] ${validatedData.name} — ${validatedData.company || 'sem empresa'}`,
        html: emailHtml,
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
  } catch (error: any) {
    console.error('[contact] Erro:', error);
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
