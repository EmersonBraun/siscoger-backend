import { Factory, Seeder } from 'typeorm-seeding';
import Fatd from '../entity/fatd.entity';

export default class CreateFatds implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Fatd)().createMany(10);
  }
}
