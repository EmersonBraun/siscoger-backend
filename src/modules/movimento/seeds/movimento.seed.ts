import { Seeder, Factory } from 'typeorm-seeding';
import { Movimento } from '../entity/movimento.entity';

export default class CreateMovimentos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Movimento)().createMany(10);
  }
}
