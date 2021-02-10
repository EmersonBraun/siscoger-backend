import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAndamentocogerDto } from '../dtos/create.dto';
import { UpdateAndamentocogerDto } from '../dtos/update.dto';
import { Andamentocoger } from '../entity/andamentocoger.entity';

@Injectable()
export class AndamentocogerService {
  constructor(
    @InjectRepository(Andamentocoger)
    private repository: Repository<Andamentocoger>,
  ) {}

  async findAll(): Promise<void> {
    await this.repository.find();
  }

  async create(data: CreateAndamentocogerDto): Promise<void> {
    const registry = this.repository.create(data);
    await this.repository.save(registry);
  }

  async findById(id: string): Promise<Andamentocoger> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(
    id: string,
    data: UpdateAndamentocogerDto,
  ): Promise<Andamentocoger> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}
