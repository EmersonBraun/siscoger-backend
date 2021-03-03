/* eslint-disable @typescript-eslint/ban-types */
import { Connection, createConnection, EntitySchema } from 'typeorm';

type Entity = Function | string | EntitySchema<any>;
let db: Connection;

export async function rootTypeormTestModule(entities: Entity[]) {
  return createConnection({
    // name, // let TypeORM manage the connections
    type: 'sqlite',
    database: ':memory:',
    entities,
    dropSchema: true,
    synchronize: true,
    logging: false,
  });
}

export const closeInTypeormConnection = async () => {
  if (db) await db.close();
};

// beforeAll(async () => {
//   db = await createMemDB([User])
//   userRepository = await db.getRepository(User)
//   userService = new UserService(userRepository) // <--- manually inject
// })
// afterAll(() => db.close())
