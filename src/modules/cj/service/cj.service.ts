import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCjDto } from '../dtos/create.dto';
import { UpdateCjDto } from '../dtos/update.dto';
import { Cj } from '../entity/cj.entity';

@Injectable()
export class CjService {
  constructor(
    @InjectRepository(Cj) private repository: Repository<Cj>, // @Inject() private log: LogService,
  ) {}

  async findAll(): Promise<Cj[] | void> {
    await this.repository.find();
  }

  async create(data: CreateCjDto): Promise<Cj> {
    const registry = this.repository.create(data);
    const saveData = await this.repository.save(registry);
    // await this.log.create({ module: 'cj', action: 'create', data: saveData });
    return saveData;
  }

  async findById(id: string): Promise<Cj> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateCjDto): Promise<Cj> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });
    const saveData = this.repository.create({ ...registry, ...data });
    // await this.log.create({
    //   module: 'cj',
    //   action: 'update',
    //   data: saveData,
    //   old: registry,
    // });

    return saveData;
  }

  async delete(id: string): Promise<void> {
    const saveData = await this.findById(id);
    // await this.log.create({ module: 'cj', action: 'delete', data: saveData });
    await this.repository.delete(id);
  }
}
