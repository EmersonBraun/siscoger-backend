import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMotivoconselhoDto } from '../dtos/create.dto';
import { UpdateMotivoconselhoDto } from '../dtos/update.dto';
import { Motivoconselho } from '../entity/motivoconselho.entity';

@Injectable()
export class MotivoconselhoService {
  constructor(
    @InjectRepository(Motivoconselho)
    private repository: Repository<Motivoconselho>,
  ) {}

  async findAll(): Promise<void> {
    await this.repository.find();
  }

  async create(data: CreateMotivoconselhoDto): Promise<void> {
    const registry = this.repository.create(data);
    await this.repository.save(registry);
  }

  async findById(id: string): Promise<Motivoconselho> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(
    id: string,
    data: UpdateMotivoconselhoDto,
  ): Promise<Motivoconselho> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}
