import {
  numeric,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core'

import { concerts } from './concerts.entity'

export const concertUser = pgTable('concert_user', {
  concertId: uuid('concert_id').notNull()
    .references(() => concerts.id, { onDelete: 'no action', onUpdate: 'no action' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  id: uuid('id').primaryKey().defaultRandom(),
  notes: text('notes'),
  rating: numeric('rating'),
  userId: uuid('user_id').notNull(),
})
