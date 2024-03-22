import { authProcedure } from '~/server/trpc/trpc'

import { concertSelectSchema } from '../models/concert.model'
import { useConcertsService } from '../services/concerts.service'

const concertsOutputSchema = concertSelectSchema.pick({ name: true })

export const getConcerts = authProcedure
  .output(concertsOutputSchema.array())
  .query(async () => {
    const concertsService = useConcertsService()

    return await concertsService.getConcerts()
  })
