/* eslint-disable no-return-assign */
import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateApfdDto } from '../dtos/create.dto';
import Apfd from '../entity/apfd.entity';

export const fakerRegistry = (): CreateApfdDto => {
  const faker = Faker;
  return {
    id_andamento: faker.random.number(999),
    id_andamentocoger: faker.random.number(999),
    sjd_ref: faker.random.number(999),
    sjd_ref_ano: faker.random.number(999),
    tipo: faker.name.findName(),
    cdopm: faker.name.findName(),
    fato_data: faker.date.past(1),
    sintese_txt: faker.name.findName(),
    tipo_penal: faker.name.findName(),
    tipo_penal_novo: faker.name.findName(),
    especificar: faker.name.findName(),
    doc_tipo: faker.name.findName(),
    doc_numero: faker.name.findName(),
    exclusao_txt: faker.name.findName(),
    opm_meta4: faker.name.findName(),
    referenciavajme: faker.name.findName(),
    prioridade: faker.random.boolean(),
    completo: true,
  };
};

define(Apfd, () => {
  const factory = new Apfd();

  Object.entries(fakerRegistry()).forEach(
    ([key, value]) => (factory[key] = value) as Apfd,
  );
  return factory;
});
