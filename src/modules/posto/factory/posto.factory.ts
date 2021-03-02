import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreatePostoDto } from '../dtos/create.dto';
import Posto from '../entity/posto.entity';

define(Posto, (faker: typeof Faker) => {
  const factory = new Posto();
  factory.posto = faker.name.findName();
  return factory;
});

export const fakerRegistry = (): CreatePostoDto => {
  const faker = Faker;
  return {
    posto: faker.name.findName(),
  };
};
