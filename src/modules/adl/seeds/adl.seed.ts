import { Factory, Seeder } from 'typeorm-seeding';
import Adl from '../entity/adl.entity';

export default class CreateAdls implements Seeder {
  public async run(factory: Factory): Promise<void> {
    try {
      await factory(Adl)().createMany(10);
      console.log('Adl run OK');
    } catch (error) {
      console.log('Adl', error);
    }
  }
}
