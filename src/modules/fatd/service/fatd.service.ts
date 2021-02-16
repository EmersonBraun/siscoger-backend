// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreatefatdDto } from '../dtos/create.dto';
// import { UpdatefatdDto } from '../dtos/update.dto';
// import { fatd } from '../entity/fatd.entity';

// @Injectable()
// export class fatdService {
//   constructor(
//     @InjectRepository(fatd)
//     private repository: Repository<fatd>,
//   ) {}

//   async findAll(): Promise<fatd[]> {
//     return await this.repository.find();
//   }

//   async search(data: CreatefatdDto): Promise<fatd[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: CreatefatdDto): Promise<fatd> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<fatd> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: UpdatefatdDto): Promise<fatd> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }
