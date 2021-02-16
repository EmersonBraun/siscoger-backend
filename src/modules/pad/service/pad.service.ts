// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreatepadDto } from '../dtos/create.dto';
// import { UpdatepadDto } from '../dtos/update.dto';
// import { pad } from '../entity/pad.entity';

// @Injectable()
// export class padService {
//   constructor(
//     @InjectRepository(pad)
//     private repository: Repository<pad>,
//   ) {}

//   async findAll(): Promise<pad[]> {
//     return await this.repository.find();
//   }

//   async search(data: CreatepadDto): Promise<pad[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: CreatepadDto): Promise<pad> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<pad> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: UpdatepadDto): Promise<pad> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }
