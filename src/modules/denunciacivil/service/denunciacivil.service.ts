import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDenunciacivilDto, UpdateDenunciacivilDto } from '../dtos';
import DenunciaCivil from '../entity/denunciacivil.entity';

@Injectable()
export class DenunciaCivilService {
  constructor(
    @InjectRepository(DenunciaCivil)
    private repository: Repository<DenunciaCivil>,
  ) {}

  async findAll(): Promise<DenunciaCivil[]> {
    return await this.repository.find();
  }

  async search(data: CreateDenunciacivilDto): Promise<DenunciaCivil[]> {
    console.log(data);
    return await this.repository.find({ where: { ...data } });
  }

  async create(data: CreateDenunciacivilDto): Promise<DenunciaCivil> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<DenunciaCivil> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(
    id: string,
    data: UpdateDenunciacivilDto,
  ): Promise<DenunciaCivil> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}
