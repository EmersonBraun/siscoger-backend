import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  getCurrentDate,
  getDaysOfFDS,
  getDiffDateInDays
} from '../../../common/utils/date.utils';
import { CreateFeriadoDto } from '../dtos/create.dto';
import { UpdateFeriadoDto } from '../dtos/update.dto';
import { Feriado } from '../entity/feriado.entity';

@Injectable()
export class FeriadoService {
  constructor(
    @InjectRepository(Feriado)
    private repository: Repository<Feriado>,
  ) {}

  async findAll(): Promise<Feriado[]> {
    return await this.repository.find();
  }

  async betweenDates(
    init: string,
    end = getCurrentDate('fr-ca'),
  ): Promise<number> {
    const feriados = await this.repository
      .createQueryBuilder()
      .where('DATA BETWEEN :init AND :end ', { init, end })
      .getCount();
    return getDiffDateInDays(init, end) - getDaysOfFDS(init, end) - feriados;
  }

  async create(data: CreateFeriadoDto): Promise<Feriado> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Feriado> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateFeriadoDto): Promise<Feriado> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}
