/* eslint-disable @typescript-eslint/no-unused-vars */
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
    const { roles, ...rest } = data
    return await this.repository.find({ where: { ...rest } });
  }

  async create(data: CreatePermissionDto): Promise<Permission> {
    const { roles, ...rest } = data
    const registry = this.repository.create(rest);
    if (roles.length) registry.roles = [...roles]
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Permission> {
    const registry = await this.repository.findOne(id,{
      relations: ['roles']
    });

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdatePermissionDto): Promise<Permission> {
    const registry = await this.repository.findOne(id, {relations:['roles']});
    const { roles, ...rest } = data
    if (roles) registry.roles = [...roles]
    await this.repository.update(id, { ...rest });

    return this.repository.save({ ...registry, ...rest });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}