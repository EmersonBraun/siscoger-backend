import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogService } from '../../log/service/log.service';
import { CreateCdDto } from '../dtos/create.dto';
import { UpdateCdDto } from '../dtos/update.dto';
import { Cd } from '../entity/cd.entity';

@Injectable()
export class CdService {
  constructor(
    @InjectRepository(Cd)
    private repository: Repository<Cd>,
    private log: LogService,
  ) {}

  async findAll(): Promise<Cd[] | void> {
    await this.repository.find();
  }

  async create(data: CreateCdDto): Promise<Cd> {
    const registry = this.repository.create(data);
    const saveData = await this.repository.save(registry);
    await this.log.create({ module: 'cd', action: 'create', data: saveData });
    return saveData;
  }

  async findById(id: string): Promise<Cd> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateCdDto): Promise<Cd> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });
    const saveData = this.repository.create({ ...registry, ...data });
    await this.log.create({
      module: 'cd',
      action: 'update',
      data: saveData,
      old: registry,
    });

    return saveData;
  }

  async delete(id: string): Promise<void> {
    const saveData = await this.findById(id);
    await this.log.create({ module: 'cd', action: 'delete', data: saveData });
    await this.repository.delete(id);
  }
}
