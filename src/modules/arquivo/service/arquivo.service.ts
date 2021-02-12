import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SearchArquivoDto } from '../dtos';
import { CreateArquivoDto } from '../dtos/create.dto';
import { UpdateArquivoDto } from '../dtos/update.dto';
import { Arquivo } from '../entity/arquivo.entity';

@Injectable()
export class ArquivoService {
  constructor(
    @InjectRepository(Arquivo)
    private repository: Repository<Arquivo>,
  ) {}

  async findAll(): Promise<void> {
    await this.repository.find();
  }

  async search(data: SearchArquivoDto): Promise<void> {
    await this.repository.find({ where: { ...data } });
  }

  async create(data: CreateArquivoDto): Promise<Arquivo> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Arquivo> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateArquivoDto): Promise<Arquivo> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });
    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
