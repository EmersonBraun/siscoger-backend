import * as Faker from 'faker'
import { define } from 'typeorm-seeding'
import { Movimento } from '../entity/movimento.entity';
import { CreateMovimentoDto } from '../dtos/create.dto';

define(Movimento, (faker: typeof Faker) => {
  const factory = new Movimento()
  factory.data = faker.date.future(1)
  factory.descricao = faker.name.findName()
  factory.opm = faker.name.findName()
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

export const fakerRegistry = ():CreateMovimentoDto => {
  const faker = Faker
  return {
    data: faker.date.past(1),
    descricao: faker.name.findName(),
    opm: faker.name.findName(),
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