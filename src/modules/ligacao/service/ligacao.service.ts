import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLigacaoDto } from '../dtos/create.dto';
import { UpdateLigacaoDto } from '../dtos/update.dto';
import { Ligacao } from '../entity/ligacao.entity';

@Injectable()
export class LigacaoService {
  constructor(
    @InjectRepository(Ligacao)
    private repository: Repository<Ligacao>,
  ) {}

  async findAll(): Promise<Ligacao[]> {
    return await this.repository.find();
  }

  async search(data: CreateLigacaoDto): Promise<Ligacao[]> {
    return await this.repository.find({ where: { ...data } });
  }

  async create(data: CreateLigacaoDto): Promise<Ligacao> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Ligacao> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateLigacaoDto): Promise<Ligacao> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}