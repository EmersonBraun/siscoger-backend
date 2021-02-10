import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Ofendido } from '../entity/ofendido.entity';
import { CreateOfendidoDto } from '../dtos/create.dto';

define(Ofendido, (faker: typeof Faker) => {
  const factory = new Ofendido();
  factory.nome = faker.name.findName();
  factory.rg = faker.name.findName();
  factory.situacao = faker.name.findName();
  factory.resultado = faker.name.findName();
  factory.sexo = faker.name.findName();
  factory.idade = faker.name.findName();
  factory.fone = faker.name.findName();
  factory.email = faker.name.findName();
  factory.id_adl = faker.random.number(999);
  factory.id_apfd = faker.random.number(999);
  factory.id_cd = faker.random.number(999);
  factory.id_cj = faker.random.number(999);
  factory.id_desercao = faker.random.number(999);
  factory.id_fatd = faker.random.number(999);
  factory.id_ipm = faker.random.number(999);
  factory.id_iso = faker.random.number(999);
  factory.id_it = faker.random.number(999);
  factory.id_sindicancia = faker.random.number(999);
  factory.id_preso = faker.random.number(999);
  factory.id_falecimento = faker.random.number(999);
  factory.id_sai = faker.random.number(999);
  factory.id_proc_outros = faker.random.number(999);
  return factory;
});

export const fakerRegistry = (): CreateOfendidoDto => {
  const faker = Faker;
  return {
    nome: faker.name.findName(),
    rg: faker.name.findName(),
    situacao: faker.name.findName(),
    resultado: faker.name.findName(),
    sexo: faker.name.findName(),
    idade: faker.name.findName(),
    fone: faker.name.findName(),
    email: faker.name.findName(),
    id_adl: faker.random.number(999),
    id_apfd: faker.random.number(999),
    id_cd: faker.random.number(999),
    id_cj: faker.random.number(999),
    id_desercao: faker.random.number(999),
    id_fatd: faker.random.number(999),
    id_ipm: faker.random.number(999),
    id_iso: faker.random.number(999),
    id_it: faker.random.number(999),
    id_sindicancia: faker.random.number(999),
    id_preso: faker.random.number(999),
    id_falecimento: faker.random.number(999),
    id_sai: faker.random.number(999),
    id_proc_outros: faker.random.number(999),
  };
};
