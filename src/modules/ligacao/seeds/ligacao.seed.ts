import { Seeder, Factory } from 'typeorm-seeding';
import { Ligacao } from '../entity/ligacao.entity';

export default class CreateLigacaos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Ligacao)().createMany(10);
  }
}
