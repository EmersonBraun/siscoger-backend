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
    return await this.repository.find();
  }

  async create(data: CreateAdlDto): Promise<Adl> {
    const registry = this.repository.create(data);
    const saveData = await this.repository.save(registry);
    // await this.log.create({ module: 'adl', action: 'create', data: saveData });
    return saveData;
  }

  async findById(id: string): Promise<Adl> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateAdlDto): Promise<Adl> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });
    const saveData = this.repository.create({ ...registry, ...data });
    // await this.log.create({
    //   module: 'adl',
    //   action: 'update',
    //   data: saveData,
    //   old: registry,
    // });

    return saveData;
  }

  async delete(id: string): Promise<void> {
    const saveData = await this.findById(id);
    // await this.log.create({ module: 'adl', action: 'delete', data: saveData });
    await this.repository.delete(id);
  }
}
