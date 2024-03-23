import { useTrpc } from '../useTrpc'

export async function getConcertsByUserId() {
  const { trpc } = useTrpc()
  const concerts = await trpc.concerts.getConcertsByUserId.query()

  return concerts
}
