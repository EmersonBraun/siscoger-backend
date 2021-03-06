import { Factory, Seeder } from 'typeorm-seeding';
import { DecorrenciaConselho } from '../entity/decorrenciaconselho.entity';

export default class CreateDecorrenciaConselhos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(DecorrenciaConselho)().createMany(10);
  }
}
