import { Factory, Seeder } from 'typeorm-seeding';
import Adl from '../entity/adl.entity';

export default class CreateAdls implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Adl)().createMany(10);
  }
}
