import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSindicanciaDto } from '../dtos/create.dto';
import { SearchPortariaDto } from '../dtos/search-portaria.dto';
import { UpdateSindicanciaDto } from '../dtos/update.dto';
import { Sindicancia } from '../entity/sindicancia.entity';

@Injectable()
export class SindicanciaService {
  constructor(
    @InjectRepository(Sindicancia)
    private repository: Repository<Sindicancia>,
  ) {}

  getNextRefYear(data: CreateSindicanciaDto): number {
    return data.sjd_ref_ano || new Date().getFullYear()
  }

  async getNextRef(data: CreateSindicanciaDto): Promise<number> {
    const year = this.getNextRefYear(data)
    const registry = await this.repository
    .createQueryBuilder()
    .select("MAX(sjd_ref)", "max")
    .where('sjd_ref_ano = :year', { year })
    .getRawOne()
    console.log(registry)
    return registry?.max ? ++registry.max : 1

  }

  async findAll(): Promise<Sindicancia[]> {
    return await this.repository.find();
  }

  async findPortaria(params: SearchPortariaDto): Promise<Sindicancia> {
    const { cdopm, portaria_numero } = params
    return await this.repository.findOne({cdopm, portaria_numero});
  }

  async create(data: CreateSindicanciaDto): Promise<Sindicancia> {
    const registry = this.repository.create(data);
    registry.sjd_ref_ano = this.getNextRefYear(data)
    registry.sjd_ref = await this.getNextRef(data)
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Sindicancia> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateSindicanciaDto): Promise<Sindicancia> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}