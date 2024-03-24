import {
  pgTable,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core'

import { concerts } from '~/server/entities/concerts.entity'

export const concertUser = pgTable('concert_user', {
  concertId: uuid('concert_id').notNull()
    .references(() => concerts.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull(),
})
