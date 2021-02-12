import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateUserDto } from '../dtos/create.dto';
import { User } from '../entity/user.entity';

define(User, (faker: typeof Faker) => {
  const factory = new User();
  factory.name = faker.name.findName();
  factory.rg = faker.name.findName();
  factory.cpf = faker.name.findName();
  factory.class = faker.name.findName();
  factory.position = faker.name.findName();
  factory.group = faker.name.findName();
  factory.subgroup = faker.name.findName();
  factory.opm_code = faker.name.findName();
  factory.cdopm = faker.name.findName();
  factory.block = faker.random.boolean();
  factory.terms = faker.random.boolean();
  factory.password = faker.name.findName();
  factory.email = faker.name.findName();
  return factory;
});

export const fakerRegistry = (): CreateUserDto => {
  const faker = Faker;
  return {
    name: faker.name.findName(),
    rg: faker.name.findName(),
    cpf: faker.name.findName(),
    class: faker.name.findName(),
    position: faker.name.findName(),
    group: faker.name.findName(),
    subgroup: faker.name.findName(),
    opm_code: faker.name.findName(),
    cdopm: faker.name.findName(),
    block: faker.random.boolean(),
    terms: faker.random.boolean(),
    password: faker.name.findName(),
    email: faker.name.findName(),
  };
};
