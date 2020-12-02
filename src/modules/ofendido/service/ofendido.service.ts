import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOfendidoDto } from '../dtos/create.dto';
import { UpdateOfendidoDto } from '../dtos/update.dto';
import { Ofendido } from '../entity/ofendido.entity';

@Injectable()
export class OfendidoService {
  constructor(
    @InjectRepository(Ofendido)
    private repository: Repository<Ofendido>,
  ) {}

  async findAll(): Promise<Ofendido[]> {
    return await this.repository.find();
  }

  async search(data: CreateOfendidoDto): Promise<Ofendido[]> {
    return await this.repository.find({ where: { ...data } });
  }

  async create(data: CreateOfendidoDto): Promise<Ofendido> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Ofendido> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateOfendidoDto): Promise<Ofendido> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}