/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */

import { userRouter } from './routers/user/user.router'
import { router } from './trpc'

export const appRouter = router({
  user: userRouter,
})
// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter

// export API handler
