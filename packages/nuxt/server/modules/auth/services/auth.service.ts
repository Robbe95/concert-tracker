import { useSupabase } from '~/server/database/supabase'
import type { LoginInput } from '~/server/modules/auth/models/login.model'

export function useAuthService() {
  const supabase = useSupabase()

  async function login(loginInput: LoginInput) {
    return await supabase.auth.signInWithPassword({
      email: loginInput.email,
      password: loginInput.password,
    })
  }

  return {
    login,
  }
}
