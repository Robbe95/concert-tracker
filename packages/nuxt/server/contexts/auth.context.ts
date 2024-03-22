import type { inferAsyncReturnType } from '@trpc/server'
import type { H3Event } from 'h3'

import { useSupabase } from '../database/supabase'

export async function createContext(event: H3Event) {
  const supabase = useSupabase()
  const authorization = getRequestHeader(event, 'authorization')

  async function getUserFromHeader() {
    try {
      if (authorization != null) {
        return (await supabase.auth.getUser(authorization.split(' ')[1])).data.user
      }

      return null
    }
    catch (error) {
      return null
    }
  }

  const user = await getUserFromHeader()

  return {
    user,
  }
}
export type AuthContext = inferAsyncReturnType<typeof createContext>
