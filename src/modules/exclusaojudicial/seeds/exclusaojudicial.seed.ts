import { Factory, Seeder } from 'typeorm-seeding';
import ExclusaoJudicial from '../entity/exclusaojudicial.entity';

export default class CreateExclusaoJudicials implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(ExclusaoJudicial)().createMany(10);
  }
}
