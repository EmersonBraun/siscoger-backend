import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateSituacaoDto } from '../dtos/create.dto';
import Situacao from '../entity/situacao.entity';

define(Situacao, (faker: typeof Faker) => {
  const factory = new Situacao();
  factory.situacao = faker.name.findName();
  factory.situacao_abreviada = faker.name.findName();
  return factory;
});

export const fakerRegistry = (): CreateSituacaoDto => {
  const faker = Faker;
  return {
    situacao: faker.name.findName(),
    situacao_abreviada: faker.name.findName(),
  };
};
