import { Factory, Seeder } from 'typeorm-seeding';
import RespCivil from '../entity/respcivil.entity';

export default class CreateRespCivils implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(RespCivil)().createMany(10);
  }
}
