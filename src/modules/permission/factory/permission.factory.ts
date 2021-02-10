import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreatePermissionDto } from '../dtos/create.dto';
import { Permission } from '../entity/permission.entity';

define(Permission, (faker: typeof Faker) => {
  const factory = new Permission();
  factory.permission = faker.name.findName();
  return factory;
});

export const fakerRegistry = (): CreatePermissionDto => {
  const faker = Faker;
  return {
    permission: faker.name.findName(),
  };
};
