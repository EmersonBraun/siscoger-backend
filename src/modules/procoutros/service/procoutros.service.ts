// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreateprocoutrosDto } from '../dtos/create.dto';
// import { UpdateprocoutrosDto } from '../dtos/update.dto';
// import { procoutros } from '../entity/procoutros.entity';

// @Injectable()
// export class procoutrosService {
//   constructor(
//     @InjectRepository(procoutros)
//     private repository: Repository<procoutros>,
//   ) {}

//   async findAll(): Promise<procoutros[]> {
//     return await this.repository.find();
//   }

//   async search(data: CreateprocoutrosDto): Promise<procoutros[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: CreateprocoutrosDto): Promise<procoutros> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<procoutros> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: UpdateprocoutrosDto): Promise<procoutros> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }
