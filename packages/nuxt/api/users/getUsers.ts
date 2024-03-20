import { client } from '../trpcClient'

export async function getUsers() {
  const users = await client.user.getUsers.query({
    id: 1,
  })
  return users
}
