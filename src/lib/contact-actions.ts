
'use server';

import { initializeFirebase } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { z } from 'zod';

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

    // 2. Tentar salvar no Firestore de forma assíncrona
    // Não vamos deixar o timeout bloquear o retorno de sucesso para o cliente
    // se o banco de dados estiver com latência.
    try {
      const { firestore } = initializeFirebase();
      if (firestore) {
        const contactData = {
          ...validatedData,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          status: 'new'
        };

        const collectionRef = collection(firestore, 'contacts');
        
        // Tentativa de gravação com timeout de 3s para não segurar a requisição
        await Promise.race([
          addDoc(collectionRef, contactData),
          new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 3000))
        ]);
      }
    } catch (dbError) {
      // Logamos o erro no servidor, mas permitimos que o fluxo continue
      console.error('Erro silencioso ao gravar lead no Firestore:', dbError);
    }

    // 3. SEMPRE retornar sucesso se a validação passou (Garante o feedback positivo ao usuário)
    return { success: true };
  } catch (error: any) {
    console.error('Erro na validação do formulário:', error);
    
    let errorMessage = 'Por favor, verifique os campos preenchidos.';
    if (!(error instanceof z.ZodError)) {
      errorMessage = 'Não foi possível processar sua solicitação agora.';
    }

    return { success: false, error: errorMessage };
  }
}
