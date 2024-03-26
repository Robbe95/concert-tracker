import { BUCKET_NAME } from '~/server/constants/bucketName'
import { useSupabase } from '~/server/database/supabase'
import { authProcedure } from '~/server/trpc/trpc'
import { filesCreateUploadUrlInput, filesCreateUploadUrlOutput } from '~/shared/models/files/filesCreateUploadUrl.model'
import { generateUuid } from '~/shared/utils/generateUuid'

export const getSignedUploadUrl = authProcedure
  .input(filesCreateUploadUrlInput)
  .output(filesCreateUploadUrlOutput)
  .mutation(async ({ input }) => {
    const supabase = useSupabase()
    const uuid = generateUuid()
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .createSignedUploadUrl(`${input.concertId}/${input.filename}:${uuid}`)

    if (error != null) {
      console.error(error)

      throw error
    }

    return data
  })
