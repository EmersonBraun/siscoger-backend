/* eslint-disable no-return-assign */
import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateProcOutrosDto } from '../dtos/create.dto';
import ProcOutros from '../entity/procoutros.entity';

export const fakerRegistry = (): CreateProcOutrosDto => {
  const faker = Faker;
  return {
    sjd_ref: faker.random.number(),
    sjd_ref_ano: faker.random.number(),
    rg_cadastro: faker.name.findName(),
    cdopm: faker.name.findName(),
    opm_abreviatura: faker.name.findName(),
    cdopm_apuracao: faker.name.findName(),
    abertura_data: faker.date.future(1),
    data: faker.date.future(1),
    bou_ano: faker.name.findName(),
    bou_numero: faker.name.findName(),
    id_municipio: faker.random.number(),
    doc_origem: faker.name.findName(),
    num_doc_origem: faker.name.findName(),
    motivo_abertura: faker.name.findName(),
    sintese_txt: faker.lorem.word(50),
    relatorio1: faker.name.findName(),
    relatorio1_file: faker.name.findName(),
    relatorio1_data: faker.date.future(1),
    relatorio2: faker.name.findName(),
    relatorio2_file: faker.name.findName(),
    relatorio2_data: faker.date.future(1),
    relatorio3: faker.name.findName(),
    relatorio3_file: faker.name.findName(),
    relatorio3_data: faker.date.future(1),
    desc_outros: faker.name.findName(),
    andamento: faker.name.findName(),
    andamentocoger: faker.name.findName(),
    vtr1_placa: faker.name.findName(),
    vtr1_prefixo: faker.name.findName(),
    vtr2_placa: faker.name.findName(),
    vtr2_prefixo: faker.name.findName(),
    digitador: faker.name.findName(),
    num_pid: faker.name.findName(),
    limite_data: faker.date.future(1),
  };
};

define(ProcOutros, () => {
  const factory = new ProcOutros();

  Object.entries(fakerRegistry()).forEach(
    ([key, value]) => (factory[key] = value) as ProcOutros,
  );
  return factory;
});
