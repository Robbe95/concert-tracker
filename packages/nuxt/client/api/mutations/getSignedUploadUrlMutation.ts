import { useMutation } from '@tanstack/vue-query'

import { useTrpc } from '~/client/api/useTrpc'
import type { FilesCreateUploadUrlInput } from '~/shared/models/files/filesCreateUploadUrl.model'

export function getSignedUploadUrlMutation() {
  return useMutation({
    mutationFn: async ({ concertId, filename }: FilesCreateUploadUrlInput) => {
      const { trpc } = useTrpc()

      const signedUploadUrl = await trpc.files.getSignedUploadUrl.mutate({
        concertId,
        filename,
      })

      return signedUploadUrl
    },
  })
}
