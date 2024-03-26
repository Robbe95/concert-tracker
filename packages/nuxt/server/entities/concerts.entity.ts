import {
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core'

export const concerts = pgTable('concerts', {
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  id: uuid('id').primaryKey().defaultRandom(),
  imageUrl: text('image_url').notNull(),
  name: text('name').notNull(),
})
