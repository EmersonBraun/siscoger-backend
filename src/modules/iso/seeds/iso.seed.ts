import { Factory, Seeder } from 'typeorm-seeding';
import Iso from '../entity/iso.entity';

export default class CreateIsos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Iso)().createMany(10);
  }
}
