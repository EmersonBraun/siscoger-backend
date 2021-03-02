import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePresoTipoDto } from '../dtos/create.dto';
import { UpdatePresoTipoDto } from '../dtos/update.dto';
import PresoTipo from '../entity/presotipo.entity';

@Injectable()
export class PresoTipoService {
  constructor(
    @InjectRepository(PresoTipo)
    private repository: Repository<PresoTipo>,
  ) {}

  async findAll(): Promise<PresoTipo[]> {
    return await this.repository.find();
  }

  async search(data: CreatePresoTipoDto): Promise<PresoTipo[]> {
    console.log(data);
    return await this.repository.find({ where: { ...data } });
  }

  async create(data: CreatePresoTipoDto): Promise<PresoTipo> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<PresoTipo> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdatePresoTipoDto): Promise<PresoTipo> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}
