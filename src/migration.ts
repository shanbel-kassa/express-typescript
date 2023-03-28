import * as dotenv from 'dotenv'
import { Client } from 'pg'
import { loadMigrationFiles, migrate } from 'postgres-migrations'
dotenv.config()

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
})
 
const runMigrations = async function () {
  const path = './migrations/'
  try {
    client.connect()
    await loadMigrationFiles(path)
    await migrate({ client }, path)
  } catch (e) {
    console.log(e)
  } finally {
    await client.end()
  }
}

runMigrations()
