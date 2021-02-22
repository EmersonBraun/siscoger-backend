import { Factory, Seeder } from 'typeorm-seeding';
import { Andamentocoger } from '../entity/andamentocoger.entity';

export default class CreateAndamentoscoger implements Seeder {
  public async run(factory: Factory): Promise<void> {
    try {
      await factory(Andamentocoger)().createMany(10);
      console.log('Andamentocoger run OK');
    } catch (error) {
      console.log('Andamentocoger', error);
    }
  }
}
