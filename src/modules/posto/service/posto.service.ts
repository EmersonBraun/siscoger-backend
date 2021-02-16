// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreatepostoDto } from '../dtos/create.dto';
// import { UpdatepostoDto } from '../dtos/update.dto';
// import { posto } from '../entity/posto.entity';

// @Injectable()
// export class postoService {
//   constructor(
//     @InjectRepository(posto)
//     private repository: Repository<posto>,
//   ) {}

//   async findAll(): Promise<posto[]> {
//     return await this.repository.find();
//   }

//   async search(data: CreatepostoDto): Promise<posto[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: CreatepostoDto): Promise<posto> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<posto> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: UpdatepostoDto): Promise<posto> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }
