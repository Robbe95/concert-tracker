import { eq } from 'drizzle-orm'

import { useDatabase } from '~/server/database/database'
import { concerts } from '~/server/entities/concerts.entity'
import { concertUser } from '~/server/entities/concertUser.entity'
import type { ConcertInsert } from '~/server/modules/concerts/models/concert.model'
import { uploadFile } from '~/server/modules/files/utils/uploadFile'
import type { ConcertCreateInput } from '~/shared/models/concerts/concertCreate.model'
import { base64Util } from '~/shared/utils/base64'

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
    const file = base64Util.base64ToFile(concertCreateInput.image)
    const uploadedFile = await uploadFile(file, 'concerts')

    const dataObject: ConcertInsert = {
      imageUrl: uploadedFile,
      name: concertCreateInput.name,
    }

    return await db
      .insert(concerts)
      .values(dataObject)
      .returning()
  }

  return {
    createConcert,
    getConcerts,
    getConcertsOfUserId,
  }
}
