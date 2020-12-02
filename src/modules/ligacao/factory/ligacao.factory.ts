import * as Faker from 'faker'
import { define } from 'typeorm-seeding'
import { Ligacao } from '../entity/ligacao.entity';
import { CreateLigacaoDto } from '../dtos/create.dto';

define(Ligacao, (faker: typeof Faker) => {
  const factory = new Ligacao()
  factory.origem_opm = faker.name.findName()
  factory.origem_sjd_ref = faker.random.number(999)
  factory.origem_sjd_ref_ano = faker.random.number(999)
  factory.origem_proc = faker.name.findName()
  factory.destino_sjd_ref = faker.random.number(999)
  factory.destino_sjd_ref_ano = faker.random.number(999)
  factory.destino_proc = faker.name.findName()
  factory.id_adl = faker.random.number(999)
  factory.id_apfd = faker.random.number(999)
  factory.id_cd = faker.random.number(999)
  factory.id_cj = faker.random.number(999)
  factory.id_desercao = faker.random.number(999)
  factory.id_fatd = faker.random.number(999)
  factory.id_ipm = faker.random.number(999)
  factory.id_iso = faker.random.number(999)
  factory.id_it = faker.random.number(999)
  factory.id_sindicancia = faker.random.number(999)
  factory.id_preso = faker.random.number(999)
  factory.id_falecimento = faker.random.number(999)
  factory.id_sai = faker.random.number(999)
  factory.id_proc_outros = faker.random.number(999)
  return factory
})

export const fakerRegistry = ():CreateLigacaoDto => {
  const faker = Faker
  return {
    origem_opm: faker.name.findName(),
    origem_sjd_ref: faker.random.number(999),
    origem_sjd_ref_ano: faker.random.number(999),
    origem_proc: faker.name.findName(),
    destino_sjd_ref: faker.random.number(999),
    destino_sjd_ref_ano: faker.random.number(999),
    destino_proc: faker.name.findName(),
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
  }
}