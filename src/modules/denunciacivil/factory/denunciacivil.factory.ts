import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateDenunciaCivilDto } from '../dtos';
import Denunciacivil from '../entity/denunciacivil.entity';

define(Denunciacivil, (faker: typeof Faker) => {
  const factory = new Denunciacivil();
  factory.rg = faker.name.findName();
  factory.rg_cadastro = faker.name.findName();
  factory.cargo = faker.name.findName();
  factory.nome = faker.name.findName();
  factory.processo = faker.name.findName();
  factory.infracao = faker.name.findName();
  factory.processocrime = faker.name.findName();
  factory.julgamento = faker.name.findName();
  factory.tipodapena = faker.name.findName();
  factory.pena_anos = faker.random.number();
  factory.pena_meses = faker.random.number();
  factory.pena_dias = faker.random.number();
  factory.transitojulgado_bl = faker.name.findName();
  factory.restritiva_bl = faker.name.findName();
  factory.obs_txt = faker.name.findName();
  // factory.data = faker.date.future(1)
  return factory;
});

export const fakerRegistry = (): CreateDenunciaCivilDto => {
  const faker = Faker;
  return {
    rg: faker.name.findName(),
    rg_cadastro: faker.name.findName(),
    cargo: faker.name.findName(),
    nome: faker.name.findName(),
    processo: faker.name.findName(),
    infracao: faker.name.findName(),
    processocrime: faker.name.findName(),
    julgamento: faker.name.findName(),
    tipodapena: faker.name.findName(),
    pena_anos: faker.random.number(),
    pena_meses: faker.random.number(),
    pena_dias: faker.random.number(),
    transitojulgado_bl: faker.name.findName(),
    restritiva_bl: faker.name.findName(),
    obs_txt: faker.name.findName(),
  };
};
