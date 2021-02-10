import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateAdlDto } from '../dtos/create.dto';
import Adl from '../entity/adl.entity';

define(Adl, (faker: typeof Faker) => {
  const factory = new Adl();
  factory.id_andamento = faker.random.number(999);
  factory.id_andamentocoger = faker.random.number(999);
  factory.id_motivoconselho = faker.random.number(999);
  factory.id_decorrenciaconselho = faker.random.boolean();
  factory.id_situacaoconselho = faker.random.number(999);
  factory.outromotivo = faker.name.findName();
  factory.cdopm = faker.name.findName();
  factory.fato_data = faker.date.past(1);
  factory.abertura_data = faker.date.past(1);
  factory.sintese_txt = faker.name.findName();
  factory.libelo_file = faker.name.findName();
  factory.doc_tipo = faker.name.findName();
  factory.doc_numero = faker.name.findName();
  factory.portaria_numero = faker.name.findName();
  factory.portaria_data = faker.date.past(1);
  factory.parecer_file = faker.name.findName();
  factory.decisao_file = faker.name.findName();
  factory.doc_prorrogacao = faker.name.findName();
  factory.sjd_ref = faker.random.number(999);
  factory.sjd_ref_ano = faker.random.number(999);
  factory.prescricao_data = faker.date.past(1);
  factory.parecer_comissao = faker.name.findName();
  factory.parecer_cmtgeral = faker.name.findName();
  factory.exclusao_txt = faker.name.findName();
  factory.rec_ato_file = faker.name.findName();
  factory.rec_gov_file = faker.name.findName();
  factory.ac_desempenho_bl = faker.name.findName();
  factory.ac_conduta_bl = faker.name.findName();
  factory.ac_honra_bl = faker.name.findName();
  factory.tjpr_file = faker.name.findName();
  factory.stj_file = faker.name.findName();
  factory.prioridade = faker.random.number(999);
  return factory;
});

const fakerRegistry = (): CreateAdlDto => {
  const faker = Faker;
  return {
    id_andamento: faker.random.number(999),
    id_andamentocoger: faker.random.number(999),
    id_motivoconselho: faker.random.number(999),
    id_decorrenciaconselho: faker.random.boolean(),
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
    prioridade: faker.random.number(999),
  };
};

export default fakerRegistry;
