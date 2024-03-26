import { useQuery } from '@tanstack/vue-query'

import { useTrpc } from '~/client/api/useTrpc'

export function getConcertsByUserIdQuery() {
  return useQuery({
    queryFn: async () => {
      const { trpc } = useTrpc()

      const concerts = await trpc.concerts.getConcertsByUserId.query()

      return concerts
    },
    queryKey: [
      'concerts-by-user',
    ],
  })
}
