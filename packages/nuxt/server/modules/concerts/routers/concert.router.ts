import { router } from '~/server/trpc/trpc'

import { getConcerts } from '../prodecures/concerts.get'
import { getConcertsByUserId } from '../prodecures/getConcertsByUserId'

export const concertsRouter = router({
  getConcerts,
  getConcertsByUserId,
})
