import * as Faker from 'faker'
import { define } from 'typeorm-seeding'
import { Gradacao } from '../entity/gradacao.entity';
import { CreateGradacaoDto } from '../dtos/create.dto';

define(Gradacao, (faker: typeof Faker) => {
  const factory = new Gradacao()
  factory.gradacao = faker.name.findName()
  factory.rel = faker.name.findName()
  return factory
})

export const fakerRegistry = ():CreateGradacaoDto => {
  const faker = Faker
  return {
    gradacao: faker.name.findName(),
    rel: faker.name.findName(),
  }
}