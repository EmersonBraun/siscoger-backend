import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateFatdDto } from '../dtos/create.dto';
import Fatd from '../entity/fatd.entity';

define(Fatd, (faker: typeof Faker) => {
  const factory = new Fatd();
  factory.id_andamento = faker.random.number();
  factory.id_andamentocoger = faker.random.number();
  factory.sjd_ref = faker.random.number();
  factory.sjd_ref_ano = faker.random.number();
  factory.fato_data = faker.date.future(1);
  factory.abertura_data = faker.date.future(1);
  factory.sintese_txt = faker.lorem.word(50);
  factory.cdopm = faker.name.findName();
  factory.doc_tipo = faker.name.findName();
  factory.doc_numero = faker.name.findName();
  factory.doc_origem_txt = faker.lorem.word(50);
  factory.despacho_numero = faker.name.findName();
  factory.portaria_data = faker.date.future(1);
  factory.fato_file = faker.name.findName();
  factory.relatorio_file = faker.name.findName();
  factory.sol_cmt_file = faker.name.findName();
  factory.sol_cg_file = faker.name.findName();
  factory.rec_ato_file = faker.name.findName();
  factory.rec_cmt_file = faker.name.findName();
  factory.rec_crpm_file = faker.name.findName();
  factory.rec_cg_file = faker.name.findName();
  factory.opm_meta4 = faker.name.findName();
  factory.notapunicao_file = faker.name.findName();
  factory.publicacaonp = faker.name.findName();
  factory.prioridade = faker.random.number();
  factory.situacao_fatd = faker.name.findName();
  factory.motivo_fatd = faker.name.findName();
  factory.motivo_outros = faker.name.findName();
  return factory;
});

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
  };
};
