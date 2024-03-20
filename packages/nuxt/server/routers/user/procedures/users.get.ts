import { z } from 'zod'

import { publicProcedure } from '~/server/trpc'

const inputValidate = z.object({
  id: z.number(),
})

export const getUsers = publicProcedure
  .input(inputValidate)
  .query(() => {
    return [
      { id: 1, name: 'John Doe' },
    ]
  })
