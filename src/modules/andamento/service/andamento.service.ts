import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAndamentoDto } from '../dtos/create.dto';
import { UpdateAndamentoDto } from '../dtos/update.dto';
import { Andamento } from '../entity/andamento.entity';

@Injectable()
export class AndamentoService {
  constructor(
    @InjectRepository(Andamento)
    private repository: Repository<Andamento>,
  ) {}

  async findAll(): Promise<void> {
    await this.repository.find();
  }

  async create(data: CreateAndamentoDto): Promise<void> {
    const registry = this.repository.create(data);
    await this.repository.save(registry);
  }

  async findById(id: string): Promise<Andamento> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateAndamentoDto): Promise<Andamento> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}
