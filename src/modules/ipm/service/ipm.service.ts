// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreateipmDto } from '../dtos/create.dto';
// import { UpdateipmDto } from '../dtos/update.dto';
// import { ipm } from '../entity/ipm.entity';

// @Injectable()
// export class ipmService {
//   constructor(
//     @InjectRepository(ipm)
//     private repository: Repository<ipm>,
//   ) {}

//   async findAll(): Promise<ipm[]> {
//     return await this.repository.find();
//   }

//   async search(data: CreateipmDto): Promise<ipm[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: CreateipmDto): Promise<ipm> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<ipm> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: UpdateipmDto): Promise<ipm> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }
