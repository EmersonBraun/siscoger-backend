import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogService } from '../../log/service/log.service';
import { CreatePermissionDto } from '../dtos/create.dto';
import { UpdatePermissionDto } from '../dtos/update.dto';
import { Permission } from '../entity/permission.entity';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permission) private repository: Repository<Permission>,
    @Inject() private log: LogService,
  ) {}

  async findAll(): Promise<void> {
    await this.repository.find();
  }

  async search(data: CreatePermissionDto): Promise<void> {
    const { roles, ...rest } = data;
    await this.repository.find({ where: { ...rest } });
  }

  async create(data: CreatePermissionDto): Promise<Permission> {
    const { roles, ...rest } = data;
    const registry = this.repository.create(rest);
    if (roles?.length) registry.roles = [...roles];
    const saveData = await this.repository.save(registry);
    await this.log.create({
      module: 'permission',
      action: 'create',
      data: saveData,
    });
    return saveData;
  }

  async findById(id: string): Promise<Permission> {
    const registry = await this.repository.findOne(id, {
      relations: ['roles'],
    });

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdatePermissionDto): Promise<Permission> {
    const registry = await this.repository.findOne(id, {
      relations: ['roles'],
    });
    if (!registry) {
      throw new NotFoundException('Registry not found');
    }
    const { roles, ...rest } = data;
    if (roles?.length) registry.roles = [...roles];
    await this.repository.update(id, { ...rest });

    const saveData = this.repository.save({ ...registry, ...rest });
    await this.log.create({
      module: 'permission',
      action: 'update',
      data: saveData,
      old: registry,
    });

    return saveData;
  }

  async delete(id: string): Promise<void> {
    const saveData = await this.findById(id);
    await this.log.create({
      module: 'permission',
      action: 'delete',
      data: saveData,
    });
    await this.repository.delete(id);
  }
}
