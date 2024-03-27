import type { SupabaseClient } from '@supabase/supabase-js'
import { createClient } from '@supabase/supabase-js'

let supabase: SupabaseClient | null = null

export async function useSupabase() {
  const runtimeConfig = useRuntimeConfig()

  const supabaseUrl = runtimeConfig.public.supabaseUrl
  const supabaseKey = runtimeConfig.public.supabaseKey

  const supabaseAdminEmail = runtimeConfig.supabaseAdminEmail
  const supabaseAdminPassword = runtimeConfig.supabaseAdminPassword

  if (supabase == null) {
    supabase = createClient(supabaseUrl, supabaseKey)
    await supabase.auth.signInWithPassword({
      email: supabaseAdminEmail,
      password: supabaseAdminPassword,
    })
  }

  return supabase
}
