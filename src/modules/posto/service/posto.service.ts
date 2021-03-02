import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostoDto } from '../dtos/create.dto';
import { UpdatePostoDto } from '../dtos/update.dto';
import Posto from '../entity/posto.entity';

@Injectable()
export class PostoService {
  constructor(
    @InjectRepository(Posto)
    private repository: Repository<Posto>,
  ) {}

  async findAll(): Promise<Posto[]> {
    return await this.repository.find();
  }

  async search(data: CreatePostoDto): Promise<Posto[]> {
    return await this.repository.find({ where: { ...data } });
  }

  async create(data: CreatePostoDto): Promise<Posto> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Posto> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdatePostoDto): Promise<Posto> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}
