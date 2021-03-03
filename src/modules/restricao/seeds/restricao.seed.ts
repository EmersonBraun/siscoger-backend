import { Factory, Seeder } from 'typeorm-seeding';
import Restricao from '../entity/restricao.entity';

export default class CreateRestricaos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Restricao)().createMany(10);
  }
}
