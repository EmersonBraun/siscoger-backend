// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreateisoDto } from '../dtos/create.dto';
// import { UpdateisoDto } from '../dtos/update.dto';
// import { iso } from '../entity/iso.entity';

// @Injectable()
// export class isoService {
//   constructor(
//     @InjectRepository(iso)
//     private repository: Repository<iso>,
//   ) {}

//   async findAll(): Promise<iso[]> {
//     return await this.repository.find();
//   }

//   async search(data: CreateisoDto): Promise<iso[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: CreateisoDto): Promise<iso> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<iso> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: UpdateisoDto): Promise<iso> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }
