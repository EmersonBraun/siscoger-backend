import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTasksDto } from '../dtos/create.dto';
import { UpdateTasksDto } from '../dtos/update.dto';
import { Tasks, TasksDocument } from '../schema/task.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Tasks.name)
    private repository: Model<TasksDocument>,
  ) {}

  async findAll(): Promise<Tasks[]> {
    return await this.repository.find().exec();
  }

  async search(data: CreateTasksDto): Promise<Tasks[]> {
    return await this.repository.find({ ...data });
  }

  async create(data: CreateTasksDto): Promise<Tasks> {
    return await this.repository.create(data);
  }

  async findById(id: string): Promise<Tasks> {
    const registry = await this.repository.findById(id).exec();

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateTasksDto): Promise<any> {
    await this.repository
      .findOneAndUpdate({ _id: id }, { ...data }, { new: true })
      .exec();
  }

  async delete(id: string): Promise<void> {
    await this.repository.findOneAndDelete({ _id: id }).exec();
  }
}
