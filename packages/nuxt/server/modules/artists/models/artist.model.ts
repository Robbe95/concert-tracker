import { z } from 'zod'

export const artistSchema = z.object({
  followers: z.number(),
  genres: z.array(z.string()),
  href: z.string(),
  image: z.string(),
  name: z.string(),
  popularity: z.number(),
  spotifyId: z.string(),
  spotifyUrl: z.string(),
})

export type Artist = z.infer<typeof artistSchema>
