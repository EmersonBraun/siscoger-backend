// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { Create{{moduleName | toCamelCase}}Dto, Update{{moduleName | toCamelCase}}Dto } from '../dtos';
// import { fakerRegistry } from '../factory/{{moduleName | toLowerCase}}.factory';
// import { {{moduleName | toCamelCase}} } from '../entity/{{moduleName | toLowerCase}}.entity';
// import { {{moduleName | toCamelCase}}Service } from './{{moduleName | toLowerCase}}.service';

// describe('{{moduleName | toCamelCase}}Service', () => {
//   let service: {{moduleName | toCamelCase}}Service;
//   let mockRegistry: Create{{moduleName | toCamelCase}}Dto;

//   const mockRepository = {
//     create: jest.fn(),
//     save: jest.fn(),
//     search: jest.fn(),
//     find: jest.fn(),
//     findOne: jest.fn(),
//     update: jest.fn(),
//     delete: jest.fn(),
//   };

//   beforeAll(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         {{moduleName | toCamelCase}}Service,
//         { provide: getRepositoryToken({{moduleName | toCamelCase}}), useValue: mockRepository },
//       ],
//     }).compile();

//     service = module.get<{{moduleName | toCamelCase}}Service>({{moduleName | toCamelCase}}Service);
//     mockRegistry = fakerRegistry()
//   });

//   beforeEach(() => {
//     mockRepository.create.mockReset();
//     mockRepository.save.mockReset();
//     mockRepository.search.mockReset();
//     mockRepository.find.mockReset();
//     mockRepository.findOne.mockReset();
//     mockRepository.update.mockReset();
//     mockRepository.delete.mockReset();
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });

//   // need to solve
//   describe('when create {{moduleName | toCamelCase}}', () => {
//     it('should create a {{moduleName | toCamelCase}}', async () => {
//       mockRepository.create.mockReturnValueOnce(mockRegistry);
//       mockRepository.save.mockReturnValueOnce(mockRegistry);

//       const {{moduleName | toCamelCase}}: Create{{moduleName | toCamelCase}}Dto = mockRegistry;

//       const saved{{moduleName | toCamelCase}} = await service.create({{moduleName | toCamelCase}});

//       expect(saved{{moduleName | toCamelCase}}).toMatchObject(mockRegistry);
//       expect(mockRepository.create).toBeCalledWith({{moduleName | toCamelCase}});
//       expect(mockRepository.create).toBeCalledTimes(1);
//       expect(mockRepository.save).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all {{moduleName | toCamelCase}}', () => {
//     it('should list all {{moduleName | toCamelCase}}', async () => {
//       mockRepository.find.mockReturnValue([mockRegistry]);

//       const {{moduleName | toCamelCase}} = await service.findAll();

//       expect({{moduleName | toCamelCase}}).toHaveLength(1);
//       expect(mockRepository.find).toBeCalledTimes(1);
//     });
//   });

//   // describe('when search one {{moduleName | toCamelCase}}', () => {
//   //   it('should list one {{moduleName | toCamelCase}}', async () => {
//   //     mockRepository.create.mockReturnValueOnce(mockRegistry);
//   //     mockRepository.save.mockReturnValueOnce(mockRegistry);

//   //     const {{moduleName | toCamelCase}}Update: Update{{moduleName | toCamelCase}}Dto = mockRegistry;
//   //     const {{moduleName | toCamelCase}} = await service.search({{moduleName | toCamelCase}}Update);

//   //     expect({{moduleName | toCamelCase}}).toMatchObject(mockRegistry);
//   //     expect(mockRepository.find).toBeCalledTimes(1);
//   //   });
//   // });

//   describe('when search {{moduleName | toCamelCase}} by id', () => {
//     it('should find a existing {{moduleName | toCamelCase}}', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);

//       const {{moduleName | toCamelCase}} = await service.findById('1');

//       expect({{moduleName | toCamelCase}}).toMatchObject(mockRegistry);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//     });

//     it('should return a exception when does not to find a {{moduleName | toCamelCase}}', async () => {
//       mockRepository.findOne.mockReturnValue(null);

//       await service.findById('3').catch(error => {
//         expect(error).toBeInstanceOf(NotFoundException);
//         expect(error).toMatchObject({ message: 'Registry not found' });
//         expect(mockRepository.findOne).toBeCalledWith('3');
//         expect(mockRepository.findOne).toBeCalledTimes(1);
//       });
//     });
//   });

//   describe('when update a {{moduleName | toCamelCase}}', () => {
//     it('should update a existing {{moduleName | toCamelCase}}', async () => {
//       const {{moduleName | toCamelCase}}Update: Update{{moduleName | toCamelCase}}Dto = mockRegistry;
//       {{moduleName | toCamelCase}}Update.descricao = 'Update {{moduleName | toCamelCase}} '

//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.update.mockReturnValue({
//         ...mockRegistry,
//         ...{{moduleName | toCamelCase}}Update,
//       });
//       mockRepository.create.mockReturnValue({
//         ...mockRegistry,
//         ...{{moduleName | toCamelCase}}Update,
//       });

//       const updated{{moduleName | toCamelCase}} = await service.update(
//         '1',
//         {{moduleName | toCamelCase}}Update,
//       );

//       expect(updated{{moduleName | toCamelCase}}).toMatchObject({{moduleName | toCamelCase}}Update);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.update).toBeCalledWith('1', {{moduleName | toCamelCase}}Update);
//       expect(mockRepository.update).toBeCalledTimes(1);
//       expect(mockRepository.create).toBeCalledWith({
//         ...mockRegistry,
//         ...{{moduleName | toCamelCase}}Update,
//       });
//       expect(mockRepository.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a {{moduleName | toCamelCase}}', () => {
//     it('should delete a existing {{moduleName | toCamelCase}}', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.delete.mockReturnValue(mockRegistry);

//       await service.delete('1');

//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.delete).toBeCalledWith('1');
//       expect(mockRepository.delete).toBeCalledTimes(1);
//     });
//   });
// });