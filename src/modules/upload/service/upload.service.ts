import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUploadDto } from '../dtos/create.dto';
import { UpdateUploadDto } from '../dtos/update.dto';
import { Upload, UploadDocument } from '../schema/upload.schema';

@Injectable()
export class UploadService {
  constructor(
    @InjectModel(Upload.name) private repository: Model<UploadDocument>,
  ) {}

  async findAll(): Promise<void> {
    await this.repository.find().exec();
  }

  async search(data: CreateUploadDto): Promise<void> {
    await this.repository.find({ ...data });
  }

  async create(data: CreateUploadDto): Promise<Upload> {
    return await this.repository.create(data);
  }

  async findById(id: string): Promise<Upload> {
    const registry = await this.repository.findById(id).exec();

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateUploadDto): Promise<Upload> {
    return await this.repository
      .findOneAndUpdate({ _id: id }, { ...data }, { new: true })
      .exec();
  }

  async delete(id: string): Promise<void> {
    await this.repository.findOneAndDelete({ _id: id }).exec();
  }
}
