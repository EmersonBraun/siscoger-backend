// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreatedenunciacivilDto } from '../dtos/create.dto';
// import { UpdatedenunciacivilDto } from '../dtos/update.dto';
// import { denunciacivil } from '../entity/denunciacivil.entity';

// @Injectable()
// export class denunciacivilService {
//   constructor(
//     @InjectRepository(denunciacivil)
//     private repository: Repository<denunciacivil>,
//   ) {}

//   async findAll(): Promise<denunciacivil[]> {
//     return await this.repository.find();
//   }

//   async search(data: CreatedenunciacivilDto): Promise<denunciacivil[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: CreatedenunciacivilDto): Promise<denunciacivil> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<denunciacivil> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: UpdatedenunciacivilDto): Promise<denunciacivil> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }
