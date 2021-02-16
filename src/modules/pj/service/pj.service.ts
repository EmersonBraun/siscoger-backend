// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreatepjDto } from '../dtos/create.dto';
// import { UpdatepjDto } from '../dtos/update.dto';
// import { pj } from '../entity/pj.entity';

// @Injectable()
// export class pjService {
//   constructor(
//     @InjectRepository(pj)
//     private repository: Repository<pj>,
//   ) {}

//   async findAll(): Promise<pj[]> {
//     return await this.repository.find();
//   }

//   async search(data: CreatepjDto): Promise<pj[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: CreatepjDto): Promise<pj> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<pj> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: UpdatepjDto): Promise<pj> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }
