import { z } from 'zod'

import { useArtistsService } from '~/server/modules/artists/services/artists.service'
import { authProcedure } from '~/server/trpc/trpc'

export const getArtistsBySearch = authProcedure
  .input(z.object({
    search: z.string().min(1),
  }))
  .query(async ({ input }) => {
    const artistsService = useArtistsService()

    return await artistsService.getArtists(input.search)
  })
