/* eslint-disable @typescript-eslint/no-var-requires */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { resolve } from 'path';

require('dotenv').config();

export const typeOrmOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: [
    'error',
    // 'info',
    'log',
    'migration',
    // 'query',
    'schema',
    'warn',
  ],
  entities: [resolve(__dirname, 'modules', '**', 'entity', '*.entity.{ts,js}')],
  migrations: [resolve(__dirname, 'modules', '**', 'migrations', '*.{ts,js}')],
  synchronize: process.env.DB_SYNC === 'true',
};

module.exports = typeOrmOptions;
