import { Factory, Seeder } from 'typeorm-seeding';
import Denunciacivil from '../entity/denunciacivil.entity';

export default class CreateDenunciacivils implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Denunciacivil)().createMany(10);
  }
}
