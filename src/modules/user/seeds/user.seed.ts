import bcrypt from 'bcrypt';
import { Role } from 'src/modules/role/entity/role.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { User } from '../entity/user.entity';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const role = await connection.manager.findOne(Role, { role: 'admin' });
    const user = await connection.manager.save(User, {
      name: 'user teste',
      cpf: '123456',
      rg: '123456',
      password: await bcrypt.hash('123456', 10),
      email: 'teste@teste.com',
      roles: [role],
    });

    console.log(user);
    // await factory(User)().createMany(10)
  }
}
