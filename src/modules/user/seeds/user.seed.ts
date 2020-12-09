import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { User } from '../entity/user.entity';

export default class Createusers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const user = await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {cpf: '123456', rg: '123456', password: '123456', email: 'teste@teste.com'}
      ])
      .execute()

      console.log(user)
      await factory(User)().createMany(10)
  }
}