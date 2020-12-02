import { Andamentocoger } from 'src/modules/andamentocoger/entity/andamentocoger.entity';
import { Seeder, Factory } from 'typeorm-seeding'

export default class CreateAndamentoscoger implements Seeder {
  public async run(factory: Factory): Promise<void> {
    
    await factory(Andamentocoger)().createMany(10)
  }
}