import { spotifyArtistsResponseSchema } from '~/server/modules/artists/models/spotifyArtist.model'
import { artistsTransformers } from '~/server/modules/artists/transformers/artists.transformers'

export function useArtistsService() {
  async function getArtists(search: string) {
    const { getSpotifyAuth } = useSpotifyAuth()
    const spotifyAuth = await getSpotifyAuth()

    if (spotifyAuth == null) {
      return []
    }

    const response = await $fetch('https://api.spotify.com/v1/search', {
      headers: {
        'Authorization': `Bearer ${spotifyAuth.accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'GET',
      params: {
        limit: '10',
        market: 'US',
        q: search,
        type: 'artist',
      },
    })

    const parsedResponse = spotifyArtistsResponseSchema.parse(response)
    const artists = parsedResponse.artists.items.map(artistsTransformers.spotifyToArtist)

    return artists
  }

  return { getArtists }
}
