import { useSupabase } from '~/api/useClientSupabase'

export function uploadFile(path: string) {
  const supabase = useSupabase()
  const { data } = supabase.storage.from('concert_tracker').getPublicUrl(path)

  return data
}
