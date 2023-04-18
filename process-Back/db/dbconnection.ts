
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const db = new Sequelize(DB_NAME as string, DB_USER as string, DB_PASSWORD, {
  host: DB_HOST,
  port: parseInt(DB_PORT as string, 10),
  dialect: 'postgres',
});

export default db;
