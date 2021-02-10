import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateSobrestamentoDto } from '../dtos/create.dto';
import { Sobrestamento } from '../entity/sobrestamento.entity';

define(Sobrestamento, (faker: typeof Faker) => {
  const factory = new Sobrestamento();
  factory.rg = faker.name.findName();
  factory.inicio_data = faker.date.future(1);
  factory.publicacao_inicio = faker.name.findName();
  factory.termino_data = faker.date.future(1);
  factory.publicacao_termino = faker.name.findName();
  factory.motivo = faker.name.findName();
  factory.id_adl = faker.random.number(999);
  factory.id_cd = faker.random.number(999);
  factory.id_cj = faker.random.number(999);
  factory.id_fatd = faker.random.number(999);
  factory.id_iso = faker.random.number(999);
  factory.id_it = faker.random.number(999);
  factory.id_sindicancia = faker.random.number(999);
  factory.doc_controle_inicio = faker.name.findName();
  factory.doc_controle_termino = faker.name.findName();
  return factory;
});

export const fakerRegistry = (): CreateSobrestamentoDto => {
  const faker = Faker;
  return {
    rg: faker.name.findName(),
    inicio_data: faker.date.future(1),
    publicacao_inicio: faker.name.findName(),
    termino_data: faker.date.future(1),
    publicacao_termino: faker.name.findName(),
    motivo: faker.name.findName(),
    id_adl: faker.random.number(999),
    id_cd: faker.random.number(999),
    id_cj: faker.random.number(999),
    id_fatd: faker.random.number(999),
    id_iso: faker.random.number(999),
    id_it: faker.random.number(999),
    id_sindicancia: faker.random.number(999),
    doc_controle_inicio: faker.name.findName(),
    doc_controle_termino: faker.name.findName(),
  };
};
