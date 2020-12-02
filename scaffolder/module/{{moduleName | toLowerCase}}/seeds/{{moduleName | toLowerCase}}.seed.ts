// import { {{moduleName | toCamelCase}} } from '../entity/{{moduleName | toLowerCase}}.entity';
// import { Seeder, Factory } from 'typeorm-seeding'

// export default class Create{{moduleName | toCamelCase}}s implements Seeder {
//   public async run(factory: Factory): Promise<void> {
    
//     await factory({{moduleName | toCamelCase}})().createMany(10)
//   }
// }