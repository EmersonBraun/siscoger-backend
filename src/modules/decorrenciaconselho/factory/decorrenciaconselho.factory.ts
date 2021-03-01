import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateDecorrenciaConselhoDto } from '../dtos/create.dto';
import { DecorrenciaConselho } from '../entity/decorrenciaconselho.entity';

define(DecorrenciaConselho, (faker: typeof Faker) => {
  const factory = new DecorrenciaConselho();
  factory.decorrenciaconselho = faker.name.findName();
  return factory;
});

export const fakerRegistry = (): CreateDecorrenciaConselhoDto => {
  const faker = Faker;
  return {
    decorrenciaconselho: faker.name.findName(),
  };
};
