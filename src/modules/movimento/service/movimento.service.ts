import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovimentoDto } from '../dtos/create.dto';
import { UpdateMovimentoDto } from '../dtos/update.dto';
import { Movimento } from '../entity/movimento.entity';

@Injectable()
export class MovimentoService {
  constructor(
    @InjectRepository(Movimento) private repository: Repository<Movimento>,
  ) {}

  async findAll(): Promise<Movimento[]> {
    return await this.repository.find();
  }

  async search(data: CreateMovimentoDto): Promise<Movimento[]> {
    return await this.repository.find({ where: { ...data } });
  }

  async create(data: CreateMovimentoDto): Promise<Movimento> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Movimento> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateMovimentoDto): Promise<Movimento> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });
    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<Movimento> {
    const data = await this.findById(id);
    await this.repository.delete(id);
    return data;
  }
}
