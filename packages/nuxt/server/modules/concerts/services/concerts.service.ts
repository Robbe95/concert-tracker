import { useDatabase } from '~/server/database/database'

import type { ConcertCreateInput } from '../models/concert.model'
import { concerts } from '../models/concert.model'

export function useConcertsService() {
  const db = useDatabase()

  async function getConcerts() {
    return await db.select().from(concerts)
  }

  async function createConcert(concertCreateInput: ConcertCreateInput) {
    return await db.insert(concerts).values(concertCreateInput).returning()
  }

  return {
    createConcert,
    getConcerts,
  }
}
