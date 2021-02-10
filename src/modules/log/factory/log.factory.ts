import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateLogDto } from '../dtos/create.dto';
import { Log } from '../schema/log.schema';

define(Log, (faker: typeof Faker) => {
  const factory = new Log();
  factory.module = faker.random.arrayElement(['fatd', 'ipm', 'sindicancia']);
  factory.action = faker.random.arrayElement([
    'show',
    'create',
    'edit',
    'delete',
  ]);
  factory.user = [];
  factory.data = [];
  factory.old = [];
  return factory;
});

export const fakerRegistry = (): CreateLogDto => {
  const faker = Faker;
  return {
    module: faker.random.arrayElement(['fatd', 'ipm', 'sindicancia']),
    action: faker.random.arrayElement(['show', 'create', 'edit', 'delete']),
    user: [],
    data: [],
    old: [],
  };
};
