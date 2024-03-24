import type { Artist } from '~/server/modules/artists/models/artist.model'
import type { SpotifyArtist } from '~/server/modules/artists/models/spotifyArtist.model'

export const artistsTransformers = {
  spotifyToArtist: (spotifyArtist: SpotifyArtist): Artist => {
    return {
      followers: spotifyArtist.followers.total,
      genres: spotifyArtist.genres,
      href: spotifyArtist.href,
      image: spotifyArtist.images[0]?.url,
      name: spotifyArtist.name,
      popularity: spotifyArtist.popularity,
      spotifyId: spotifyArtist.id,
      spotifyUrl: spotifyArtist.external_urls.spotify,
    }
  },
}
