import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateSindicanciaDto } from '../dtos/create.dto';
import { Sindicancia } from '../entity/sindicancia.entity';

define(Sindicancia, (faker: typeof Faker) => {
  const factory = new Sindicancia();
  factory.abertura_data = faker.date.past(1);
  factory.cdopm = faker.random.number(9999999999).toString();
  factory.doc_numero = faker.random.number(99).toString();
  factory.doc_origem_txt = faker.name.findName();
  factory.doc_tipo = faker.name.findName();
  factory.fato_data = faker.date.past(1);
  factory.id_andamento = 1;
  factory.id_andamentocoger = 1;
  factory.motivo_abertura = faker.name.findName();
  factory.motivo_outros = faker.name.findName();
  factory.opm_meta4 = faker.name.findName();
  factory.portaria_data = faker.date.past(1);
  factory.portaria_numero = faker.random.number(999).toString();
  factory.prioridade = faker.random.boolean();
  factory.prorogacao = faker.random.boolean();
  factory.prorogacao_dias = faker.random.number(99);
  factory.relatorio_data = faker.date.past(1);
  factory.relatorio_file = faker.name.findName();
  factory.sintese_txt = faker.name.findName();
  factory.sjd_ref = faker.random.number(999);
  factory.sjd_ref_ano = faker.random.number(2020);
  factory.sol_cmt_file = faker.name.findName();
  factory.sol_cmtgeral_data = faker.date.past(1);
  factory.sol_cmtgeral_file = faker.name.findName();
  factory.completo = faker.random.boolean();
  return factory;
});

export const fakerRegistry = (): CreateSindicanciaDto => {
  const faker = Faker;
  return {
    abertura_data: faker.date.past(1),
    cdopm: faker.random.number(9999999999).toString(),
    doc_numero: faker.random.number(99).toString(),
    doc_origem_txt: faker.name.findName(),
    doc_tipo: faker.name.findName(),
    fato_data: faker.date.past(1),
    id_andamento: 1,
    id_andamentocoger: 1,
    motivo_abertura: faker.name.findName(),
    motivo_outros: faker.name.findName(),
    opm_meta4: faker.name.findName(),
    portaria_data: faker.date.past(1),
    portaria_numero: faker.random.number(999).toString(),
    prioridade: faker.random.boolean(),
    prorogacao: faker.random.boolean(),
    prorogacao_dias: faker.random.number(99),
    relatorio_data: faker.date.past(1),
    relatorio_file: faker.name.findName(),
    sintese_txt: faker.name.findName(),
    sjd_ref: faker.random.number(999),
    sjd_ref_ano: faker.random.number(2020),
    sol_cmt_file: faker.name.findName(),
    sol_cmtgeral_data: faker.date.past(1),
    sol_cmtgeral_file: faker.name.findName(),
    completo: faker.random.boolean(),
  };
};
