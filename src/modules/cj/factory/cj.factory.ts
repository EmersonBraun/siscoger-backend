import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateCjDto } from '../dtos/create.dto';
import { Cj } from '../entity/cj.entity';

define(Cj, (faker: typeof Faker) => {
  const factory = new Cj();
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
  factory.exclusao_text = faker.name.findName();
  factory.rec_ato_file = faker.name.findName();
  factory.rec_gov_file = faker.name.findName();
  factory.numero_tj = faker.name.findName();
  factory.opm_meta4 = faker.name.findName();
  factory.prescricao_data = faker.date.past(1);
  factory.sintese_text = faker.name.findName();
  return factory;
});

export const fakerRegister = (): CreateCjDto => {
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
    exclusao_text: faker.name.findName(),
    rec_ato_file: faker.name.findName(),
    rec_gov_file: faker.name.findName(),
    numero_tj: faker.name.findName(),
    opm_meta4: faker.name.findName(),
    prescricao_data: faker.date.past(1),
    sintese_text: faker.name.findName(),
  };
};