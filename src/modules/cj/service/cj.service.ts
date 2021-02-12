import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCjDto } from '../dtos/create.dto';
import { UpdateCjDto } from '../dtos/update.dto';
import { Cj } from '../entity/cj.entity';

@Injectable()
export class CjService {
  constructor(@InjectRepository(Cj) private repository: Repository<Cj>) {}

  async findAll(): Promise<Cj[]> {
    return await this.repository.find();
  }

  async create(data: CreateCjDto): Promise<Cj> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Cj> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateCjDto): Promise<Cj> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });
    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<Cj> {
    const data = await this.findById(id);
    await this.repository.delete(id);
    return data;
  }
}
