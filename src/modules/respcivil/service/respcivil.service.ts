import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRespCivilDto, UpdateRespCivilDto } from '../dtos';
import RespCivil from '../entity/respcivil.entity';

@Injectable()
export class RespCivilService {
  constructor(
    @InjectRepository(RespCivil) private repository: Repository<RespCivil>,
  ) {}

  async findAll(): Promise<RespCivil[]> {
    return await this.repository.find({
      order: { id: 'DESC' },
    });
  }

  async create(data: CreateRespCivilDto): Promise<RespCivil> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<RespCivil> {
    const registry = await this.repository.findOne(id, { withDeleted: true });

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateRespCivilDto): Promise<RespCivil> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<RespCivil> {
    const data = await this.findById(id);
    await this.repository.delete(id);
    return data;
  }
}
