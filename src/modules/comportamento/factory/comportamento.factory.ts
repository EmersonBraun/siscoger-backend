import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Comportamento } from '../entity/comportamento.entity';
import { CreateComportamentoDto } from '../dtos/create.dto';

define(Comportamento, (faker: typeof Faker) => {
  const factory = new Comportamento();
  factory.comportamento = faker.name.findName();
  return factory;
});

export const fakerRegistry = (): CreateComportamentoDto => {
  const faker = Faker;
  return {
    comportamento: faker.name.findName(),
  };
};
