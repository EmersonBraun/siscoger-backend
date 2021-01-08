import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateCdDto } from '../dtos/create.dto';
import { Cd } from '../entity/cd.entity';

define(Cd, (faker: typeof Faker) => {
  const factory = new Cd();
  factory.abertura_data = faker.date.past(1);
  factory.cdopm = faker.random.number(99999999).toString();
  factory.doc_numero = faker.random.number(99).toString();
  factory.doc_tipo = faker.name.findName();
  factory.fato_data = faker.date.past(1);
  factory.id_andamento = 1;
  factory.id_andamentocoger = 1;
  factory.id_motivoconselho = 1;
  factory.id_decorrenciaconselho = 1;
  factory.id_situacaoconselho = 1;
  factory.motivo_outros = faker.name.findName();
  factory.portaria_data = faker.date.past(1);
  factory.portaria_numero = faker.random.number(999).toString();
  factory.prioridade = faker.random.boolean();
  factory.sintese_txt = faker.name.findName();
  factory.sjd_ref = faker.random.number(999);
  factory.sjd_ref_ano = faker.random.number(2020);
  factory.ac_conduta_bl = faker.name.findName();
  factory.ac_desempenho_bl = faker.name.findName();
  factory.ac_honra_bl = faker.name.findName();
  factory.tjpr_file = faker.name.findName();
  factory.sjd_file = faker.name.findName();
  factory.libelo_file = faker.name.findName();
  factory.parecer_file = faker.name.findName();
  factory.decisao_file = faker.name.findName();
  factory.doc_prorrogacao = faker.name.findName();
  factory.parecer_cmtgeral = faker.name.findName();
  factory.exclusao_txt = faker.name.findName();
  factory.rec_ato_file = faker.name.findName();
  factory.rec_gov_file = faker.name.findName();
  return factory;
});

export const fakerRegister = (): CreateCdDto => {
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
    sintese_txt: faker.name.findName(),
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
  };
};
