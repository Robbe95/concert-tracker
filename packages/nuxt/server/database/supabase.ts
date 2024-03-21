import { createClient } from '@supabase/supabase-js'

export function useSupabase() {
  const runtimeConfig = useRuntimeConfig()

  const supabaseUrl = runtimeConfig.supabaseUrl
  const supabaseKey = runtimeConfig.supabaseKey

  const supabase = createClient(supabaseUrl, supabaseKey)

  return supabase
}
