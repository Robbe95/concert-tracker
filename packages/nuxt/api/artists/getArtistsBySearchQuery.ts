import { useQuery } from '@tanstack/vue-query'

import { useTrpc } from '../useTrpc'

export function getArtistsBySearchQuery(search: Ref<string>) {
  return useQuery({
    queryFn: async () => {
      const { trpc } = useTrpc()

      const artists = await trpc.artists.getArtistsBySearch.query({ search: search.value })

      return artists
    },
    queryKey: [
      'artists',
      search,
    ],
  })
}
