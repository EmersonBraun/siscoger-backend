import { Motivoconselho } from 'src/modules/motivoconselho/entity/motivoconselho.entity';
import { Seeder, Factory } from 'typeorm-seeding';

export default class CreateMotivoconselhos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Motivoconselho)().createMany(10);
  }
}
