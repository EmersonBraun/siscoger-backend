import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExclusaoJudicialDto } from '../dtos/create.dto';
import { UpdateExclusaoJudicialDto } from '../dtos/update.dto';
import ExclusaoJudicial from '../entity/exclusaojudicial.entity';

@Injectable()
export class ExclusaoJudicialService {
  constructor(
    @InjectRepository(ExclusaoJudicial)
    private repository: Repository<ExclusaoJudicial>,
  ) {}

  async findAll(): Promise<ExclusaoJudicial[]> {
    return await this.repository.find();
  }

  async search(data: CreateExclusaoJudicialDto): Promise<ExclusaoJudicial[]> {
    console.log(data);
    return await this.repository.find({ where: { ...data } });
  }

  async create(data: CreateExclusaoJudicialDto): Promise<ExclusaoJudicial> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<ExclusaoJudicial> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(
    id: string,
    data: UpdateExclusaoJudicialDto,
  ): Promise<ExclusaoJudicial> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}
