'use client';

// Envia o formulario para o Netlify Forms.
// A configuracao de notificacao por email (destino: vendas@aceros.com.br) e
// feita no painel Netlify: Forms > <nome do form> > Settings & usage >
// Form notifications. Os forms estao registrados em public/__forms.html.

const MAX_ATTACHMENT_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_ATTACHMENT_EXTENSIONS = new Set([
  'pdf', 'dwg', 'dxf', 'step', 'stp', 'iges', 'igs', 'jpg', 'jpeg', 'png',
]);

// Mapa de source -> nome do form registrado em public/__forms.html
const SOURCE_TO_FORM: Record<string, string> = {
  'lp-tubos': 'lp-tubos',
  'lp-bucha': 'lp-bucha',
  'lp-rolos-forno': 'lp-rolos-forno',
  'lp-sink-rolls': 'lp-sink-rolls',
  'lp-fundicao-centrifugada': 'lp-fundicao-centrifugada',
};

function resolveFormName(source: string | null): string {
  if (source && SOURCE_TO_FORM[source]) return SOURCE_TO_FORM[source];
  return 'contato';
}

export async function saveContactMessage(
  data: unknown,
): Promise<{ success: boolean; error?: string }> {
  try {
    const formData = data instanceof FormData ? data : new FormData();
    if (!(data instanceof FormData) && data && typeof data === 'object') {
      for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
        if (value === undefined || value === null) continue;
        formData.set(key, String(value));
      }
    }

    // Valida anexo antes de enviar (evita subir arquivo invalido ao Netlify)
    const drawing = formData.get('drawing');
    if (drawing instanceof File && drawing.size > 0) {
      const extension = drawing.name.split('.').pop()?.toLowerCase() || '';
      if (!ALLOWED_ATTACHMENT_EXTENSIONS.has(extension)) {
        return { success: false, error: 'Formato de desenho técnico não permitido.' };
      }
      if (drawing.size > MAX_ATTACHMENT_SIZE) {
        return { success: false, error: 'O desenho técnico deve ter no máximo 5 MB.' };
      }
    } else if (drawing instanceof File && drawing.size === 0) {
      // File input vazio: remover para nao mandar entrada nula
      formData.delete('drawing');
    }

    const source = typeof formData.get('source') === 'string'
      ? (formData.get('source') as string)
      : null;
    const formName = resolveFormName(source);

    // Netlify Forms exige form-name no payload para saber qual form associar
    formData.set('form-name', formName);

    const response = await fetch('/', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      console.error('[contact] Netlify Forms retornou erro:', response.status);
      return {
        success: false,
        error:
          'Não conseguimos enviar sua mensagem agora. Fale conosco pelo WhatsApp ou tente novamente em instantes.',
      };
    }

    return { success: true };
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
