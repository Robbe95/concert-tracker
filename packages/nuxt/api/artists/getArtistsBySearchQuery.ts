import { useTrpc } from '../useTrpc'

export async function getArtistsBySearchQuery(search: Ref<string>) {
  const { trpc } = useTrpc()
  const artists = await trpc.artists.getArtistsBySearch.query({ search: search.value })

  return artists
}
