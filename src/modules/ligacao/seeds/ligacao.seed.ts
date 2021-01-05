import { Ligacao } from 'src/modules/ligacao/entity/ligacao.entity';
import { Seeder, Factory } from 'typeorm-seeding';

export default class CreateLigacaos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Ligacao)().createMany(10);
  }
}
