import { Factory, Seeder } from 'typeorm-seeding';
import SaiDiligencias from '../entity/saidiligencias.entity';

export default class CreateSaiDiligencias implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(SaiDiligencias)().createMany(10);
  }
}
