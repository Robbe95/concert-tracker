import {
  date,
  pgTable,
  text,
  uuid,
} from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { z } from 'zod'

export const concerts = pgTable('concerts', {
  createdAt: date('created_at').defaultNow(),
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name'),
})

export const concertSelectSchema = createSelectSchema(concerts)
export const concertInsertSchema = createInsertSchema(concerts)

export const concertCreateInputSchema = z.object({
  name: z.string(),
})

export type ConcertCreateInput = z.infer<typeof concertCreateInputSchema>
export type ConcertSelect = z.infer<typeof concertSelectSchema>
export type ConcertInsert = z.infer<typeof concertInsertSchema>
