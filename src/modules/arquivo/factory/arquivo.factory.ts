import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateArquivoDto } from '../dtos/create.dto';
import { Arquivo } from '../entity/arquivo.entity';

define(Arquivo, (faker: typeof Faker) => {
  const factory = new Arquivo();
  factory.local_atual = faker.name.findName();
  factory.obs = faker.name.findName();
  factory.numero = faker.name.findName();
  factory.letra = faker.name.findName();
  factory.id_ipm = faker.random.number(999);
  factory.id_cj = faker.random.number(999);
  factory.id_cd = faker.random.number(999);
  factory.id_adl = faker.random.number(999);
  factory.id_sindicancia = faker.random.number(999);
  factory.id_fatd = faker.random.number(999);
  factory.id_desercao = faker.random.number(999);
  factory.id_apfd = faker.random.number(999);
  factory.id_iso = faker.random.number(999);
  factory.id_it = faker.random.number(999);
  factory.id_sai = faker.random.number(999);
  factory.id_pad = faker.random.number(999);
  factory.id_proc_outros = faker.random.number(999);
  factory.id_punicao = faker.random.number(999);
  factory.rg = faker.name.findName();
  factory.nome = faker.name.findName();
  factory.opm = faker.name.findName();
  factory.arquivo_data = faker.date.past(1);
  factory.retorno_data = faker.date.past(1);
  factory.procedimento = faker.name.findName();
  factory.sjd_ref = faker.name.findName();
  factory.sjd_ref_ano = faker.name.findName();
  return factory;
});

export const fakerRegistry = (): CreateArquivoDto => {
  const faker = Faker;
  return {
    local_atual: faker.name.findName(),
    obs: faker.name.findName(),
    numero: faker.name.findName(),
    letra: faker.name.findName(),
    id_ipm: faker.random.number(999),
    id_cj: faker.random.number(999),
    id_cd: faker.random.number(999),
    id_adl: faker.random.number(999),
    id_sindicancia: faker.random.number(999),
    id_fatd: faker.random.number(999),
    id_desercao: faker.random.number(999),
    id_apfd: faker.random.number(999),
    id_iso: faker.random.number(999),
    id_it: faker.random.number(999),
    id_sai: faker.random.number(999),
    id_pad: faker.random.number(999),
    id_proc_outros: faker.random.number(999),
    id_punicao: faker.random.number(999),
    rg: faker.name.findName(),
    nome: faker.name.findName(),
    opm: faker.name.findName(),
    arquivo_data: faker.date.past(1),
    retorno_data: faker.date.past(1),
    procedimento: faker.name.findName(),
    sjd_ref: faker.name.findName(),
    sjd_ref_ano: faker.name.findName(),
  };
};
