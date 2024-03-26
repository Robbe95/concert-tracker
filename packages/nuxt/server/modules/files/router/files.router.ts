import { router } from '~/server/trpc/trpc'

import { getSignedUploadUrl } from '../procedures/getSignedUploadUrl'

export const filesRouter = router({
  getSignedUploadUrl,
})
