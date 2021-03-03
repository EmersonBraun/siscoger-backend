import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreateSaiDiligenciasDto } from '../dtos/create.dto';
import SaiDiligencias from '../entity/saidiligencias.entity';

export const fakerRegistry = (): CreateSaiDiligenciasDto => {
  const faker = Faker;
  return {
    sai: faker.random.number(),
    rg_cadastro: faker.name.findName(),
    data: faker.date.future(1),
    cdopm: faker.name.findName(),
    opm_abreviatura: faker.name.findName(),
    diligencias_txt: faker.lorem.word(50),
    digitador: faker.name.findName(),
    // data: faker.date.past(1),
  };
};

define(SaiDiligencias, (faker: typeof Faker) => {
  return (fakerRegistry as unknown) as SaiDiligencias;
});
