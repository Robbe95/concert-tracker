import { router } from '~/server/trpc/trpc'

import { getArtistsBySearch } from '../procedures/getArtistsBySearch'

export const artistsRouter = router({
  getArtistsBySearch,
})
