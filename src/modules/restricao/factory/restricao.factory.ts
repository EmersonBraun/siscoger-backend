import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateRestricaoDto } from '../dtos/create.dto';
import Restricao from '../entity/restricao.entity';

export const fakerRegistry = (): CreateRestricaoDto => {
  const faker = Faker;
  return {
    rg: faker.name.findName(),
    cargo: faker.name.findName(),
    nome: faker.name.findName(),
    fardamento_bl: faker.name.findName(),
    arma_bl: faker.name.findName(),
    origem: faker.name.findName(),
    cadastro_data: faker.date.future(1),
    inicio_data: faker.date.future(1),
    fim_data: faker.date.future(1),
    retirada_data: faker.date.future(1),
    proc: faker.name.findName(),
    sjd_ref: faker.random.number(),
    sjd_ref_ano: faker.random.number(),
    obs_txt: faker.lorem.word(50), // text
  };
};

define(Restricao, () => {
  return (fakerRegistry as unknown) as Restricao;
});
