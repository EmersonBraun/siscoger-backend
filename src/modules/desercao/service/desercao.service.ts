// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreatedesercaoDto } from '../dtos/create.dto';
// import { UpdatedesercaoDto } from '../dtos/update.dto';
// import { desercao } from '../entity/desercao.entity';

// @Injectable()
// export class desercaoService {
//   constructor(
//     @InjectRepository(desercao)
//     private repository: Repository<desercao>,
//   ) {}

//   async findAll(): Promise<desercao[]> {
//     return await this.repository.find();
//   }

//   async search(data: CreatedesercaoDto): Promise<desercao[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: CreatedesercaoDto): Promise<desercao> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<desercao> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: UpdatedesercaoDto): Promise<desercao> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }
