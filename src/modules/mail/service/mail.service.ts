import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMailDto } from '../dtos/create.dto';
import { UpdateMailDto } from '../dtos/update.dto';
import { Mail, MailDocument } from '../schema/mail.schema';

@Injectable()
export class MailService {
  constructor(
    @InjectModel(Mail.name)
    private repository: Model<MailDocument>
  ) {}

  async findAll(): Promise<Mail[]> {
    return await this.repository.find().exec()
  }

  async search(data: CreateMailDto): Promise<Mail[]> {
    return await this.repository.find({ ...data });
  }

  async create(data: CreateMailDto): Promise<Mail> {
    return await this.repository.create(data);
  }

  async findById(id: string): Promise<Mail> {
    const registry = await this.repository.findById(id).exec();

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateMailDto): Promise<Mail> {
    return await this.repository.findOneAndUpdate({ _id: id }, { ...data }, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.repository.findOneAndDelete({ _id: id }).exec();
  }
}