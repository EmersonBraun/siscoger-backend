// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreatepresotipoDto } from '../dtos/create.dto';
// import { UpdatepresotipoDto } from '../dtos/update.dto';
// import { presotipo } from '../entity/presotipo.entity';

// @Injectable()
// export class presotipoService {
//   constructor(
//     @InjectRepository(presotipo)
//     private repository: Repository<presotipo>,
//   ) {}

//   async findAll(): Promise<presotipo[]> {
//     return await this.repository.find();
//   }

//   async search(data: CreatepresotipoDto): Promise<presotipo[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: CreatepresotipoDto): Promise<presotipo> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<presotipo> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: UpdatepresotipoDto): Promise<presotipo> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }
