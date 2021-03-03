import { Factory, Seeder } from 'typeorm-seeding';
import Pad from '../entity/pad.entity';

export default class CreatePads implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Pad)().createMany(10);
  }
}
