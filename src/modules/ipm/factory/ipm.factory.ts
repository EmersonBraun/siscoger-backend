import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateIpmDto } from '../dtos/create.dto';
import Ipm from '../entity/ipm.entity';

define(Ipm, (faker: typeof Faker) => {
  const factory = new Ipm();
  factory.id_andamento = faker.random.number();
  factory.id_andamentocoger = faker.random.number();
  factory.id_municipio = faker.random.number();
  factory.id_situacao = faker.random.number();
  factory.cdopm = faker.name.findName();
  factory.opm_sigla = faker.name.findName();
  factory.opm_ref = faker.random.number();
  factory.opm_ref_ano = faker.random.number();
  factory.sjd_ref = faker.random.number();
  factory.sjd_ref_ano = faker.random.number();
  factory.abertura_data = faker.date.future(1);
  factory.fato_data = faker.date.future(1);
  factory.autuacao_data = faker.date.future(1);
  factory.crime = faker.name.findName();
  factory.tentado = faker.name.findName();
  factory.crime_especificar = faker.name.findName();
  factory.sintese_txt = faker.lorem.word(50);
  factory.relato_enc = faker.name.findName();
  factory.relato_enc_data = faker.date.future(1);
  factory.relato_cmtopm = faker.name.findName();
  factory.relato_cmtopm_data = faker.date.future(1);
  factory.relato_cmtgeral = faker.name.findName();
  factory.relato_cmtgeral_data = faker.date.future(1);
  factory.vajme_ref = faker.name.findName();
  factory.justicacomum_ref = faker.name.findName();
  factory.vitima = faker.name.findName();
  factory.confronto_armado_bl = faker.name.findName();
  factory.vitima_qtdd = faker.random.number();
  factory.julgamento = faker.name.findName();
  factory.portaria_numero = faker.name.findName();
  factory.exclusao_txt = faker.lorem.word(50);
  factory.relato_enc_file = faker.name.findName();
  factory.relato_cmtopm_file = faker.name.findName();
  factory.relato_cmtgeral_file = faker.name.findName();
  factory.defensor_oab = faker.name.findName();
  factory.defensor_nome = faker.name.findName();
  factory.relcomplementar_file = faker.name.findName();
  factory.relcomplementar_data = faker.date.future(1);
  factory.opm_meta4 = faker.name.findName();
  factory.bou_ano = faker.random.number();
  factory.bou_numero = faker.random.number();
  factory.prioridade = faker.random.number();
  return factory;
});

export const fakerRegistry = (): CreateIpmDto => {
  const faker = Faker;
  return {
    id_andamento: faker.random.number(),
    id_andamentocoger: faker.random.number(),
    id_municipio: faker.random.number(),
    id_situacao: faker.random.number(),
    cdopm: faker.name.findName(),
    opm_sigla: faker.name.findName(),
    opm_ref: faker.random.number(),
    opm_ref_ano: faker.random.number(),
    sjd_ref: faker.random.number(),
    sjd_ref_ano: faker.random.number(),
    abertura_data: faker.date.future(1),
    fato_data: faker.date.future(1),
    autuacao_data: faker.date.future(1),
    crime: faker.name.findName(),
    tentado: faker.name.findName(),
    crime_especificar: faker.name.findName(),
    sintese_txt: faker.lorem.word(50),
    relato_enc: faker.name.findName(),
    relato_enc_data: faker.date.future(1),
    relato_cmtopm: faker.name.findName(),
    relato_cmtopm_data: faker.date.future(1),
    relato_cmtgeral: faker.name.findName(),
    relato_cmtgeral_data: faker.date.future(1),
    vajme_ref: faker.name.findName(),
    justicacomum_ref: faker.name.findName(),
    vitima: faker.name.findName(),
    confronto_armado_bl: faker.name.findName(),
    vitima_qtdd: faker.random.number(),
    julgamento: faker.name.findName(),
    portaria_numero: faker.name.findName(),
    exclusao_txt: faker.lorem.word(50),
    relato_enc_file: faker.name.findName(),
    relato_cmtopm_file: faker.name.findName(),
    relato_cmtgeral_file: faker.name.findName(),
    defensor_oab: faker.name.findName(),
    defensor_nome: faker.name.findName(),
    relcomplementar_file: faker.name.findName(),
    relcomplementar_data: faker.date.future(1),
    opm_meta4: faker.name.findName(),
    bou_ano: faker.random.number(),
    bou_numero: faker.random.number(),
    prioridade: faker.random.number(),
  };
};
