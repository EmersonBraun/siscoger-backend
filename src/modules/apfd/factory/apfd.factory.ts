import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateApfdDto } from '../dtos/create.dto';
import Apfd from '../entity/apfd.entity';

define(Apfd, (faker: typeof Faker) => {
  const factory = new Apfd();
  factory.id_andamento = faker.random.number(999);
  factory.id_andamentocoger = faker.random.number(999);
  factory.sjd_ref = faker.random.number(999);
  factory.sjd_ref_ano = faker.random.number(999);
  factory.tipo = faker.name.findName();
  factory.cdopm = faker.name.findName();
  factory.fato_data = faker.date.past(1);
  factory.sintese_txt = faker.name.findName();
  factory.tipo_penal = faker.name.findName();
  factory.tipo_penal_novo = faker.name.findName();
  factory.especificar = faker.name.findName();
  factory.doc_tipo = faker.name.findName();
  factory.doc_numero = faker.name.findName();
  factory.exclusao_txt = faker.name.findName();
  factory.opm_meta4 = faker.name.findName();
  factory.referenciavajme = faker.name.findName();
  factory.prioridade = faker.random.number(999);
  return factory;
});

export const fakerRegistry = (): CreateApfdDto => {
  const faker = Faker;
  return {
    id_andamento: faker.random.number(999),
    id_andamentocoger: faker.random.number(999),
    sjd_ref: faker.random.number(999),
    sjd_ref_ano: faker.random.number(999),
    tipo: faker.name.findName(),
    cdopm: faker.name.findName(),
    fato_data: faker.date.past(1),
    sintese_txt: faker.name.findName(),
    tipo_penal: faker.name.findName(),
    tipo_penal_novo: faker.name.findName(),
    especificar: faker.name.findName(),
    doc_tipo: faker.name.findName(),
    doc_numero: faker.name.findName(),
    exclusao_txt: faker.name.findName(),
    opm_meta4: faker.name.findName(),
    referenciavajme: faker.name.findName(),
    prioridade: faker.random.number(999),
  };
};
