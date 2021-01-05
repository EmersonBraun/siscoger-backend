import Adl from 'src/modules/adl/entity/adl.entity';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateAdls implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Adl)().createMany(10);
  }
}
