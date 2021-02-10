import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { User } from '../entity/user.entity';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const user = await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          cpf: '123456',
          rg: '123456',
          password: '123456',
          email: 'teste@teste.com',
        },
      ])
      .execute();

<<<<<<< HEAD
      console.log(user)
      // await factory(User)().createMany(10)
=======
    console.log(user);
    await factory(User)().createMany(10);
>>>>>>> f3570f884e2cdcf6d9de59e2803ba90a53e52660
  }
}
