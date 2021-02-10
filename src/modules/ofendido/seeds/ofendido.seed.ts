import { Seeder, Factory } from 'typeorm-seeding';
import { Ofendido } from '../entity/ofendido.entity';

export default class CreateOfendidos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Ofendido)().createMany(10);
  }
}
