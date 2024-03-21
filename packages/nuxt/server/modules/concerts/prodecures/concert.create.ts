import { publicProcedure } from '~/server/trpc/trpc'

import { concertCreateInputSchema, concertSelectSchema } from '../models/concert.model'
import { useConcertsService } from '../services/concerts.service'

const concertOutputSchema = concertSelectSchema.transform((data) => {
  return {
    name: data.name,
  }
})

export const createUser = publicProcedure
  .input(concertCreateInputSchema)
  .output(concertOutputSchema.array())
  .query(async (data) => {
    const concertService = useConcertsService()
    return await concertService.createConcert(data.input)
  })
