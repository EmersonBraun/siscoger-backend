import { Falecimento } from 'src/modules/falecimento/entity/falecimento.entity';
import { Seeder, Factory } from 'typeorm-seeding';

export default class CreateFalecimentos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Falecimento)().createMany(10);
  }
}
