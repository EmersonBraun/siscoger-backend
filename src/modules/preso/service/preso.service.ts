// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreatepresoDto } from '../dtos/create.dto';
// import { UpdatepresoDto } from '../dtos/update.dto';
// import { preso } from '../entity/preso.entity';

// @Injectable()
// export class presoService {
//   constructor(
//     @InjectRepository(preso)
//     private repository: Repository<preso>,
//   ) {}

//   async findAll(): Promise<preso[]> {
//     return await this.repository.find();
//   }

//   async search(data: CreatepresoDto): Promise<preso[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: CreatepresoDto): Promise<preso> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<preso> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: UpdatepresoDto): Promise<preso> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }
