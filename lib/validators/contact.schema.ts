import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  company: z.string().min(2, 'Company is required'),
  businessType: z.enum(['risk', 'data', 'asset', 'other']),
});

export type ContactFormData = z.infer<typeof contactSchema>;
