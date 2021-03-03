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

define(Resultado, (faker: typeof Faker) => {
  return (fakerRegistry() as unknown) as Resultado;
});
