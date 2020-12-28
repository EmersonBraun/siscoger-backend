import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePendenciaDto } from '../dtos/create.dto';
import { UpdatePendenciaDto } from '../dtos/update.dto';
import { Pendencia, PendenciaDocument } from '../schema/pendencia.schema';

@Injectable()
export class PendenciaService {
  constructor(
    @InjectModel(Pendencia.name)
    private repository: Model<PendenciaDocument>
  ) {}

  async findAll(): Promise<Pendencia[]> {
    return await this.repository.find().exec()
  }

  async search(data: CreatePendenciaDto): Promise<Pendencia[]> {
    return await this.repository.find({ ...data });
  }

  async create(data: CreatePendenciaDto): Promise<Pendencia> {
    return await this.repository.create(data);
  }

  async findById(id: string): Promise<Pendencia> {
    const registry = await this.repository.findById(id).exec();

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdatePendenciaDto): Promise<Pendencia> {
    return await this.repository.findOneAndUpdate({ _id: id }, { ...data }, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.repository.findOneAndDelete({ _id: id }).exec();
  }
}