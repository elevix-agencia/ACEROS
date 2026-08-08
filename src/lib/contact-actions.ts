'use server';

import { initializeFirebase } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, { message: 'O nome é obrigatório.' }),
  company: z.string().min(2, { message: 'A empresa é obrigatória.' }).optional().or(z.literal('')),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }).optional().or(z.literal('')),
  phone: z.string().min(10, { message: 'Por favor, insira um telefone válido.' }),
  city: z.string().optional().or(z.literal('')),
  message: z.string().optional().or(z.literal('')),
  source: z.string().optional(),
});

export async function saveContactMessage(
  data: any
): Promise<{ success: boolean; error?: string }> {
  try {
    // 1. Validar dados (Obrigatório)
    const validatedData = contactSchema.parse(data);
    const sourceLabel = validatedData.source === 'lp-tubos' ? 'Tubos de Aço Inox' : 
                       validatedData.source === 'lp-bucha' ? 'Buchas de Aço Inox' : 'Geral';

    // 2. Executar ações em paralelo para não travar a resposta
    const actions = [];

    // Ação A: Salvar no Firestore
    const firestorePromise = (async () => {
      try {
        const { firestore } = initializeFirebase();
        if (firestore) {
          const collectionRef = collection(firestore, 'contacts');
          await Promise.race([
            addDoc(collectionRef, {
              ...validatedData,
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp(),
              status: 'new'
            }),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Firestore Timeout')), 4000))
          ]);
        }
      } catch (e) {
        console.error('Falha silenciosa no Firestore:', e);
      }
    })();
    actions.push(firestorePromise);

    // Ação B: Enviar E-mail via Resend
    const emailPromise = (async () => {
      try {
        if (!process.env.RESEND_API_KEY) {
          console.warn('RESEND_API_KEY não configurada. E-mail não enviado.');
          return;
        }

        await resend.emails.send({
          from: 'Aceros Website <onboarding@resend.dev>', // Em produção, usar domínio autenticado
          to: 'vendas@aceros.com.br',
          subject: `[Novo Lead LP ${sourceLabel}] - ${validatedData.name}`,
          html: `
            <div style="font-family: sans-serif; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
              <h2 style="color: #ff8c00; border-bottom: 2px solid #ff8c00; padding-bottom: 10px;">Novo Orçamento Recebido</h2>
              <p><strong>Origem:</strong> Landing Page de ${sourceLabel}</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0;"><strong>Nome:</strong></td><td>${validatedData.name}</td></tr>
                <tr><td style="padding: 8px 0;"><strong>Empresa:</strong></td><td>${validatedData.company || 'Não informado'}</td></tr>
                <tr><td style="padding: 8px 0;"><strong>Telefone/WhatsApp:</strong></td><td>${validatedData.phone}</td></tr>
                <tr><td style="padding: 8px 0;"><strong>Cidade/UF:</strong></td><td>${validatedData.city || 'Não informado'}</td></tr>
                <tr><td style="padding: 8px 0;"><strong>E-mail:</strong></td><td>${validatedData.email || 'Não informado'}</td></tr>
              </table>
              <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
                <strong>Mensagem/Especificações:</strong><br />
                <p style="white-space: pre-wrap;">${validatedData.message || 'Sem mensagem adicional.'}</p>
              </div>
              <p style="font-size: 10px; color: #999; margin-top: 30px;">Este é um e-mail automático gerado pelo formulário do site Aceros.</p>
            </div>
          `
        });
      } catch (e) {
        console.error('Erro ao enviar e-mail:', e);
      }
    })();
    actions.push(emailPromise);

    // Aguarda todas as ações (mesmo se falharem, retornaremos sucesso para o usuário se a validação passou)
    await Promise.allSettled(actions);

    return { success: true };
  } catch (error: any) {
    console.error('Erro crítico na Server Action:', error);
    return { success: false, error: 'Ocorreu um erro ao processar sua solicitação.' };
  }
}
