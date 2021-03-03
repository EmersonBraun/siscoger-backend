import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateSaiDto } from '../dtos/create.dto';
import Sai from '../entity/sai.entity';

export const fakerRegistry = (): CreateSaiDto => {
  const faker = Faker;
  return {
    rg: faker.name.findName(),
    cargo: faker.name.findName(),
    nome: faker.name.findName(),
    rg_cadastro: faker.name.findName(),
    data: faker.date.future(1),
    docorigem: faker.name.findName(),
    cdopm: faker.name.findName(),
    cdopm_fato: faker.name.findName(),
    cdopm_controle: faker.name.findName(),
    opm_abreviatura: faker.name.findName(),
    sintese_txt: faker.lorem.word(50),
    digitador: faker.name.findName(),
    arquivopasta: faker.name.findName(),
    bou_ano1: faker.name.findName(),
    bou_numero1: faker.name.findName(),
    id_municipio: faker.random.number(),
    bairro: faker.name.findName(),
    logradouro: faker.name.findName(),
    numerodoc: faker.name.findName(),
    motivo_principal: faker.name.findName(),
    motivo_secundario: faker.name.findName(),
    desc_outros: faker.name.findName(),
    id_andamento: faker.random.number(),
    id_andamentocoger: faker.random.number(),
    sjd_ref: faker.random.number(),
    abertura_data: faker.date.future(1),
    sjd_ref_ano: faker.random.number(),
    vtr1_placa: faker.name.findName(),
    vtr1_prefixo: faker.name.findName(),
    vtr2_placa: faker.name.findName(),
    vtr2_prefixo: faker.name.findName(),
    relatorio1: faker.name.findName(),
    relatorio1_data: faker.date.future(1),
    relatorio1_file: faker.name.findName(),
    relatorio2: faker.name.findName(),
    relatorio2_data: faker.date.future(1),
    relatorio2_file: faker.name.findName(),
    relatorio3: faker.name.findName(),
    relatorio3_data: faker.date.future(1),
    relatorio3_file: faker.name.findName(),
    bou_ano2: faker.name.findName(),
    bou_ano3: faker.name.findName(),
    bou_numero2: faker.name.findName(),
    bou_numero3: faker.name.findName(),
  };
};

define(Sai, () => {
  return (fakerRegistry as unknown) as Sai;
});
