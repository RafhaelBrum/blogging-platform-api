import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// pool.query("SELECT NOW()")
//     .then(res => console.log(res.rows))
//     .catch(err => console.error(err));

export default pool;