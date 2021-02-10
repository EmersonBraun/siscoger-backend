import { Factory, Seeder } from 'typeorm-seeding';
import { Role } from '../entity/role.entity';

export default class CreateRoles implements Seeder {
  public async run(factory: Factory): Promise<void> {
    
    await factory(Role)().createMany(10)
  }
}