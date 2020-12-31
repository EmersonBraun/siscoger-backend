import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogService } from '../../log/service/log.service';
import { SearchArquivoDto } from '../dtos';
import { CreateArquivoDto } from '../dtos/create.dto';
import { UpdateArquivoDto } from '../dtos/update.dto';
import { Arquivo } from '../entity/arquivo.entity';

@Injectable()
export class ArquivoService {
  constructor(
    @InjectRepository(Arquivo)
    private repository: Repository<Arquivo>,
    private log: LogService
  ) {}

  async findAll(): Promise<Arquivo[]> {
    return await this.repository.find();
  }

  async search(data: SearchArquivoDto): Promise<Arquivo[]> {
    return await this.repository.find({ where: { ...data } });
  }

  async create(data: CreateArquivoDto): Promise<Arquivo> {
    const registry = this.repository.create(data);
    const saveData = await this.repository.save(registry);
    await this.log.create({ module: 'arquivo', action: 'create', data: saveData,})
    return saveData
  }

  async findById(id: string): Promise<Arquivo> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateArquivoDto): Promise<Arquivo> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });
    const saveData = this.repository.create({ ...registry, ...data });
    await this.log.create({module: 'arquivo',action: 'update',data: saveData,old: registry,})
    
    return saveData
  }

  async delete(id: string): Promise<void> {
    const saveData = await this.findById(id);
    await this.log.create({module: 'arquivo',action: 'delete',data: saveData})
    await this.repository.delete(id);
  }
}