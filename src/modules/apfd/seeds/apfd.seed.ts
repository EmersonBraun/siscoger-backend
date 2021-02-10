import { Factory, Seeder } from 'typeorm-seeding';
import { Apfd } from '../entity/apfd.entity';

export default class CreateApfds implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Apfd)().createMany(10);
  }
}
