// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreatesaiDto } from '../dtos/create.dto';
// import { UpdatesaiDto } from '../dtos/update.dto';
// import { sai } from '../entity/sai.entity';

// @Injectable()
// export class saiService {
//   constructor(
//     @InjectRepository(sai)
//     private repository: Repository<sai>,
//   ) {}

//   async findAll(): Promise<sai[]> {
//     return await this.repository.find();
//   }

//   async search(data: CreatesaiDto): Promise<sai[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: CreatesaiDto): Promise<sai> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<sai> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: UpdatesaiDto): Promise<sai> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }
