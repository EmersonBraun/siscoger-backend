import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateRecursoDto } from '../dtos/create.dto';
import Recurso from '../entity/recurso.entity';

export const fakerRegistry = (): CreateRecursoDto => {
  const faker = Faker;
  return {
    cdopm: faker.name.findName(),
    opm: faker.name.findName(),
    rg: faker.name.findName(),
    nome: faker.name.findName(),
    procedimento: faker.name.findName(),
    sjd_ref: faker.random.number(),
    sjd_ref_ano: faker.random.number(),
    datahora: faker.date.future(1),
    id_movimento: faker.random.number(),
  };
};

define(Recurso, (faker: typeof Faker) => {
  return (fakerRegistry() as unknown) as Recurso;
});
