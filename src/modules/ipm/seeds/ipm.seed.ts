import { Factory, Seeder } from 'typeorm-seeding';
import Ipm from '../entity/ipm.entity';

export default class CreateIpms implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Ipm)().createMany(10);
  }
}
