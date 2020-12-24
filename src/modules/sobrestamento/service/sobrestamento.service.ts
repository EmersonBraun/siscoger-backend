import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getCurrentDate } from 'src/common/utils/date.utils';
import { FeriadoService } from 'src/modules/feriado/service/feriado.service';
import { Repository } from 'typeorm';
import { SearchSobrestamentoDto } from '../dtos';
import { CreateSobrestamentoDto } from '../dtos/create.dto';
import { UpdateSobrestamentoDto } from '../dtos/update.dto';
import { Sobrestamento } from '../entity/sobrestamento.entity';

@Injectable()
export class SobrestamentoService {
  constructor(
    @InjectRepository(Sobrestamento)
    private repository: Repository<Sobrestamento>,
    private feriadoService: FeriadoService
  ) {}

  async findAll(): Promise<Sobrestamento[]> {
    return await this.repository.find();
  }

  async search(data: SearchSobrestamentoDto): Promise<Sobrestamento[]> {
    return await this.repository.find({ where: { ...data } });
  }

  async betweenDates(init: string, end = getCurrentDate('fr-ca'), procData: { field: any; value: any; }): Promise<number> {
    const duSobrestado = await this.repository
      .createQueryBuilder()
      .where("inicio_data > :init AND termino_data < :end ", {init, end})
      .andWhere(":id_proc = :value", {id_proc:procData.field, value:procData.value})
      .getCount()
    if (!duSobrestado) return 0
    const feriados = await this.feriadoService.betweenDates(init, end)
    return duSobrestado - feriados
  }

  async getMotive(procData: { field: any; value: any; }): Promise<any> {
    return await this.repository
      .createQueryBuilder()
      .where(":id_proc = :value ", {id_proc:procData.field, value:procData.value})
      .getOne()
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

  async update(id: string, data: UpdateSobrestamentoDto): Promise<Sobrestamento> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}