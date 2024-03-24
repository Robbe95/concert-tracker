import {
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core'

export const concerts = pgTable('concerts', {
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name'),
})
