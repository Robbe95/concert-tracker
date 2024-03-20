import { router } from '~/server/trpc'

import { getUsers } from './procedures/users.get'

export const userRouter = router({
  getUsers,
})
