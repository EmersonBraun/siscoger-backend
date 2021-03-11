/* eslint-disable no-return-assign */
import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateIsoDto } from '../dtos/create.dto';
import Iso from '../entity/iso.entity';

export const fakerRegistry = (): CreateIsoDto => {
  const faker = Faker;
  return {
    id_andamento: faker.random.number(),
    id_andamentocoger: faker.random.number(),
    sjd_ref: faker.random.number(),
    sjd_ref_ano: faker.random.number(),
    cdopm: faker.name.findName(),
    fato_data: faker.date.future(1),
    abertura_data: faker.date.future(1),
    sintese_txt: faker.name.findName(),
    tipo_penal: faker.name.findName(),
    doc_tipo: faker.name.findName(),
    doc_numero: faker.name.findName(),
    portaria_numero: faker.name.findName(),
    portaria_data: faker.date.future(1),
    exclusao_txt: faker.name.findName(),
    opm_meta4: faker.name.findName(),
    relatoriomedico_file: faker.name.findName(),
    relatoriomedico_data: faker.date.future(1),
    solucaoautoridade_file: faker.name.findName(),
    solucaoautoridade_data: faker.date.future(1),
    prioridade: faker.random.boolean(),
    completo: true,
  };
};

define(Iso, () => {
  const factory = new Iso();

  Object.entries(fakerRegistry()).forEach(
    ([key, value]) => (factory[key] = value) as Iso,
  );
  return factory;
});
