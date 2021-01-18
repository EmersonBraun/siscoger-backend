import { Seeder, Factory } from 'typeorm-seeding';
import { Comportamento } from '../entity/comportamento.entity';

export default class CreateComportamentos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Comportamento)().createMany(10);
  }
}
