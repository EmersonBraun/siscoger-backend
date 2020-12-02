import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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