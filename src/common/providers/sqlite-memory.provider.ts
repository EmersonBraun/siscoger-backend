import { resolve } from 'path';
import { createConnection } from 'typeorm';

export const sqliteMemoryDatabaseProvider = [
  {
    provide: 'SQLITE_MEMORY_CONNECTION',
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
