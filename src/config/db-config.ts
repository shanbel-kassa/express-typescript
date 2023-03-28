import { Pool } from "pg";
import * as dotenv from "dotenv";

dotenv.config();

export const dbConfig =  () => {
  try {
    const pool = new Pool({
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT,
    });
    return pool;
  } catch (error) {
    console.log(error);
  }
};

