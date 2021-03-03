import { Factory, Seeder } from 'typeorm-seeding';
import Recurso from '../entity/recurso.entity';

export default class CreateRecursos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Recurso)().createMany(10);
  }
}
