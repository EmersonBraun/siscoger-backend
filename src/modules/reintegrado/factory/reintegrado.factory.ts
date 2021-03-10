/* eslint-disable no-return-assign */
import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateReintegradoDto } from '../dtos/create.dto';
import Reintegrado from '../entity/reintegrado.entity';

export const fakerRegistry = (): CreateReintegradoDto => {
  const faker = Faker;
  return {
    rg: faker.name.findName(),
    cargo: faker.name.findName(),
    nome: faker.name.findName(),
    motivo: faker.name.findName(),
    procedimento: faker.name.findName(),
    sjd_ref: faker.random.number(),
    sjd_ref_ano: faker.random.number(),
    retorno_data: faker.date.future(1),
    bg_numero: faker.random.number(),
    bg_ano: faker.random.number(),
  };
};

define(Reintegrado, () => {
  const factory = new Reintegrado();

  Object.entries(fakerRegistry()).forEach(
    ([key, value]) => (factory[key] = value) as Reintegrado,
  );
  return factory;
});
