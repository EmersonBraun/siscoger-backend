import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateIsoDto } from '../dtos/create.dto';
import Iso from '../entity/iso.entity';

define(Iso, (faker: typeof Faker) => {
  const factory = new Iso();
  factory.id_andamento = faker.random.number();
  factory.id_andamentocoger = faker.random.number();
  factory.sjd_ref = faker.random.number();
  factory.sjd_ref_ano = faker.random.number();
  factory.cdopm = faker.name.findName();
  factory.fato_data = faker.date.future(1);
  factory.abertura_data = faker.date.future(1);
  factory.sintese_txt = faker.name.findName();
  factory.tipo_penal = faker.name.findName();
  factory.doc_tipo = faker.name.findName();
  factory.doc_numero = faker.name.findName();
  factory.portaria_numero = faker.name.findName();
  factory.portaria_data = faker.date.future(1);
  factory.exclusao_txt = faker.name.findName();
  factory.opm_meta4 = faker.name.findName();
  factory.relatoriomedico_file = faker.name.findName();
  factory.relatoriomedico_data = faker.date.future(1);
  factory.solucaoautoridade_file = faker.name.findName();
  factory.solucaoautoridade_data = faker.date.future(1);
  factory.prioridade = faker.random.number();
  return factory;
});

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
    prioridade: faker.random.number(),
  };
};
