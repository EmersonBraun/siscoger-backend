import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Envolvido } from '../entity/envolvido.entity';
import { CreateEnvolvidoDto } from '../dtos/create.dto';

define(Envolvido, (faker: typeof Faker) => {
  const factory = new Envolvido();
  factory.rg_substituto = faker.name.findName();
  factory.nome = faker.name.findName();
  factory.rg = faker.name.findName();
  factory.situacao = faker.name.findName();
  factory.cargo = faker.name.findName();
  factory.resultado = faker.name.findName();
  factory.inclusao_ano = faker.random.number(999);
  factory.ipm_julgamento = faker.name.findName();
  factory.ipm_processocrime = faker.name.findName();
  factory.ipm_pena_anos = faker.random.number(999);
  factory.ipm_pena_meses = faker.random.number(999);
  factory.ipm_pena_dias = faker.random.number(999);
  factory.ipm_tipodapena = faker.name.findName();
  factory.ipm_transitojulgado_bl = faker.name.findName();
  factory.ipm_restritiva_bl = faker.name.findName();
  factory.obs_txt = faker.name.findName();
  factory.exclusaoportaria_data = faker.date.past(1);
  factory.exclusaoportaria_numero = faker.name.findName();
  factory.exclusaoboletim = faker.name.findName();
  factory.exclusaobg_numero = faker.random.number(999);
  factory.exclusaobg_ano = faker.random.number(999);
  factory.exclusaobg_data = faker.date.past(1);
  factory.exclusaoopm = faker.name.findName();
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
  factory.id_sai = faker.random.number(999);
  factory.id_proc_outros = faker.random.number(999);
  return factory;
});

export const fakerRegistry = (): CreateEnvolvidoDto => {
  const faker = Faker;
  return {
    rg_substituto: faker.name.findName(),
    nome: faker.name.findName(),
    rg: faker.name.findName(),
    situacao: faker.name.findName(),
    cargo: faker.name.findName(),
    resultado: faker.name.findName(),
    inclusao_ano: faker.random.number(999),
    ipm_julgamento: faker.name.findName(),
    ipm_processocrime: faker.name.findName(),
    ipm_pena_anos: faker.random.number(999),
    ipm_pena_meses: faker.random.number(999),
    ipm_pena_dias: faker.random.number(999),
    ipm_tipodapena: faker.name.findName(),
    ipm_transitojulgado_bl: faker.name.findName(),
    ipm_restritiva_bl: faker.name.findName(),
    obs_txt: faker.name.findName(),
    exclusaoportaria_data: faker.date.past(1),
    exclusaoportaria_numero: faker.name.findName(),
    exclusaoboletim: faker.name.findName(),
    exclusaobg_numero: faker.random.number(999),
    exclusaobg_ano: faker.random.number(999),
    exclusaobg_data: faker.date.past(1),
    exclusaoopm: faker.name.findName(),
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
    id_sai: faker.random.number(999),
    id_proc_outros: faker.random.number(999),
    id_punicao: faker.random.number(999),
  };
};
