import { type MySql2Database, drizzle } from 'drizzle-orm/mysql2'
import { schema } from './schema'
import { env } from '~/config'

let db: MySql2Database<typeof schema>
export type Database = typeof db

export function connectDB() {
  if (!db) {
    db = drizzle(env.DATABASE_URL, {
      mode: 'default',
      schema: schema,
    })
  }
  return db
}

export async function closeDB() {
  await (db as any)?.$client.end()
}
