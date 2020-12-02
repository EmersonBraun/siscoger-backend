import { Andamento } from 'src/modules/andamento/entity/andamento.entity';
import { Seeder, Factory } from 'typeorm-seeding'

export default class CreateAndamentos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    
    await factory(Andamento)().createMany(10)
  }
}