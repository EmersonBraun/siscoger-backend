import { Seeder, Factory } from 'typeorm-seeding';
import { Andamentocoger } from '../entity/andamentocoger.entity';

export default class CreateAndamentoscoger implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Andamentocoger)().createMany(10);
  }
}
