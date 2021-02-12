import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from '../dtos/create.dto';
import { UpdateRoleDto } from '../dtos/update.dto';
import { Role } from '../entity/role.entity';

@Injectable()
export class RoleService {
  constructor(@InjectRepository(Role) private repository: Repository<Role>) {}

  async findAll(): Promise<void> {
    await this.repository.find();
  }

  async search(data: CreateRoleDto): Promise<void> {
    await this.repository.find({ where: { ...data } });
  }

  async create(data: CreateRoleDto): Promise<Role> {
    const { permissions, users, ...rest } = data;
    const registry = this.repository.create(rest);
    if (permissions?.length) registry.permissions = [...permissions];
    if (users?.length) registry.users = [...users];
    const saveData = await this.repository.save(registry);
    return saveData;
  }

  async findById(id: string): Promise<Role> {
    const registry = await this.repository.findOne(id, {
      relations: ['permissions', 'users'],
    });

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateRoleDto): Promise<Role> {
    const registry = await this.repository.findOne(id, {
      relations: ['permissions', 'users'],
    });
    if (!registry) {
      throw new NotFoundException('Registry not found');
    }
    const { permissions, users, ...rest } = data;
    if (permissions?.length) registry.permissions = [...permissions];
    if (users?.length) registry.users = [...users];
    await this.repository.update(id, { ...rest });

    return this.repository.save({ ...registry, ...rest });
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
