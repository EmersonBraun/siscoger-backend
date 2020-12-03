import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateUploadDto } from '../dtos/create.dto';
import { Upload } from '../schema/upload.schema';

define(Upload, (faker: typeof Faker) => {
  const factory = new Upload()
  factory.campo = faker.name.findName()
  factory.id_proc = faker.random.number(999)
  factory.is_old_file = faker.random.boolean()
  factory.mime = faker.name.findName()
  factory.name = faker.name.findName()
  factory.obs = faker.name.findName()
  factory.path = faker.name.findName()
  factory.proc = faker.name.findName()
  factory.rg = faker.name.findName()
  factory.size = faker.name.findName()
  factory.data_arquivo = faker.name.findName()
  return factory
})

export const fakerRegistry = ():CreateUploadDto => {
  const faker = Faker
  return {
    campo: faker.name.findName(),
    id_proc: faker.random.number(999),
    is_old_file: faker.random.boolean(),
    mime: faker.name.findName(),
    name: faker.name.findName(),
    obs: faker.name.findName(),
    path: faker.name.findName(),
    proc: faker.name.findName(),
    rg: faker.name.findName(),
    size: faker.name.findName(),
    data_arquivo: faker.name.findName()
  }
}