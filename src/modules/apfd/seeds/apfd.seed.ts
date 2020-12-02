import { Apfd } from 'src/modules/apfd/entity/apfd.entity';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateApfds implements Seeder {
  public async run(factory: Factory): Promise<void> {
    
    await factory(Apfd)().createMany(10)
  }
}