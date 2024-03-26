import { useMutation, useQueryClient } from '@tanstack/vue-query'

import { useTrpc } from '~/client/api/useTrpc'
import type { ConcertCreateInput } from '~/shared/models/concerts/concertCreate.model'

export function useCreateConcertMutation() {
  return useMutation({
    mutationFn: async (input: ConcertCreateInput) => {
      const { trpc } = useTrpc()

      const concerts = await trpc.concerts.createConcert.mutate(input)

      return concerts
    },
    onSuccess: () => {
      const queryClient = useQueryClient()

      void queryClient.invalidateQueries({
        queryKey: [
          'concerts-by-user',
        ],
      })
      void queryClient.invalidateQueries({
        queryKey: [
          'concerts',
        ],
      })
    },
  })
}
