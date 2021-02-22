import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create.dto';
import { UpdateUserDto } from '../dtos/update.dto';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async findOne(data?: any): Promise<CreateUserDto> {
    const user = await this.repository.findOne(data);
    if (!user) {
      throw new NotFoundException('Registry not found');
    }
    return user;
  }

  async findByRg(rg?: string): Promise<CreateUserDto> {
    const user = await this.repository.findOne(
      { rg },
      {
        relations: ['roles', 'roles.permissions'],
      },
    );
    if (!user) {
      throw new NotFoundException('Registry not found');
    }
    return user;
  }

  async search(data: CreateUserDto): Promise<User[]> {
    return await this.repository.find({ where: { ...data } });
  }

  async create(data: CreateUserDto): Promise<User> {
    data.password = await bcrypt.hash(data.password, 10);
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<User> {
    const registry = await this.repository.findOne(id, {
      relations: ['roles'],
    });

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const registry = await this.repository.findOne(id, {
      relations: ['roles'],
    });
    if (!registry) {
      throw new NotFoundException('Registry not found');
    }
    const { roles, ...rest } = data;

    rest.password = await bcrypt.hash(rest.password, 10);

    if (roles?.length) registry.roles = [...roles];
    await this.repository.update(id, { ...rest });
    const updated = await this.repository.save({ ...registry, ...rest });
    console.log({ updated });
    return updated;
  }

  async delete(id: string): Promise<User> {
    const data = await this.findById(id);
    await this.repository.delete(id);
    return data;
  }
}
