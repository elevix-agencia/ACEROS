
'use server';

import { initializeFirebase } from '@/firebase';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
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
    const { firestore } = initializeFirebase();
    if (!firestore) {
      throw new Error('Firestore is not initialized.');
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

    await addDoc(collectionRef, contactData).catch(serverError => {
      const permissionError = new FirestorePermissionError({
        path: collectionRef.path,
        operation: 'create',
        requestResourceData: contactData,
      });
      errorEmitter.emit('permission-error', permissionError);
      throw new Error('Erro de permissão no Firestore.');
    });

    return { success: true };
  } catch (error: unknown) {
    console.error('Erro ao salvar contato:', error);
    let errorMessage = 'Erro ao processar sua solicitação.';
    if (error instanceof z.ZodError) {
      errorMessage = 'Por favor, preencha todos os campos obrigatórios corretamente.';
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    return { success: false, error: errorMessage };
  }
}
