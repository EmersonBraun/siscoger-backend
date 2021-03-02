import { Factory, Seeder } from 'typeorm-seeding';
import Sindicancia from '../entity/sindicancia.entity';

export default class CreateSindicancias implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Sindicancia)().createMany(10);
  }
}
