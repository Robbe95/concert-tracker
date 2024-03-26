import type { z } from 'zod'

import { concertSelectSchema } from '~/server/modules/concerts/models/concert.model'

export const concert = concertSelectSchema.transform(data => ({
  ...data,
}))

export type Concert = z.infer<typeof concert>
