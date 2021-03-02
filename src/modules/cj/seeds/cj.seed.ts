import { Factory, Seeder } from 'typeorm-seeding';
import Cj from '../entity/cj.entity';

export default class CreateSindicancias implements Seeder {
  public async run(factory: Factory): Promise<void> {
    try {
      await factory(Cj)().createMany(10);
      console.log('Cj run OK');
    } catch (error) {
      console.log('Cj', error);
    }
  }
}
