import { Seeder, Factory } from 'typeorm-seeding';
import { Envolvido } from '../entity/envolvido.entity';

export default class CreateEnvolvidos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Envolvido)().createMany(10);
  }
}
