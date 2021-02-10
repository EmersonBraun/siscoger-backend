import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreatePendenciaDto } from '../dtos/create.dto';
import { Pendencia } from '../schema/pendencia.schema';

define(Pendencia, (faker: typeof Faker) => {
  const factory = new Pendencia();
  factory.cdopm = faker.random.number(999).toString();
  factory.id_proc = faker.random.number(999);
  factory.proc = faker.random.arrayElement(['fatd', 'ipm', 'sindicancia']);
  factory.sjd_ref = faker.random.number(999);
  factory.sjd_ref_ano = faker.random.number(999);
  factory.pendencias = [];
  factory.state = [];
  return factory;
});

export const fakerRegistry = (): CreatePendenciaDto => {
  const faker = Faker;
  return {
    cdopm: faker.random.number(999).toString(),
    id_proc: faker.random.number(999),
    proc: faker.random.arrayElement(['fatd', 'ipm', 'sindicancia']),
    sjd_ref: faker.random.number(999),
    sjd_ref_ano: faker.random.number(999),
    pendencias: [],
    state: [],
  };
};
