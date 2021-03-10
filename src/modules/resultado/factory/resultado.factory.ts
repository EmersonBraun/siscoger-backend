/* eslint-disable no-return-assign */
import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateResultadoDto } from '../dtos/create.dto';
import Resultado from '../entity/resultado.entity';

export const fakerRegistry = (): CreateResultadoDto => {
  const faker = Faker;
  return {
    resultado: faker.name.findName(),
    procedimento: faker.name.findName(),
  };
};

define(Resultado, () => {
  const factory = new Resultado();

  Object.entries(fakerRegistry()).forEach(
    ([key, value]) => (factory[key] = value) as Resultado,
  );
  return factory;
});
