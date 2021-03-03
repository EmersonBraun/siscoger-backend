import { Factory, Seeder } from 'typeorm-seeding';
import ProcOutros from '../entity/procoutros.entity';

export default class CreateProcOutross implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(ProcOutros)().createMany(10);
  }
}
