import { Factory, Seeder } from 'typeorm-seeding';
import PresoTipo from '../entity/presotipo.entity';

export default class CreatePresoTipos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(PresoTipo)().createMany(10);
  }
}
