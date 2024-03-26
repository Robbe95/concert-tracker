import { useMutation } from '@tanstack/vue-query'

import type { FilesCreateUploadUrlOutput } from '~/shared/models/files/filesCreateUploadUrl.model'

export function uploadToSignedUrlMutation() {
  return useMutation({
    mutationFn: async ({ file, fileData }: { file: File, fileData: FilesCreateUploadUrlOutput }) => {
      const {
        signedUrl,
        token,
      } = fileData

      const response = await $fetch(signedUrl, {
        body: file,
        headers: {
          'Content-Type': file.type,
          'authorization': `Bearer ${token}`,
        },
      })

      return response
    },
  })
}
