/* eslint-disable no-return-assign */
import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateExclusaoJudicialDto } from '../dtos/create.dto';
import ExclusaoJudicial from '../entity/exclusaojudicial.entity';

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

define(ExclusaoJudicial, () => {
  const factory = new ExclusaoJudicial();

  Object.entries(fakerRegistry()).forEach(
    ([key, value]) => (factory[key] = value) as ExclusaoJudicial,
  );
  return factory;
});
