import { z } from 'zod'

export const concertCreateInput = z.object({
  image: z.string(),
  name: z.string(),
})

export type ConcertCreateInput = z.infer<typeof concertCreateInput>
