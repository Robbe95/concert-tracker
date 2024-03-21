import { loginInputSchema } from '~/server/modules/auth/models/login.model'
import { useAuthService } from '~/server/modules/auth/services/auth.service'
import { publicProcedure } from '~/server/trpc/trpc'

export const login = publicProcedure
  .input(loginInputSchema)
  .mutation(async (data) => {
    const authService = useAuthService()
    const loginResponse = await authService.login(data.input)

    return loginResponse
  })
