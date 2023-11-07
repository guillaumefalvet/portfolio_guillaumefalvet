import { z } from 'zod';
export const emailFormValidation = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  subject: z.string().min(3).max(200),
  message: z.string().min(3).max(1000),
});
