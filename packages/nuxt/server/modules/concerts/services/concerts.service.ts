import { eq } from 'drizzle-orm'

import { useDatabase } from '~/server/database/database'
import { concerts } from '~/server/entities/concerts.entity'
import { concertUser } from '~/server/entities/concertUser.entity'
import type { ConcertCreateInput } from '~/shared/models/concerts/concertCreate.model'

export function useConcertsService() {
  const db = useDatabase()

  async function getConcerts() {
    return await db
      .select()
      .from(concerts)
  }

  async function getConcertsOfUserId(userId: string) {
    return await db
      .select()
      .from(concerts)
      .leftJoin(concertUser, eq(concertUser.concertId, concerts.id))
      .where(eq(concertUser.userId, userId))
  }

  async function createConcert(concertCreateInput: ConcertCreateInput) {
  }

  return {
    createConcert,
    getConcerts,
    getConcertsOfUserId,
  }
}
