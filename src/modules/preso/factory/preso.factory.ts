import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CreatePresoDto } from '../dtos/create.dto';
import Preso from '../entity/preso.entity';

export const fakerRegistry = (): CreatePresoDto => {
  const faker = Faker;
  return {
    rg: faker.name.findName(),
    nome: faker.name.findName(),
    cargo: faker.name.findName(),
    cdopm_quandopreso: faker.name.findName(),
    cdopm_prisao: faker.name.findName(),
    localreclusao: faker.name.findName(),
    local: faker.name.findName(),
    processo: faker.name.findName(),
    natureza: faker.name.findName(),
    complemento: faker.name.findName(),
    numeromandado: faker.name.findName(),
    id_presotipo: faker.random.number(),
    origem_proc: faker.name.findName(),
    origem_sjd_ref: faker.random.number(),
    origem_sjd_ref_ano: faker.random.number(),
    origem_opm: faker.name.findName(),
    inicio_data: faker.date.future(1),
    fim_data: faker.date.future(1),
    vara: faker.name.findName(),
    comarca: faker.name.findName(),
    obs_txt: faker.lorem.word(50),
  };
};
define(Preso, (faker: typeof Faker) => {
  return (fakerRegistry() as unknown) as Preso;
});
