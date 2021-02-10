import { Seeder, Factory } from 'typeorm-seeding';
import { Cd } from '../entity/cd.entity';

export default class CreateSindicancias implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Cd)().createMany(10);
  }
}
