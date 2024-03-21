import { router } from '~/server/trpc/trpc'

import { getConcerts } from '../prodecures/concerts.get'

export const concertsRouter = router({
  getConcerts,
})
