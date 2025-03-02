import { datetime, timestamp, mysqlTable, text, varchar } from 'drizzle-orm/mysql-core'

export const exampleTable = mysqlTable('example', {
  id: varchar('id', { length: 255 }).primaryKey(),
  name: varchar('name', { length: 255 }),
  start: datetime('start').notNull(),
  end: datetime('end'),
  notes: text('notes'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})

export const schema = {
  exampleTable,
}
