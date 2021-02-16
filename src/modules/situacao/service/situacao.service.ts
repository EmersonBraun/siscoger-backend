// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreatesituacaoDto } from '../dtos/create.dto';
// import { UpdatesituacaoDto } from '../dtos/update.dto';
// import { situacao } from '../entity/situacao.entity';

// @Injectable()
// export class situacaoService {
//   constructor(
//     @InjectRepository(situacao)
//     private repository: Repository<situacao>,
//   ) {}

//   async findAll(): Promise<situacao[]> {
//     return await this.repository.find();
//   }

//   async search(data: CreatesituacaoDto): Promise<situacao[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: CreatesituacaoDto): Promise<situacao> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<situacao> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: UpdatesituacaoDto): Promise<situacao> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }
