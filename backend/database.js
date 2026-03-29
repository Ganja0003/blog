import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config();

const db = knex({
    client: 'mysql2',
    connection: {
        host: process.env.MYSQLHOST,
        port: process.env.MYSQLPORT,
        user: process.env.MYSQLUSER,
        password: process.env.MYSQLPASSWORD,
        database: process.env.MYSQLDATABASE,
    }
});

db.raw('SELECT 1')
  .then(() => console.log('DB connected!'))
  .catch((err) => console.error('DB connection error:', err));


export default db;