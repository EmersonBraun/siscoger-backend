import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateComportamentoDto } from '../dtos/create.dto';
import { UpdateComportamentoDto } from '../dtos/update.dto';
import { Comportamento } from '../entity/comportamento.entity';

@Injectable()
export class ComportamentoService {
  constructor(
    @InjectRepository(Comportamento)
    private repository: Repository<Comportamento>,
  ) {}

  async findAll(): Promise<Comportamento[]> {
    return await this.repository.find();
  }

  async create(data: CreateComportamentoDto): Promise<Comportamento> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Comportamento> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(
    id: string,
    data: UpdateComportamentoDto,
  ): Promise<Comportamento> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<Comportamento> {
    const data = await this.findById(id);
    await this.repository.delete(id);
    return data;
  }
}
