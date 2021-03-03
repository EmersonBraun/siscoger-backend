import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreatePjDto } from '../dtos/create.dto';
import Pj from '../entity/pj.entity';

export const fakerRegistry = (): CreatePjDto => {
  const faker = Faker;
  return {
    id_pad: faker.random.number(),
    cnpj: faker.name.findName(),
    razaosocial: faker.name.findName(),
    contato: faker.name.findName(),
    telefone: faker.name.findName(),
  };
};

define(Pj, () => {
  return (fakerRegistry() as unknown) as Pj;
});
