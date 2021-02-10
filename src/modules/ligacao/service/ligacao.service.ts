import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogService } from '../../log/service/log.service';
import { CreateLigacaoDto } from '../dtos/create.dto';
import { UpdateLigacaoDto } from '../dtos/update.dto';
import { Ligacao } from '../entity/ligacao.entity';

@Injectable()
export class LigacaoService {
  constructor(
    @InjectRepository(Ligacao)
    private repository: Repository<Ligacao>,
    private log: LogService
  ) {}

  async findAll(): Promise<Ligacao[]> {
    return await this.repository.find();
  }

  async search(data: CreateLigacaoDto): Promise<Ligacao[]> {
    return await this.repository.find({ where: { ...data } });
  }

  async create(data: CreateLigacaoDto): Promise<Ligacao> {
    const registry = this.repository.create(data);
    const saveData = await this.repository.save(registry);
    await this.log.create({ module: 'ligacao', action: 'create', data: saveData,})
    return saveData
  }

  async findById(id: string): Promise<Ligacao> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateLigacaoDto): Promise<Ligacao> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });
    const saveData = this.repository.create({ ...registry, ...data });
    await this.log.create({module: 'ligacao',action: 'update',data: saveData,old: registry,})
    
    return saveData
  }

  async delete(id: string): Promise<void> {
    const saveData = await this.findById(id);
    await this.log.create({module: 'ligacao',action: 'delete',data: saveData})
    await this.repository.delete(id);
  }
}