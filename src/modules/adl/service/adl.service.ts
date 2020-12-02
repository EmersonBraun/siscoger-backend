import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdlDto } from '../dtos/create.dto';
import { UpdateAdlDto } from '../dtos/update.dto';
import { Adl } from '../entity/adl.entity';

@Injectable()
export class AdlService {
  constructor(
    @InjectRepository(Adl)
    private repository: Repository<Adl>,
  ) {}

  async findAll(): Promise<Adl[]> {
    return await this.repository.find();
  }

  async create(data: CreateAdlDto): Promise<Adl> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Adl> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateAdlDto): Promise<Adl> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}