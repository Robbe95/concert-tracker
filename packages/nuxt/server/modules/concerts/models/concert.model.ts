import {
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { z } from 'zod'

export const concerts = pgTable('concerts', {
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name'),
})

export const concertUser = pgTable('concert_user', {
  concertId: uuid('concert_id').notNull()
    .references(() => concerts.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull(),
})

export const concertSelectSchema = createSelectSchema(concerts)
export const concertInsertSchema = createInsertSchema(concerts)

export const concertCreateInputSchema = z.object({
  name: z.string(),
})

export type ConcertCreateInput = z.infer<typeof concertCreateInputSchema>
export type ConcertSelect = z.infer<typeof concertSelectSchema>
export type ConcertInsert = z.infer<typeof concertInsertSchema>
