import { Sindicancia } from 'src/modules/sindicancia/entity/sindicancia.entity';
import { Seeder, Factory } from 'typeorm-seeding';

export default class CreateSindicancias implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Sindicancia)().createMany(10);
  }
}
