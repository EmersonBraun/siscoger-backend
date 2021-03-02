import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSituacaoDto } from '../dtos/create.dto';
import { UpdateSituacaoDto } from '../dtos/update.dto';
import Situacao from '../entity/situacao.entity';

@Injectable()
export class SituacaoService {
  constructor(
    @InjectRepository(Situacao)
    private repository: Repository<Situacao>,
  ) {}

  async findAll(): Promise<Situacao[]> {
    return await this.repository.find();
  }

  async search(data: CreateSituacaoDto): Promise<Situacao[]> {
    return await this.repository.find({ where: { ...data } });
  }

  async create(data: CreateSituacaoDto): Promise<Situacao> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Situacao> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateSituacaoDto): Promise<Situacao> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}
