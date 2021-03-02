import { Factory, Seeder } from 'typeorm-seeding';
import Situacao from '../entity/situacao.entity';

export default class CreateSituacaos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Situacao)().createMany(10);
  }
}
