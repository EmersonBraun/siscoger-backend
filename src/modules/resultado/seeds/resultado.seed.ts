import { Factory, Seeder } from 'typeorm-seeding';
import Resultado from '../entity/resultado.entity';

export default class CreateResultados implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Resultado)().createMany(10);
  }
}
