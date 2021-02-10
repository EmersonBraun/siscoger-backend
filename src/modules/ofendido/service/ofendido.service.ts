import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogService } from '../../log/service/log.service';
import { CreateOfendidoDto } from '../dtos/create.dto';
import { UpdateOfendidoDto } from '../dtos/update.dto';
import { Ofendido } from '../entity/ofendido.entity';

@Injectable()
export class OfendidoService {
  constructor(
    @InjectRepository(Ofendido)
    private repository: Repository<Ofendido>,
    private log: LogService,
  ) {}

  async findAll(): Promise<void> {
    await this.repository.find();
  }

  async search(data: CreateOfendidoDto): Promise<void> {
    await this.repository.find({ where: { ...data } });
  }

  async create(data: CreateOfendidoDto): Promise<Ofendido> {
    const registry = this.repository.create(data);
    const saveData = await this.repository.save(registry);
    await this.log.create({
      module: 'ofendido',
      action: 'create',
      data: saveData,
    });
    return saveData;
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
    const saveData = this.repository.create({ ...registry, ...data });
    await this.log.create({
      module: 'ofendido',
      action: 'update',
      data: saveData,
      old: registry,
    });

    return saveData;
  }

  async delete(id: string): Promise<void> {
    const saveData = await this.findById(id);
    await this.log.create({
      module: 'ofendido',
      action: 'delete',
      data: saveData,
    });
    await this.repository.delete(id);
  }
}
