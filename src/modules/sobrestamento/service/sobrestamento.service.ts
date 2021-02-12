import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { getCurrentDate } from '../../../common/utils/date.utils';
import { FeriadoService } from '../../feriado/service/feriado.service';
import { SearchSobrestamentoDto } from '../dtos';
import { CreateSobrestamentoDto } from '../dtos/create.dto';
import { UpdateSobrestamentoDto } from '../dtos/update.dto';
import { Sobrestamento } from '../entity/sobrestamento.entity';

@Injectable()
export class SobrestamentoService {
  constructor(
    @InjectRepository(Sobrestamento)
    private repository: Repository<Sobrestamento>,
    private feriadoService: FeriadoService,
  ) {}

  async findAll(): Promise<void> {
    await this.repository.find();
  }

  async search(data: SearchSobrestamentoDto): Promise<void> {
    await this.repository.find({ where: { ...data } });
  }

  async betweenDates(
    init: string,
    end = getCurrentDate('fr-ca'),
    procData: { field: any; value: any },
  ): Promise<number> {
    const duSobrestado = await this.repository
      .createQueryBuilder()
      .where('inicio_data > :init AND termino_data < :end ', { init, end })
      .andWhere(':id_proc = :value', {
        id_proc: procData.field,
        value: procData.value,
      })
      .getCount();
    if (!duSobrestado) return 0;
    const feriados = await this.feriadoService.betweenDates(init, end);
    return duSobrestado - feriados;
  }

  async getMotive(procData: {
    field: any;
    value: any;
  }): Promise<Sobrestamento | void> {
    await this.repository
      .createQueryBuilder()
      .where(':id_proc = :value ', {
        id_proc: procData.field,
        value: procData.value,
      })
      .getOne();
  }

  async create(data: CreateSobrestamentoDto): Promise<Sobrestamento> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Sobrestamento> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(
    id: string,
    data: UpdateSobrestamentoDto,
  ): Promise<Sobrestamento> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });
    const saveData = this.repository.create({ ...registry, ...data });
    // await this.log.create({
    //   module: 'sobrestamento',
    //   action: 'update',
    //   data: saveData,
    //   old: registry,
    // });

    return saveData;
  }

  async delete(id: string): Promise<void> {
    const saveData = await this.findById(id);
    // await this.log.create({
    //   module: 'sobrestamento',
    //   action: 'delete',
    //   data: saveData,
    // });
    await this.repository.delete(id);
  }
}
