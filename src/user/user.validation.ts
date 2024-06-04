import { ZodType, z } from 'zod';

export class UserValidation {
  static readonly REGISTER: ZodType = z.object({
    first_name: z.string().min(1).max(100),
    last_name: z.string().min(1).max(100),
    email: z.string().min(1).max(100),
    password: z.string().min(1).max(100),
  });

  static readonly LOGIN: ZodType = z.object({
    email: z.string().min(1).max(100),
    password: z.string().min(1).max(100),
  });
}
