import { Gradacao } from 'src/modules/gradacao/entity/gradacao.entity';
import { Seeder, Factory } from 'typeorm-seeding';

export default class CreateGradacaos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Gradacao)().createMany(10);
  }
}
