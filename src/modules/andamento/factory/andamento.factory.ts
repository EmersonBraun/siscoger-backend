import * as Faker from 'faker'
import { define } from 'typeorm-seeding'
import { Andamento } from '../entity/andamento.entity';
import { CreateAndamentoDto } from '../dtos/create.dto';

define(Andamento, (faker: typeof Faker) => {
  const factory = new Andamento()
  factory.andamento = faker.name.findName()
  factory.procedimento = faker.name.findName()
  return factory
})

export const fakerRegistry = ():CreateAndamentoDto => {
  const faker = Faker
  return {
    andamento: faker.name.findName(),
    procedimento: faker.name.findName(),
  }
}