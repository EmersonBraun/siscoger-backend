// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreaterestricaoDto } from '../dtos/create.dto';
// import { UpdaterestricaoDto } from '../dtos/update.dto';
// import { restricao } from '../entity/restricao.entity';

// @Injectable()
// export class restricaoService {
//   constructor(
//     @InjectRepository(restricao)
//     private repository: Repository<restricao>,
//   ) {}

//   async findAll(): Promise<restricao[]> {
//     return await this.repository.find();
//   }

//   async search(data: CreaterestricaoDto): Promise<restricao[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: CreaterestricaoDto): Promise<restricao> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<restricao> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: UpdaterestricaoDto): Promise<restricao> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }
