import type { Config } from 'drizzle-kit'

export default {
  schema: './src/db/schema.ts',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: !!process.env.PRODUCTION,
  out: './drizzle/migrations',
} satisfies Config
