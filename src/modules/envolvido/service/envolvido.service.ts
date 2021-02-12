import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEnvolvidoDto } from '../dtos/create.dto';
import { UpdateEnvolvidoDto } from '../dtos/update.dto';
import { Envolvido } from '../entity/envolvido.entity';

@Injectable()
export class EnvolvidoService {
  constructor(
    @InjectRepository(Envolvido) private repository: Repository<Envolvido>,
  ) {}

  async findAll(): Promise<Envolvido[]> {
    return await this.repository.find();
  }

  async search(data: CreateEnvolvidoDto): Promise<Envolvido[]> {
    return await this.repository.find({ where: { ...data } });
  }

  async create(data: CreateEnvolvidoDto): Promise<Envolvido> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Envolvido> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateEnvolvidoDto): Promise<Envolvido> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });
    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<Envolvido> {
    const data = await this.findById(id);
    await this.repository.delete(id);
    return data;
  }
}
