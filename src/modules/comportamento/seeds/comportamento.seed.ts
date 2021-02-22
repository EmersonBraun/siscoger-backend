import { Factory, Seeder } from 'typeorm-seeding';
import { Comportamento } from '../entity/comportamento.entity';

export default class CreateComportamentos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    try {
      await factory(Comportamento)().createMany(10);
      console.log('Comportamento run OK');
    } catch (error) {
      console.log('Comportamento', error);
    }
  }
}
