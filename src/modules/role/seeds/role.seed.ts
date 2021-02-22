import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Role } from '../entity/role.entity';

export default class CreateRoles implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    // await factory(Role)().createMany(10);

    await connection
      .createQueryBuilder()
      .insert()
      .into(Role)
      .values([
        { role: 'admin' },
        { role: 'sjd' },
        { role: 'auxiliar-sjd' },
        { role: 'crpm' },
      ])
      .execute();
  }
}
