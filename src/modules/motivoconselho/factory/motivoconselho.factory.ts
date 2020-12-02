import * as Faker from 'faker'
import { define } from 'typeorm-seeding'
import { Motivoconselho } from '../entity/motivoconselho.entity';
import { CreateMotivoconselhoDto } from '../dtos/create.dto';

define(Motivoconselho, (faker: typeof Faker) => {
  const factory = new Motivoconselho()
  factory.motivoconselho = faker.name.findName()
  return factory
})

export const fakerRegistry = ():CreateMotivoconselhoDto => {
  const faker = Faker
  return {
    motivoconselho: faker.name.findName(),
  }
}