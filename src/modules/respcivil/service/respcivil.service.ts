// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreaterespcivilDto } from '../dtos/create.dto';
// import { UpdaterespcivilDto } from '../dtos/update.dto';
// import { respcivil } from '../entity/respcivil.entity';

// @Injectable()
// export class respcivilService {
//   constructor(
//     @InjectRepository(respcivil)
//     private repository: Repository<respcivil>,
//   ) {}

//   async findAll(): Promise<respcivil[]> {
//     return await this.repository.find();
//   }

//   async search(data: CreaterespcivilDto): Promise<respcivil[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: CreaterespcivilDto): Promise<respcivil> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<respcivil> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: UpdaterespcivilDto): Promise<respcivil> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }
