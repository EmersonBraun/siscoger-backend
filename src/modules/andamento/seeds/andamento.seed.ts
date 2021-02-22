import { Factory, Seeder } from 'typeorm-seeding';
import { Andamento } from '../entity/andamento.entity';

export default class CreateAndamentos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    try {
      await factory(Andamento)().createMany(10);
      console.log('Andamento run OK');
    } catch (error) {
      console.log('Andamento', error);
    }
  }
}
