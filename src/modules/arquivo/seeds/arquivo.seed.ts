import { Factory, Seeder } from 'typeorm-seeding';
import { Arquivo } from '../entity/arquivo.entity';

export default class CreateArquivos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Arquivo)().createMany(10);
  }
}
