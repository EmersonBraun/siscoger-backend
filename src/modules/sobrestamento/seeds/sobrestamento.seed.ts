import { Seeder, Factory } from 'typeorm-seeding';
import { Sobrestamento } from '../entity/sobrestamento.entity';

export default class CreateSobrestamentos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Sobrestamento)().createMany(10);
  }
}
