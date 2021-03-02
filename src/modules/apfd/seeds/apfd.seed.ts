import { Factory, Seeder } from 'typeorm-seeding';
import Apfd from '../entity/apfd.entity';

export default class CreateApfds implements Seeder {
  public async run(factory: Factory): Promise<void> {
    try {
      await factory(Apfd)().createMany(10);
      console.log('Apfd run OK');
    } catch (error) {
      console.log('Apfd', error);
    }
  }
}
