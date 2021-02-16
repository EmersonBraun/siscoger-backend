// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreatesaidiligenciasDto } from '../dtos/create.dto';
// import { UpdatesaidiligenciasDto } from '../dtos/update.dto';
// import { saidiligencias } from '../entity/saidiligencias.entity';

// @Injectable()
// export class saidiligenciasService {
//   constructor(
//     @InjectRepository(saidiligencias)
//     private repository: Repository<saidiligencias>,
//   ) {}

//   async findAll(): Promise<saidiligencias[]> {
//     return await this.repository.find();
//   }

//   async search(data: CreatesaidiligenciasDto): Promise<saidiligencias[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: CreatesaidiligenciasDto): Promise<saidiligencias> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<saidiligencias> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: UpdatesaidiligenciasDto): Promise<saidiligencias> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }
