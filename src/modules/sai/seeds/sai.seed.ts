import { Factory, Seeder } from 'typeorm-seeding';
import Sai from '../entity/sai.entity';

export default class CreateSais implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Sai)().createMany(10);
  }
}
