import { Envolvido } from 'src/modules/envolvido/entity/envolvido.entity';
import { Seeder, Factory } from 'typeorm-seeding'

export default class CreateEnvolvidos implements Seeder {
  public async run(factory: Factory): Promise<void> {
    
    await factory(Envolvido)().createMany(10)
  }
}