import type { SpotifyAuth } from '~/server/models/spotifyTokens.model'
import { spotifyAuthSchema } from '~/server/models/spotifyTokens.model'

export function useSpotifyAuth() {
  const runtime = useRuntimeConfig()

  const spotifyClientId = runtime.spotifyClientId
  const spotifyClientSecret = runtime.spotifyClientSecret

  async function getSpotifyAuth(): Promise<SpotifyAuth | null> {
    try {
      const formData = new URLSearchParams({
        client_id: spotifyClientId,
        client_secret: spotifyClientSecret,
        grant_type: 'client_credentials',
      })

      const response = await $fetch('https://accounts.spotify.com/api/token', {
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
      })

      const parsedResponse = spotifyAuthSchema.parse(response)

      return parsedResponse
    }
    catch (error) {
      console.error(error)

      return null
    }
  }

  return {
    getSpotifyAuth,
  }
}
