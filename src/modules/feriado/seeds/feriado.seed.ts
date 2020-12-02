import { Feriado } from 'src/modules/feriado/entity/feriado.entity';
import { Seeder, Factory } from 'typeorm-seeding'

export default class CreateFeriados implements Seeder {
  public async run(factory: Factory): Promise<void> {
    
    await factory(Feriado)().createMany(10)
  }
}