import { Seeder, Factory } from 'typeorm-seeding';
import { Cj } from '../entity/cj.entity';

export default class CreateSindicancias implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Cj)().createMany(10);
  }
}
