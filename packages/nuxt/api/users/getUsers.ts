import { useTrpc } from '../trpcClient'

export async function getUsers() {
  const client = useTrpc()
  const users = await client.user.getUsers.query({
    id: 1,
  })

  return users
}
