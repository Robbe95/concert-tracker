import { useTrpc } from '../trpcClient'

export async function getConcertsQuery() {
  const client = useTrpc()
  const users = await client.concerts.getConcerts.query()

  return users
}
