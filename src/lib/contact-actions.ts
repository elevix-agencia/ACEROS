
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
  // Timeout de segurança de 5 segundos
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error('Tempo limite de conexão excedido.')), 5000)
  );

  try {
    const { firestore } = initializeFirebase();
    if (!firestore) {
      throw new Error('Firestore não inicializado.');
    }

    // Validar dados
    const validatedData = contactSchema.parse(data);

    const contactData = {
      ...validatedData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      status: 'new'
    };

    const collectionRef = collection(firestore, 'contacts');

    // Executa a gravação com corrida contra o timeout
    await Promise.race([
      addDoc(collectionRef, contactData),
      timeout
    ]);

    return { success: true };
  } catch (error: any) {
    console.error('Erro na Server Action saveContactMessage:', error);
    
    let errorMessage = 'Não foi possível processar sua solicitação agora.';
    
    if (error instanceof z.ZodError) {
      errorMessage = 'Por favor, verifique os campos preenchidos.';
    } else if (error.message === 'Tempo limite de conexão excedido.') {
      errorMessage = 'O servidor demorou muito para responder. Tente via WhatsApp!';
    } else if (error.code === 'permission-denied') {
      errorMessage = 'Erro de permissão no banco de dados.';
    }

    return { success: false, error: errorMessage };
  }
}
