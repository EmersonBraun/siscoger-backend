import { Arquivo } from 'src/modules/arquivo/entity/arquivo.entity';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateArquivos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Arquivo)().createMany(10);
  }
}
