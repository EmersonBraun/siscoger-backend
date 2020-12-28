import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePermissionDto } from '../dtos/create.dto';
import { UpdatePermissionDto } from '../dtos/update.dto';
import { Permission } from '../entity/permission.entity';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permission)
    private repository: Repository<Permission>,
  ) {}

  async findAll(): Promise<Permission[]> {
    return await this.repository.find();
  }

  async search(data: CreatePermissionDto): Promise<Permission[]> {
    console.log(data)
    return await this.repository.find({ where: { ...data } });
  }

  async create(data: CreatePermissionDto): Promise<Permission> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Permission> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdatePermissionDto): Promise<Permission> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}