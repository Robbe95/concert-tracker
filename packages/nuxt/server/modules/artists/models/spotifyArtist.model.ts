import { z } from 'zod'

export interface Image {
  height: number
  url: string
  width: number
}

export const spotifyImageSchema = z.object({
  height: z.number(),
  url: z.string(),
  width: z.number(),
})

export const spotifyFollowersSchema = z.object({
  href: z.unknown(),
  total: z.number(),
})

export const spotifyArtistSchema = z.object({
  external_urls: z.object({
    spotify: z.string(),
  }),
  followers: spotifyFollowersSchema,
  genres: z.array(z.string()),
  href: z.string(),
  id: z.string(),
  images: z.array(spotifyImageSchema),
  name: z.string(),
  popularity: z.number(),
  type: z.literal('artist'),
  uri: z.string(),
})

export const spotifyArtistsResponseSchema = z.object({
  artists: z.object({
    href: z.string(),
    items: z.array(spotifyArtistSchema),
    limit: z.number(),
    next: z.unknown(),
    offset: z.number(),
    previous: z.unknown(),
    total: z.number(),
  }),
})

export type SpotifyImage = z.infer<typeof spotifyImageSchema>
export type SpotifyFollowers = z.infer<typeof spotifyFollowersSchema>
export type SpotifyArtist = z.infer<typeof spotifyArtistSchema>
export type SpotifyArtistsResponse = z.infer<typeof spotifyArtistsResponseSchema>
