/* eslint-disable no-return-assign */
import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateCdDto } from '../dtos/create.dto';
import Cd from '../entity/cd.entity';

export const fakerRegistry = (): CreateCdDto => {
  const faker = Faker;
  return {
    abertura_data: faker.date.past(1),
    cdopm: faker.random.number(99999999).toString(),
    doc_numero: faker.random.number(99).toString(),
    doc_tipo: faker.name.findName(),
    fato_data: faker.date.past(1),
    id_andamento: 1,
    id_andamentocoger: 1,
    id_motivoconselho: 1,
    id_decorrenciaconselho: 1,
    id_situacaoconselho: 1,
    portaria_file: faker.name.findName(),
    prescricao_comissao: faker.name.findName(),
    motivo_outros: faker.name.findName(),
    portaria_data: faker.date.past(1),
    portaria_numero: faker.random.number(999).toString(),
    prioridade: faker.random.boolean(),
    sjd_ref: faker.random.number(999),
    sjd_ref_ano: faker.random.number(2020),
    ac_conduta_bl: faker.name.findName(),
    ac_desempenho_bl: faker.name.findName(),
    ac_honra_bl: faker.name.findName(),
    tjpr_file: faker.name.findName(),
    sjd_file: faker.name.findName(),
    libelo_file: faker.name.findName(),
    parecer_file: faker.name.findName(),
    decisao_file: faker.name.findName(),
    doc_prorrogacao: faker.name.findName(),
    parecer_cmtgeral: faker.name.findName(),
    exclusao_txt: faker.name.findName(),
    rec_ato_file: faker.name.findName(),
    rec_gov_file: faker.name.findName(),
    sintese_txt: faker.name.findName(),
    completo: true,
  };
};

define(Cd, () => {
  const factory = new Cd();

  Object.entries(fakerRegistry()).forEach(
    ([key, value]) => (factory[key] = value) as Cd,
  );
  return factory;
});
