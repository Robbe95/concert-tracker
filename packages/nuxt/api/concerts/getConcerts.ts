import { useTrpc } from '../useTrpc'

export async function getConcertsQuery() {
  const { trpc } = useTrpc()
  const concerts = await trpc.concerts.getConcerts.query()

  return concerts
}
