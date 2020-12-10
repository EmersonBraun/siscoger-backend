import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create.dto';
import { UpdateUserDto } from '../dtos/update.dto';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async findOne(options?: any): Promise<CreateUserDto> {
    const user =  await this.repository.findOne(options);
    if (!user) {
      throw new NotFoundException('Registry not found');
    }    
    return user;  
}

  async search(data: CreateUserDto): Promise<User[]> {
     return await this.repository.find({ where: { ...data } });
  }

  async create(data: CreateUserDto): Promise<User> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<User> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}