import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import type { z } from 'zod'

import { concerts } from '~/server/entities/concerts.entity'

export const concertSelectSchema = createSelectSchema(concerts)
export const concertInsertSchema = createInsertSchema(concerts)

export type ConcertSelect = z.infer<typeof concertSelectSchema>
export type ConcertInsert = z.infer<typeof concertInsertSchema>
