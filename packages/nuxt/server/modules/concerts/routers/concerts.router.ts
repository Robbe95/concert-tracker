import { router } from '~/server/trpc/trpc'

import { getConcerts } from '../procedures/getConcerts'
import { getConcertsByUserId } from '../procedures/getConcertsByUserId'

export const concertsRouter = router({
  getConcerts,
  getConcertsByUserId,
})
