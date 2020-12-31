import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogService } from '../../log/service/log.service';
import { CreateEnvolvidoDto } from '../dtos/create.dto';
import { UpdateEnvolvidoDto } from '../dtos/update.dto';
import { Envolvido } from '../entity/envolvido.entity';

@Injectable()
export class EnvolvidoService {
  constructor(
    @InjectRepository(Envolvido)
    private repository: Repository<Envolvido>,
    private log: LogService
  ) {}

  async findAll(): Promise<Envolvido[]> {
    return await this.repository.find();
  }

  async search(data: CreateEnvolvidoDto): Promise<Envolvido[]> {
    return await this.repository.find({ where: { ...data } });
  }

  async create(data: CreateEnvolvidoDto): Promise<Envolvido> {
    const registry = this.repository.create(data);
    const saveData = await this.repository.save(registry);
    await this.log.create({ module: 'envolvido', action: 'create', data: saveData,})
    return saveData
  }

  async findById(id: string): Promise<Envolvido> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateEnvolvidoDto): Promise<Envolvido> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });
    const saveData = this.repository.create({ ...registry, ...data });
    await this.log.create({module: 'envolvido',action: 'update',data: saveData,old: registry,})
    
    return saveData
  }

  async delete(id: string): Promise<void> {
    const saveData = await this.findById(id);
    await this.log.create({module: 'envolvido',action: 'delete',data: saveData})
    await this.repository.delete(id);
  }
}