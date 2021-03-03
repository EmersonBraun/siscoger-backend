import { Factory, Seeder } from 'typeorm-seeding';
import Reintegrado from '../entity/reintegrado.entity';

export default class CreateReintegrados implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Reintegrado)().createMany(10);
  }
}
