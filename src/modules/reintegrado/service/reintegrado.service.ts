// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreatereintegradoDto } from '../dtos/create.dto';
// import { UpdatereintegradoDto } from '../dtos/update.dto';
// import { reintegrado } from '../entity/reintegrado.entity';

// @Injectable()
// export class reintegradoService {
//   constructor(
//     @InjectRepository(reintegrado)
//     private repository: Repository<reintegrado>,
//   ) {}

//   async findAll(): Promise<reintegrado[]> {
//     return await this.repository.find();
//   }

//   async search(data: CreatereintegradoDto): Promise<reintegrado[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: CreatereintegradoDto): Promise<reintegrado> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<reintegrado> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: UpdatereintegradoDto): Promise<reintegrado> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }
