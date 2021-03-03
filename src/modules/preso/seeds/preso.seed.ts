import { Factory, Seeder } from 'typeorm-seeding';
import Preso from '../entity/preso.entity';

export default class CreatePresos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Preso)().createMany(10);
  }
}
