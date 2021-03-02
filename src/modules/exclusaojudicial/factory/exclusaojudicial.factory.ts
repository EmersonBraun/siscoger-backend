import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateExclusaoJudicialDto } from '../dtos/create.dto';
import ExclusaoJudicial from '../entity/exclusaojudicial.entity';

define(ExclusaoJudicial, (faker: typeof Faker) => {
  const factory = new ExclusaoJudicial();
  factory.rg = faker.name.findName();
  factory.cargo = faker.name.findName();
  factory.nome = faker.name.findName();
  factory.cdopm_quandoexcluido = faker.name.findName();
  factory.origem_proc = faker.name.findName();
  factory.origem_sjd_ref = faker.random.number();
  factory.origem_sjd_ref_ano = faker.random.number();
  factory.origem_opm = faker.name.findName();
  factory.processo = faker.name.findName();
  factory.complemento = faker.name.findName();
  factory.vara = faker.name.findName();
  factory.numerounico = faker.name.findName();
  factory.data = faker.date.future(1);
  factory.exclusao_data = faker.date.future(1);
  factory.obs_txt = faker.name.findName(); // text
  factory.portaria_numero = faker.random.number();
  factory.bg_numero = faker.random.number();
  factory.bg_ano = faker.random.number();
  factory.prioridade = faker.random.number();
  // factory.data = faker.date.future(1)
  return factory;
});

export const fakerRegistry = (): CreateExclusaoJudicialDto => {
  const faker = Faker;
  return {
    rg: faker.name.findName(),
    cargo: faker.name.findName(),
    nome: faker.name.findName(),
    cdopm_quandoexcluido: faker.name.findName(),
    origem_proc: faker.name.findName(),
    origem_sjd_ref: faker.random.number(),
    origem_sjd_ref_ano: faker.random.number(),
    origem_opm: faker.name.findName(),
    processo: faker.name.findName(),
    complemento: faker.name.findName(),
    vara: faker.name.findName(),
    numerounico: faker.name.findName(),
    data: faker.date.future(1),
    exclusao_data: faker.date.future(1),
    obs_txt: faker.name.findName(), // text,
    portaria_numero: faker.random.number(),
    bg_numero: faker.random.number(),
    bg_ano: faker.random.number(),
    prioridade: faker.random.number(),
  };
};
