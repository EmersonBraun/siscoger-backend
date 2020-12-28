import { Factory, Seeder } from 'typeorm-seeding';
import { Permission } from '../entity/permission.entity';

export default class Createpermissions implements Seeder {
  public async run(factory: Factory): Promise<void> {
    
    await factory(Permission)().createMany(10)
  }
}