'use client';

import { hasAnalyticsConsent } from '@/lib/analytics-consent';

// Envia formulario para o Netlify Forms via application/x-www-form-urlencoded.
// Motivo: com Next.js SSR, POST em "/" com multipart/form-data cai no handler
// do Next.js (404). Netlify so captura urlencoded. Portanto anexo de arquivo
// nao passa por aqui - se o cliente selecionou arquivo, orientamos a enviar
// pelo WhatsApp.
// Notificacao por email configurada no painel Netlify (Forms > Settings) para
// vendas@aceros.com.br. Forms registrados em public/__forms.html.

const SOURCE_TO_FORM: Record<string, string> = {
  'lp-tubos': 'lp-tubos',
  'lp-bucha': 'lp-bucha',
  'lp-rolos-forno': 'lp-rolos-forno',
  'lp-sink-rolls': 'lp-sink-rolls',
  'lp-fundicao-centrifugada': 'lp-fundicao-centrifugada',
};

const SOURCE_TO_SERVICE: Record<string, string> = {
  'lp-tubos': 'tubos_aco_inox',
  'lp-bucha': 'buchas_aco_inox',
  'lp-rolos-forno': 'rolos_para_fornos',
  'lp-sink-rolls': 'sink_rolls',
  'lp-fundicao-centrifugada': 'fundicao_centrifugada',
};

function resolveFormName(source: string | null): string {
  if (source && SOURCE_TO_FORM[source]) return SOURCE_TO_FORM[source];
  return 'contato';
}

export async function saveContactMessage(
  data: unknown,
): Promise<{ success: boolean; error?: string; hasAttachment?: boolean }> {
  try {
    const params = new URLSearchParams();
    let hasAttachment = false;

    if (data instanceof FormData) {
      for (const [key, value] of data.entries()) {
        if (value instanceof File) {
          if (value.size > 0) hasAttachment = true;
          continue; // nao inclui arquivos no urlencoded
        }
        params.append(key, String(value));
      }
    } else if (data && typeof data === 'object') {
      for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
        if (value === undefined || value === null) continue;
        params.set(key, String(value));
      }
    }

    const source = params.get('source');
    const formName = resolveFormName(source);
    params.set('form-name', formName);

    const response = await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    if (!response.ok) {
      console.error('[contact] Netlify Forms retornou erro:', response.status);
      return {
        success: false,
        error:
          'Não conseguimos enviar sua mensagem agora. Fale conosco pelo WhatsApp ou tente novamente em instantes.',
      };
    }

    // Um único evento após a confirmação do Netlify, sem dados pessoais,
    // valor ou moeda. Formulários enviados sem consentimento não são medidos.
    if (hasAnalyticsConsent()) {
      const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: 'generate_lead',
        lead_type: 'orcamento',
        lead_source: source && SOURCE_TO_FORM[source] ? source : 'website',
        contact_method: 'form',
        form_name: formName,
        ...(source && SOURCE_TO_SERVICE[source]
          ? { service_name: SOURCE_TO_SERVICE[source] }
          : {}),
        page_path: window.location.pathname,
      });
    }

    return { success: true, hasAttachment };
  } catch (error: unknown) {
    console.error(
      '[contact] Erro ao enviar formulário:',
      error instanceof Error ? error.message : 'erro desconhecido',
    );
    return {
      success: false,
      error:
        'Ocorreu um erro inesperado. Tente novamente ou fale conosco pelo WhatsApp.',
    };
  }
}
