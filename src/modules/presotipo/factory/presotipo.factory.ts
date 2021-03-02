import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreatePresoTipoDto } from '../dtos/create.dto';
import PresoTipo from '../entity/presotipo.entity';

define(PresoTipo, (faker: typeof Faker) => {
  const factory = new PresoTipo();
  factory.presotipo = faker.name.findName();
  return factory;
});

export const fakerRegistry = (): CreatePresoTipoDto => {
  const faker = Faker;
  return {
    presotipo: faker.name.findName(),
  };
};
