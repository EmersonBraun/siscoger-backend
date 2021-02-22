import { Factory, Seeder } from 'typeorm-seeding';
import { Arquivo } from '../entity/arquivo.entity';

export default class CreateArquivos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    try {
      await factory(Arquivo)().createMany(10);
      console.log('Arquivo run OK');
    } catch (error) {
      console.log('Arquivo', error);
    }
  }
}
