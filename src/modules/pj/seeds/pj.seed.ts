import { Factory, Seeder } from 'typeorm-seeding';
import Pj from '../entity/pj.entity';

export default class Createpjs implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Pj)().createMany(10);
  }
}
