// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreateexclusaojudicialDto } from '../dtos/create.dto';
// import { UpdateexclusaojudicialDto } from '../dtos/update.dto';
// import { exclusaojudicial } from '../entity/exclusaojudicial.entity';

// @Injectable()
// export class exclusaojudicialService {
//   constructor(
//     @InjectRepository(exclusaojudicial)
//     private repository: Repository<exclusaojudicial>,
//   ) {}

//   async findAll(): Promise<exclusaojudicial[]> {
//     return await this.repository.find();
//   }

//   async search(data: CreateexclusaojudicialDto): Promise<exclusaojudicial[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: CreateexclusaojudicialDto): Promise<exclusaojudicial> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<exclusaojudicial> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: UpdateexclusaojudicialDto): Promise<exclusaojudicial> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }
