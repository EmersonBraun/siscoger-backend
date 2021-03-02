import { Factory, Seeder } from 'typeorm-seeding';
import Desercao from '../entity/desercao.entity';

export default class Createdesercaos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Desercao)().createMany(10);
  }
}
