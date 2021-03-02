import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateRespCivilDto } from '../dtos/create.dto';
import RespCivil from '../entity/respcivil.entity';

define(RespCivil, (faker: typeof Faker) => {
  const factory = new RespCivil();
  factory.resp_civil = faker.name.findName();
  return factory;
});

export const fakerRegistry = (): CreateRespCivilDto => {
  const faker = Faker;
  return {
    resp_civil: faker.name.findName(),
  };
};
