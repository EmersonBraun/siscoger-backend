import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFalecimentoDto } from '../dtos/create.dto';
import { UpdateFalecimentoDto } from '../dtos/update.dto';
import { Falecimento } from '../entity/falecimento.entity';

@Injectable()
export class FalecimentoService {
  constructor(
    @InjectRepository(Falecimento) private repository: Repository<Falecimento>, // @Inject() private log: LogService,
  ) {}

  async findAll(): Promise<void> {
    await this.repository.find();
  }

  async create(data: CreateFalecimentoDto): Promise<Falecimento> {
    const registry = this.repository.create(data);
    const saveData = await this.repository.save(registry);
    // await this.log.create({
    //   module: 'falecimento',
    //   action: 'create',
    //   data: saveData,
    // });
    return saveData;
  }

  async findById(id: string): Promise<Falecimento> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateFalecimentoDto): Promise<Falecimento> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });
    const saveData = this.repository.create({ ...registry, ...data });
    // await this.log.create({
    //   module: 'falecimento',
    //   action: 'update',
    //   data: saveData,
    //   old: registry,
    // });

    return saveData;
  }

  async delete(id: string): Promise<void> {
    const saveData = await this.findById(id);
    // await this.log.create({
    //   module: 'falecimento',
    //   action: 'delete',
    //   data: saveData,
    // });
    await this.repository.delete(id);
  }
}
