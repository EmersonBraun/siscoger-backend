// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Create{{moduleName | toCamelCase}}Dto } from '../dtos/create.dto';
// import { Update{{moduleName | toCamelCase}}Dto } from '../dtos/update.dto';
// import { {{moduleName | toCamelCase}} } from '../entity/{{moduleName | toLowerCase}}.entity';

// @Injectable()
// export class {{moduleName | toCamelCase}}Service {
//   constructor(
//     @InjectRepository({{moduleName | toCamelCase}})
//     private repository: Repository<{{moduleName | toCamelCase}}>,
//   ) {}

//   async findAll(): Promise<{{moduleName | toCamelCase}}[]> {
//     return await this.repository.find();
//   }

//   async search(data: Create{{moduleName | toCamelCase}}Dto): Promise<{{moduleName | toCamelCase}}[]> {
//     console.log(data)
//     return await this.repository.find({ where: { ...data } });
//   }

//   async create(data: Create{{moduleName | toCamelCase}}Dto): Promise<{{moduleName | toCamelCase}}> {
//     const registry = this.repository.create(data);
//     return await this.repository.save(registry);
//   }

//   async findById(id: string): Promise<{{moduleName | toCamelCase}}> {
//     const registry = await this.repository.findOne(id);

//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     return registry;
//   }

//   async update(id: string, data: Update{{moduleName | toCamelCase}}Dto): Promise<{{moduleName | toCamelCase}}> {
//     const registry = await this.findById(id);
//     await this.repository.update(id, { ...data });

//     return this.repository.create({ ...registry, ...data });
//   }

//   async delete(id: string): Promise<void> {
//     await this.findById(id);
//     await this.repository.delete(id);
//   }
// }