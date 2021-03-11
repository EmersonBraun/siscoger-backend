/* eslint-disable no-return-assign */
import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateFatdDto } from '../dtos/create.dto';
import Fatd from '../entity/fatd.entity';

export const fakerRegistry = (): CreateFatdDto => {
  const faker = Faker;
  return {
    id_andamento: faker.random.number(),
    id_andamentocoger: faker.random.number(),
    sjd_ref: faker.random.number(),
    sjd_ref_ano: faker.random.number(),
    fato_data: faker.date.future(1),
    abertura_data: faker.date.future(1),
    sintese_txt: faker.lorem.word(50),
    cdopm: faker.name.findName(),
    doc_tipo: faker.name.findName(),
    doc_numero: faker.name.findName(),
    doc_origem_txt: faker.lorem.word(50),
    despacho_numero: faker.name.findName(),
    portaria_data: faker.date.future(1),
    fato_file: faker.name.findName(),
    relatorio_file: faker.name.findName(),
    sol_cmt_file: faker.name.findName(),
    sol_cg_file: faker.name.findName(),
    rec_ato_file: faker.name.findName(),
    rec_cmt_file: faker.name.findName(),
    rec_crpm_file: faker.name.findName(),
    rec_cg_file: faker.name.findName(),
    opm_meta4: faker.name.findName(),
    notapunicao_file: faker.name.findName(),
    publicacaonp: faker.name.findName(),
    prioridade: faker.random.number(),
    situacao_fatd: faker.name.findName(),
    motivo_fatd: faker.name.findName(),
    motivo_outros: faker.name.findName(),
    completo: true,
  };
};

define(Fatd, () => {
  const factory = new Fatd();

  Object.entries(fakerRegistry()).forEach(
    ([key, value]) => (factory[key] = value) as Fatd,
  );
  return factory;
});
