import { Factory, Seeder } from 'typeorm-seeding';
import Posto from '../entity/posto.entity';

export default class CreatePostos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Posto)().createMany(10);
  }
}
