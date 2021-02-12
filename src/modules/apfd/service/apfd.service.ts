import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateApfdDto } from '../dtos/create.dto';
import { UpdateApfdDto } from '../dtos/update.dto';
import { Apfd } from '../entity/apfd.entity';

@Injectable()
export class ApfdService {
  constructor(
    @InjectRepository(Apfd)
    private repository: Repository<Apfd>,
  ) {}

  async findAll(): Promise<Apfd[]> {
    return await this.repository.find();
  }

  async create(data: CreateApfdDto): Promise<Apfd> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Apfd> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateApfdDto): Promise<Apfd> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });
    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<Apfd> {
    const data = await this.findById(id);
    await this.repository.delete(id);
    return data;
  }
}
