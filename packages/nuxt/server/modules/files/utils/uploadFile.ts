import { useSupabase } from '~/api/useClientSupabase'

import type { Folder } from '../types/folder.type'

export async function uploadFile(file: File, folder: Folder) {
  const supabase = useSupabase()
  const randomFileName = `${Math.random().toString(36).substring(2)}-${file.name}`
  const fullPath = `${folder}/${randomFileName}`
  const { data, error } = await supabase.storage.from('bucket_name').upload(fullPath, file)

  if (error != null) {
    console.error(error)
  }

  return data
}