import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateApfdDto } from '../dtos/create.dto';
import { UpdateApfdDto } from '../dtos/update.dto';
import { Apfd } from '../entity/apfd.entity';

@Injectable()
export class ApfdService {
  constructor(
    @InjectRepository(Apfd)
    private repository: Repository<Apfd>, // @Inject() // private log: LogService,
  ) {}

  async findAll(): Promise<void> {
    await this.repository.find();
  }

  async create(data: CreateApfdDto): Promise<Apfd> {
    const registry = this.repository.create(data);
    const saveData = await this.repository.save(registry);
    // await this.log.create({ module: 'apfd', action: 'create', data: saveData });
    return saveData;
  }

  async findById(id: string): Promise<Apfd> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateApfdDto): Promise<Apfd> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });
    const saveData = this.repository.create({ ...registry, ...data });
    // await this.log.create({
    //   module: 'apfd',
    //   action: 'update',
    //   data: saveData,
    //   old: registry,
    // });

    return saveData;
  }

  async delete(id: string): Promise<void> {
    const saveData = await this.findById(id);
    // await this.log.create({ module: 'apfd', action: 'delete', data: saveData });
    await this.repository.delete(id);
  }
}
