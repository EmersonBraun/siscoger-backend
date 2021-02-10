import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateMailDto } from '../dtos/create.dto';
import { Mail } from '../schema/mail.schema';

define(Mail, (faker: typeof Faker) => {
  const factory = new Mail()
  factory.to = faker.name.findName()
  factory.from = faker.name.findName()
  factory.subject = faker.name.findName()
  factory.template = faker.name.findName()
  factory.processedOn = 0,
  factory.finishedOn = 0,
  factory.failedReason = 0,
  factory.context = []
  return factory
})

export const fakerRegistry = ():CreateMailDto => {
  const faker = Faker
  return {
    to: faker.name.findName(),
    from: faker.name.findName(),
    subject: faker.name.findName(),
    template: faker.name.findName(),
    processedOn: 0,
    finishedOn: 0,
    failedReason: 0,
    context: [],
  }
}