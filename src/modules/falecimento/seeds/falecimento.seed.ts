import { Seeder, Factory } from 'typeorm-seeding';
import { Falecimento } from '../entity/falecimento.entity';

export default class CreateFalecimentos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Falecimento)().createMany(10);
  }
}
