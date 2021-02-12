import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateRoleDto } from '../dtos/create.dto';
import { Role } from '../entity/role.entity';

define(Role, (faker: typeof Faker) => {
  const factory = new Role();
  factory.role = faker.name.findName();
  return factory;
});

export const fakerRegistry = (): CreateRoleDto => {
  const faker = Faker;
  return {
    role: faker.name.findName(),
  };
};
