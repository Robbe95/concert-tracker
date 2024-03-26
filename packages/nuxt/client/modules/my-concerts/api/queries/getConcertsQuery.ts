import { useQuery } from '@tanstack/vue-query'

import { useTrpc } from '~/client/api/useTrpc'

export function getConcertsQuery() {
  return useQuery({
    queryFn: async () => {
      const { trpc } = useTrpc()

      const concerts = await trpc.concerts.getConcerts.query()

      return concerts
    },
    queryKey: [
      'concerts',
    ],
  })
}
