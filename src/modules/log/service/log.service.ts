import { Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { Model } from 'mongoose';
import { CreateLogDto } from '../dtos/create.dto';
// import { UpdateLogDto } from '../dtos/update.dto';
import { Log, LogDocument } from '../schema/log.schema';

export interface AuthRequest extends Request {
  user?: string
}
@Injectable({ scope: Scope.REQUEST })
export class LogService {
  constructor(
    @InjectModel(Log.name)
    private repository: Model<LogDocument>,
    @Inject(REQUEST) private request: Request
  ) {}

  async findAll(): Promise<Log[]> {
    return await this.repository.find().exec()
  }

  async search(data: CreateLogDto): Promise<Log[]> {
    return await this.repository.find({ ...data });
  }

  async create(data: any): Promise<Log> {
    const { user } = this.request
    return await this.repository.create({...data, user});
  }

  async findById(id: string): Promise<Log> {
    const registry = await this.repository.findById(id).exec();

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  // async update(id: string, data: UpdateLogDto): Promise<Log> {
  //   return await this.repository.findOneAndUpdate({ _id: id }, { ...data }, { new: true }).exec();
  // }

  // async delete(id: string): Promise<void> {
  //   await this.repository.findOneAndDelete({ _id: id }).exec();
  // }
}