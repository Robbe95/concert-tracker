import { login } from '~/server/modules/auth/procedures/login.mutation'
import { router } from '~/server/trpc/trpc'

export const authRouter = router({
  login,
})
