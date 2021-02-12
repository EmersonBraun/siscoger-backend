import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFalecimentoDto } from '../dtos/create.dto';
import { UpdateFalecimentoDto } from '../dtos/update.dto';
import { Falecimento } from '../entity/falecimento.entity';

@Injectable()
export class FalecimentoService {
  constructor(
    @InjectRepository(Falecimento) private repository: Repository<Falecimento>,
  ) {}

  async findAll(): Promise<void> {
    await this.repository.find();
  }

  async create(data: CreateFalecimentoDto): Promise<Falecimento> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Falecimento> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateFalecimentoDto): Promise<Falecimento> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });
    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
