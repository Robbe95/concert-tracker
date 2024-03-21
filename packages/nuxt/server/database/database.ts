import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

export function useDatabase() {
  const runtimeConfig = useRuntimeConfig()

  const connectionString = runtimeConfig.dbUrl

  const client = postgres(connectionString)
  const db = drizzle(client)

  return db
}
