import { Ofendido } from 'src/modules/ofendido/entity/ofendido.entity';
import { Seeder, Factory } from 'typeorm-seeding';

export default class CreateOfendidos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Ofendido)().createMany(10);
  }
}
