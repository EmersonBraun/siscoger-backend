/* eslint-disable no-return-assign */
import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateAdlDto } from '../dtos/create.dto';
import Adl from '../entity/adl.entity';

export default function fakerRegistry(): CreateAdlDto {
  const faker = Faker;
  return {
    id_andamento: faker.random.number(999),
    id_andamentocoger: faker.random.number(999),
    id_motivoconselho: faker.random.number(999),
    id_decorrenciaconselho: faker.random.number(999),
    id_situacaoconselho: faker.random.number(999),
    outromotivo: faker.name.findName(),
    cdopm: faker.name.findName(),
    fato_data: faker.date.past(1),
    abertura_data: faker.date.past(1),
    sintese_txt: faker.name.findName(),
    libelo_file: faker.name.findName(),
    doc_tipo: faker.name.findName(),
    doc_numero: faker.name.findName(),
    portaria_numero: faker.name.findName(),
    portaria_data: faker.date.past(1),
    parecer_file: faker.name.findName(),
    decisao_file: faker.name.findName(),
    doc_prorrogacao: faker.name.findName(),
    sjd_ref: faker.random.number(999),
    sjd_ref_ano: faker.random.number(999),
    prescricao_data: faker.date.past(1),
    parecer_comissao: faker.name.findName(),
    parecer_cmtgeral: faker.name.findName(),
    exclusao_txt: faker.name.findName(),
    rec_ato_file: faker.name.findName(),
    rec_gov_file: faker.name.findName(),
    ac_desempenho_bl: faker.name.findName(),
    ac_conduta_bl: faker.name.findName(),
    ac_honra_bl: faker.name.findName(),
    tjpr_file: faker.name.findName(),
    stj_file: faker.name.findName(),
    prioridade: faker.random.boolean(),
    completo: true,
  };
}

define(Adl, () => {
  const factory = new Adl();

  Object.entries(fakerRegistry()).forEach(
    ([key, value]) => (factory[key] = value) as Adl,
  );
  return factory;
});
