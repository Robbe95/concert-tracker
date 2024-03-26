import { router } from '~/server/trpc/trpc'

import { createConcert } from '../procedures/createConcert'
import { getConcerts } from '../procedures/getConcerts'
import { getConcertsByUserId } from '../procedures/getConcertsByUserId'

export const concertsRouter = router({
  createConcert,
  getConcerts,
  getConcertsByUserId,
})
