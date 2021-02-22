import { Factory, Seeder } from 'typeorm-seeding';
import { Cd } from '../entity/cd.entity';

export default class CreateSindicancias implements Seeder {
  public async run(factory: Factory): Promise<void> {
    try {
      await factory(Cd)().createMany(10);
      console.log('Cd run OK');
    } catch (error) {
      console.log('Cd', error);
    }
  }
}
