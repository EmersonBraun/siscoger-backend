import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCdDto } from '../dtos/create.dto';
import { UpdateCdDto } from '../dtos/update.dto';
import { Cd } from '../entity/cd.entity';

@Injectable()
export class CdService {
  constructor(@InjectRepository(Cd) private repository: Repository<Cd>) {}

  async findAll(): Promise<Cd[] | void> {
    await this.repository.find();
  }

  async create(data: CreateCdDto): Promise<Cd> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Cd> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateCdDto): Promise<Cd> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });
    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
