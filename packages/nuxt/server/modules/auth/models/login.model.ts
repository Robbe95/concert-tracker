import { z } from 'zod'

export const loginInputSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export type LoginInput = z.infer<typeof loginInputSchema>
