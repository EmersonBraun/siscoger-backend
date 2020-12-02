import { Comportamento } from 'src/modules/comportamento/entity/comportamento.entity';
import { Seeder, Factory } from 'typeorm-seeding'

export default class CreateComportamentos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    
    await factory(Comportamento)().createMany(10)
  }
}