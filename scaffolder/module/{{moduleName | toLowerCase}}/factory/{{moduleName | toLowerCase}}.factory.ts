// import * as Faker from 'faker'
// import { define } from 'typeorm-seeding'
// import { {{moduleName | toCamelCase}} } from '../entity/{{moduleName | toLowerCase}}.entity';
// import { Create{{moduleName | toCamelCase}}Dto } from '../dtos/create.dto';

// define({{moduleName | toCamelCase}}, (faker: typeof Faker) => {
//   const factory = new {{moduleName | toCamelCase}}()
//   // factory.data = faker.date.future(1)
//   return factory
// })

// export const fakerRegistry = ():Create{{moduleName | toCamelCase}}Dto => {
//   const faker = Faker
//   return {
//     // data: faker.date.past(1),
//   }
// }