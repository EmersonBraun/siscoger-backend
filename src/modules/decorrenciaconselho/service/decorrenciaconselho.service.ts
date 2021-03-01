import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDecorrenciaConselhoDto } from '../dtos/create.dto';
import { UpdateDecorrenciaConselhoDto } from '../dtos/update.dto';
import { DecorrenciaConselho } from '../entity/decorrenciaconselho.entity';

@Injectable()
export class DecorrenciaConselhoService {
  constructor(
    @InjectRepository(DecorrenciaConselho)
    private repository: Repository<DecorrenciaConselho>,
  ) {}

  async findAll(): Promise<DecorrenciaConselho[]> {
    return await this.repository.find();
  }

  async search(
    data: CreateDecorrenciaConselhoDto,
  ): Promise<DecorrenciaConselho[]> {
    console.log(data);
    return await this.repository.find({ where: { ...data } });
  }

  async create(
    data: CreateDecorrenciaConselhoDto,
  ): Promise<DecorrenciaConselho> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<DecorrenciaConselho> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(
    id: string,
    data: UpdateDecorrenciaConselhoDto,
  ): Promise<DecorrenciaConselho> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}
