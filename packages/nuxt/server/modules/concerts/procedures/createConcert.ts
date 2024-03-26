import { authProcedure } from '~/server/trpc/trpc'
import { concert } from '~/shared/models/concert.model'
import { concertCreateInput } from '~/shared/models/concertCreate.model'

import { useConcertsService } from '../services/concerts.service'

export const createConcert = authProcedure
  .input(concertCreateInput)
  .output(concert.array())
  .mutation(async ({ input }) => {
    const concertService = useConcertsService()
    const concertResponse = await concertService.createConcert(input)

    return concertResponse
  })
