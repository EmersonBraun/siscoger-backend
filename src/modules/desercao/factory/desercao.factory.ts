import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateDesercaoDto } from '../dtos/create.dto';
import Desercao from '../entity/desercao.entity';

define(Desercao, (faker: typeof Faker) => {
  const factory = new Desercao();
  factory.id_andamento = faker.random.number();
  factory.id_andamentocoger = faker.random.number();
  factory.sjd_ref = faker.random.number();
  factory.sjd_ref_ano = faker.random.number();
  factory.cdopm = faker.name.findName();
  factory.fato_data = faker.date.future(1);
  factory.doc_tipo = faker.name.findName();
  factory.doc_numero = faker.name.findName();
  factory.termo_exclusao = faker.name.findName();
  factory.termo_exclusao_pub = faker.name.findName();
  factory.termo_captura = faker.name.findName();
  factory.termo_captura_pub = faker.name.findName();
  factory.pericia = faker.name.findName();
  factory.pericia_pub = faker.name.findName();
  factory.termo_inclusao = faker.name.findName();
  factory.termo_inclusao_pub = faker.name.findName();
  factory.opm_meta4 = faker.name.findName();
  factory.referenciavajme = faker.name.findName();
  factory.prioridade = faker.random.number();
  return factory;
});

export const fakerRegistry = (): CreateDesercaoDto => {
  const faker = Faker;
  return {
    id_andamento: faker.random.number(),
    id_andamentocoger: faker.random.number(),
    sjd_ref: faker.random.number(),
    sjd_ref_ano: faker.random.number(),
    cdopm: faker.name.findName(),
    fato_data: faker.date.future(1),
    doc_tipo: faker.name.findName(),
    doc_numero: faker.name.findName(),
    termo_exclusao: faker.name.findName(),
    termo_exclusao_pub: faker.name.findName(),
    termo_captura: faker.name.findName(),
    termo_captura_pub: faker.name.findName(),
    pericia: faker.name.findName(),
    pericia_pub: faker.name.findName(),
    termo_inclusao: faker.name.findName(),
    termo_inclusao_pub: faker.name.findName(),
    opm_meta4: faker.name.findName(),
    referenciavajme: faker.name.findName(),
    prioridade: faker.random.number(),
  };
};
