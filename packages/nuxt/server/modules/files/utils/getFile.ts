import { useSupabase } from '~/client/api/useClientSupabase'

export function getFile(path: string) {
  const supabase = useSupabase()
  const { data } = supabase.storage.from('concert_tracker').getPublicUrl(path)

  return data.publicUrl
}
