import { InjectQueue } from '@nestjs/bull';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Queue } from 'bull';
import { Model } from 'mongoose';
import { usernameSendMail } from '../../../config';
import { CreateMailDto } from '../dtos/create.dto';
import { UpdateMailDto } from '../dtos/update.dto';
import { Mail, MailDocument } from '../schema/mail.schema';

@Injectable()
export class MailService {
  constructor(
    @InjectModel(Mail.name)
    private repository: Model<MailDocument>,
    @InjectQueue('mail') private readonly mailQueue: Queue,
  ) {}

  async findAll(): Promise<void> {
    await this.repository.find().exec();
  }

  async search(data: CreateMailDto): Promise<void> {
    await this.repository.find({ ...data });
  }

  async create(data: CreateMailDto): Promise<any> {
    data.from = data.from || usernameSendMail;
    data.template = data.template || 'simple';
    await this.mailQueue.add('send', data);
  }

  async save(data: CreateMailDto): Promise<void> {
    await this.repository.create(data);
  }

  async findById(id: string): Promise<Mail> {
    const registry = await this.repository.findById(id).exec();

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateMailDto): Promise<void> {
    await this.repository
      .findOneAndUpdate({ _id: id }, { ...data }, { new: true })
      .exec();
  }

  async delete(id: string): Promise<void> {
    await this.repository.findOneAndDelete({ _id: id }).exec();
  }
}
