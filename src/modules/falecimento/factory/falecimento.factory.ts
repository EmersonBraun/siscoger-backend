import * as Faker from 'faker'
import { define } from 'typeorm-seeding'
import { Falecimento } from '../entity/falecimento.entity';
import { CreateFalecimentoDto } from '../dtos/create.dto';

define(Falecimento, (faker: typeof Faker) => {
  const factory = new Falecimento()
  factory.rg = faker.name.findName()
  factory.cargo = faker.name.findName()
  factory.nome = faker.name.findName()
  factory.data = faker.date.past(1)
  factory.id_municipio = faker.random.number(999)
  factory.endereco = faker.name.findName()
  factory.endereco_numero = faker.name.findName()
  factory.cdopm = faker.name.findName()
  factory.bou_ano = faker.random.number(999)
  factory.bou_numero = faker.name.findName()
  factory.id_situacao = faker.random.number(999)
  factory.resultado = faker.name.findName()
  factory.descricao_txt = faker.name.findName()
  return factory
})

export const fakerRegistry = ():CreateFalecimentoDto => {
  const faker = Faker
  return {
    rg: faker.name.findName(),
    cargo: faker.name.findName(),
    nome: faker.name.findName(),
    data: faker.date.past(1),
    id_municipio: faker.random.number(999),
    endereco: faker.name.findName(),
    endereco_numero: faker.name.findName(),
    cdopm: faker.name.findName(),
    bou_ano: faker.random.number(999),
    bou_numero: faker.name.findName(),
    id_situacao: faker.random.number(999),
    resultado: faker.name.findName(),
    descricao_txt: faker.name.findName(),
  }
}