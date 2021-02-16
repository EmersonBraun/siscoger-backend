// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreaterecursoDto } from '../dtos/create.dto';
// import { UpdaterecursoDto } from '../dtos/update.dto';
// import { recurso } from '../entity/recurso.entity';

// @Injectable()
// export class recursoService {
//   constructor(
//     @InjectRepository(recurso)
//     private repository: Repository<recurso>,
//   ) {}

//   async findAll(): Promise<recurso[]> {
//     return await this.repository.find();
//   }

//   async search(data: CreaterecursoDto): Promise<recurso[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: CreaterecursoDto): Promise<recurso> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<recurso> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: UpdaterecursoDto): Promise<recurso> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }
