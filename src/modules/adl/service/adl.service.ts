import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { LogService } from '../../log/service/log.service';
import { CreateAdlDto } from '../dtos/create.dto';
import { UpdateAdlDto } from '../dtos/update.dto';
import Adl from '../entity/adl.entity';

@Injectable()
export class AdlService {
  constructor(
    @InjectRepository(Adl) private repository: Repository<Adl>, // @Inject() private readonly log: LogService,
  ) {}

  async findAll(): Promise<Adl[]> {
    return await this.repository.find({ order: { id: 'ASC' } });
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

  async update(id: string, data: UpdateAdlDto) {
    const old = await this.findById(id);
    await this.repository.update(id, { ...data });
    const saveData = this.repository.create({ ...old, ...data });
    return saveData;
  }

  async delete(id: string): Promise<Adl> {
    const data = await this.findById(id);
    await this.repository.delete(id);
    return data;
  }
}
