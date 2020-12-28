import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from '../dtos/create.dto';
import { UpdateRoleDto } from '../dtos/update.dto';
import { Role } from '../entity/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private repository: Repository<Role>,
  ) {}

  async findAll(): Promise<Role[]> {
    return await this.repository.find();
  }

  async search(data: CreateRoleDto): Promise<Role[]> {
    console.log(data)
    return await this.repository.find({ where: { ...data } });
  }

  async create(data: CreateRoleDto): Promise<Role> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Role> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateRoleDto): Promise<Role> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}