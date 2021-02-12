import { Seeder, Factory } from 'typeorm-seeding';
import { Feriado } from '../entity/feriado.entity';

export default class CreateFeriados implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Feriado)().createMany(10);
  }
}
