import process from 'node:process'

import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dbCredentials: {
    connectionString: process.env.NUXT_RUNTIME_DB_URL ?? '',
  },
  driver: 'pg',
  out: './server/migrations',
  schema: [
    './server/entities/**/*.ts',
  ],
  strict: true,
  verbose: true,
})
