import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Andamentocoger } from '../entity/andamentocoger.entity';
import { CreateAndamentocogerDto } from '../dtos/create.dto';

define(Andamentocoger, (faker: typeof Faker) => {
  const factory = new Andamentocoger();
  factory.andamentocoger = faker.name.findName();
  factory.procedimento = faker.name.findName();
  return factory;
});

export const fakerRegistry = (): CreateAndamentocogerDto => {
  const faker = Faker;
  return {
    andamentocoger: faker.name.findName(),
    procedimento: faker.name.findName(),
  };
};
