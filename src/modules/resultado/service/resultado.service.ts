// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreateresultadoDto } from '../dtos/create.dto';
// import { UpdateresultadoDto } from '../dtos/update.dto';
// import { resultado } from '../entity/resultado.entity';

// @Injectable()
// export class resultadoService {
//   constructor(
//     @InjectRepository(resultado)
//     private repository: Repository<resultado>,
//   ) {}

//   async findAll(): Promise<resultado[]> {
//     return await this.repository.find();
//   }

//   async search(data: CreateresultadoDto): Promise<resultado[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: CreateresultadoDto): Promise<resultado> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<resultado> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: UpdateresultadoDto): Promise<resultado> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }
