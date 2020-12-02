import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SearchSobrestamentoDto } from '../dtos';
import { CreateSobrestamentoDto } from '../dtos/create.dto';
import { UpdateSobrestamentoDto } from '../dtos/update.dto';
import { Sobrestamento } from '../entity/sobrestamento.entity';

@Injectable()
export class SobrestamentoService {
  constructor(
    @InjectRepository(Sobrestamento)
    private repository: Repository<Sobrestamento>,
  ) {}

  async findAll(): Promise<Sobrestamento[]> {
    return await this.repository.find();
  }

  async search(data: SearchSobrestamentoDto): Promise<Sobrestamento[]> {
    return await this.repository.find({ where: { ...data } });
  }


  async create(data: CreateSobrestamentoDto): Promise<Sobrestamento> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Sobrestamento> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateSobrestamentoDto): Promise<Sobrestamento> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}