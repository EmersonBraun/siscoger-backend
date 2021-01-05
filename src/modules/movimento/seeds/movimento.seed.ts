import { Movimento } from 'src/modules/movimento/entity/movimento.entity';
import { Seeder, Factory } from 'typeorm-seeding';

export default class CreateMovimentos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Movimento)().createMany(10);
  }
}
