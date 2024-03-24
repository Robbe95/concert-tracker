import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { z } from 'zod'

import { concerts } from '~/server/entities/concerts.entity'

export const concertCreateInputSchema = z.object({
  name: z.string(),
})

export const concertSelectSchema = createSelectSchema(concerts)
export const concertInsertSchema = createInsertSchema(concerts)

export type ConcertCreateInput = z.infer<typeof concertCreateInputSchema>
export type ConcertSelect = z.infer<typeof concertSelectSchema>
export type ConcertInsert = z.infer<typeof concertInsertSchema>
