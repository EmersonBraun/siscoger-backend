import { resolve } from 'path';
import { createConnection } from 'typeorm';

export const sqliteDatabaseProvider = [
  {
    provide: 'SQLITE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'sqlite',
        database: ':memory:',
        entities: [
          resolve(__dirname, 'modules', '**', 'entity', '*.entity.{ts,js}'),
        ],
        dropSchema: true,
        synchronize: true,
        logging: false,
      }),
  },
];
