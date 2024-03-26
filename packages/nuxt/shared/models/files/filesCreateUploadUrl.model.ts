import { z } from 'zod'

export const filesCreateUploadUrlInput = z.object({
  concertId: z.string(),
  filename: z.string(),
})

export const filesCreateUploadUrlOutput = z.object({
  path: z.string(),
  signedUrl: z.string(),
  token: z.string(),
})

export type FilesCreateUploadUrlInput = z.infer<typeof filesCreateUploadUrlInput>
export type FilesCreateUploadUrlOutput = z.infer<typeof filesCreateUploadUrlOutput>
