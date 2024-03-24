import { z } from 'zod'

export const spotifyAuthSchema = z.object({
  access_token: z.string(),
  expires_in: z.number(),
  token_type: z.string(),
}).transform(data => ({
  accessToken: data.access_token,
  expiresIn: data.expires_in,
  tokenType: data.token_type,
}))

export type SpotifyAuth = z.infer<typeof spotifyAuthSchema>
