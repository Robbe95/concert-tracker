import { eq } from 'drizzle-orm'

import { useDatabase } from '~/server/database/database'
import { concerts } from '~/server/entities/concerts.entity'
import { concertUser } from '~/server/entities/concertUser.entity'

import type { ConcertCreateInput } from '../models/concert.model'

export function useConcertsService() {
  const db = useDatabase()

  async function getConcerts() {
    return await db.select().from(concerts)
  }

  async function getConcertsOfUserId(userId: string) {
    return await db
      .select({
        name: concerts.name,
      })
      .from(concertUser)
      .leftJoin(concerts, eq(concertUser.concertId, concerts.id))
      .where(eq(concertUser.userId, userId))
  }

  async function createConcert(concertCreateInput: ConcertCreateInput) {
    return await db.insert(concerts).values(concertCreateInput).returning()
  }

  return {
    createConcert,
    getConcerts,
    getConcertsOfUserId,
  }
}
