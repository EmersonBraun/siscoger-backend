import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create.dto';
import { UpdateUserDto } from '../dtos/update.dto';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private repository: Repository<User>, // @Inject() private log: LogService,
  ) {}

  async findAll(): Promise<void> {
    await this.repository.find();
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

  async search(data: CreateUserDto): Promise<void> {
    await this.repository.find({ where: { ...data } });
  }

  async create(data: CreateUserDto): Promise<User> {
    const registry = this.repository.create(data);
    const saveData = await this.repository.save(registry);
    // await this.log.create({ module: 'user', action: 'create', data: saveData });
    return saveData;
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
    if (roles?.length) registry.roles = [...roles];
    await this.repository.update(id, { ...rest });

    const saveData = this.repository.save({ ...registry, ...rest });
    // await this.log.create({
    //   module: 'user',
    //   action: 'update',
    //   data: saveData,
    //   old: registry,
    // });

    return saveData;
  }

  async delete(id: string): Promise<void> {
    const saveData = await this.findById(id);
    // await this.log.create({ module: 'user', action: 'delete', data: saveData });
    await this.repository.delete(id);
  }
}
