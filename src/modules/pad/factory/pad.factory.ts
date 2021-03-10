/* eslint-disable no-return-assign */
import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreatePadDto } from '../dtos/create.dto';
import Pad from '../entity/pad.entity';

export const fakerRegistry = (): CreatePadDto => {
  const faker = Faker;
  return {
    id_andamento: faker.random.number(),
    id_andamentocoger: faker.random.number(),
    sjd_ref: faker.random.number(),
    sjd_ref_ano: faker.random.number(),
    doc_origem_txt: faker.lorem.word(50),
    fato_data: faker.date.future(1),
    cdopm: faker.name.findName(),
    sintese_txt: faker.lorem.word(50),
    portaria_numero: faker.name.findName(),
    portaria_data: faker.date.future(1),
    doc_tipo: faker.name.findName(),
    doc_numero: faker.name.findName(),
    abertura_data: faker.date.future(1),
    relatorio_file: faker.name.findName(),
    solucao_file: faker.name.findName(),
    prioridade: faker.random.number(),
  };
};

define(Pad, () => {
  const factory = new Pad();

  Object.entries(fakerRegistry()).forEach(
    ([key, value]) => (factory[key] = value) as Pad,
  );
  return factory;
});
