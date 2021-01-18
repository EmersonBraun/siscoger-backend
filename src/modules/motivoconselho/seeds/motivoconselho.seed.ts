import { Seeder, Factory } from 'typeorm-seeding';
import { Motivoconselho } from '../entity/motivoconselho.entity';

export default class CreateMotivoconselhos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Motivoconselho)().createMany(10);
  }
}
