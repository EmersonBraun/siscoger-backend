import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Feriado } from '../entity/feriado.entity';
import { CreateFeriadoDto } from '../dtos/create.dto';

define(Feriado, (faker: typeof Faker) => {
  const factory = new Feriado();
  factory.data = faker.date.past(1);
  factory.feriado = faker.name.findName();
  return factory;
});

export const fakerRegistry = (): CreateFeriadoDto => {
  const faker = Faker;
  return {
    data: faker.date.past(1),
    feriado: faker.name.findName(),
  };
};
