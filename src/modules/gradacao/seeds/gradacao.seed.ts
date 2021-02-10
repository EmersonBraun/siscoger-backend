import { Seeder, Factory } from 'typeorm-seeding';
import { Gradacao } from '../entity/gradacao.entity';

export default class CreateGradacaos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Gradacao)().createMany(10);
  }
}
