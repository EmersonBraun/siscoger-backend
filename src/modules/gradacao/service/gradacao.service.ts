import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGradacaoDto } from '../dtos/create.dto';
import { UpdateGradacaoDto } from '../dtos/update.dto';
import { Gradacao } from '../entity/gradacao.entity';

@Injectable()
export class GradacaoService {
  constructor(
    @InjectRepository(Gradacao)
    private repository: Repository<Gradacao>,
  ) {}

  async findAll(): Promise<Gradacao[]> {
    return await this.repository.find();
  }

  async create(data: CreateGradacaoDto): Promise<Gradacao> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Gradacao> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateGradacaoDto): Promise<Gradacao> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}
