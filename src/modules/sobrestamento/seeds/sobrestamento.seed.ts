import { Sobrestamento } from 'src/modules/sobrestamento/entity/sobrestamento.entity';
import { Seeder, Factory } from 'typeorm-seeding';

export default class CreateSobrestamentos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Sobrestamento)().createMany(10);
  }
}
