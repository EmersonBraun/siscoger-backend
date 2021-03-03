import { resolve } from 'path';
import { createConnection } from 'typeorm';

export const postgresDatabaseProvider = [
  {
    provide: 'CONNECTION',
    useFactory: async () =>
      await createConnection({
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
        entities: [
          resolve(__dirname, 'modules', '**', 'entity', '*.entity.{ts,js}'),
        ],
        migrations: [
          resolve(__dirname, 'modules', '**', 'migrations', '*.{ts,js}'),
        ],
        synchronize: process.env.DB_SYNC === 'true',
      }),
  },
];
