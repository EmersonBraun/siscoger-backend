// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreaterecursoDto, UpdaterecursoDto } from '../dtos';
// import { fakerRegistry } from '../factory/recurso.factory';
// import { recurso } from '../entity/recurso.entity';
// import { recursoService } from './recurso.service';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});
// describe('recursoService', () => {
//   let service: recursoService;
//   let mockRegistry: CreaterecursoDto;

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
//         recursoService,
//         { provide: getRepositoryToken(recurso), useValue: mockRepository },
//       ],
//     }).compile();

//     service = module.get<recursoService>(recursoService);
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
//   describe('when create recurso', () => {
//     it('should create a recurso', async () => {
//       mockRepository.create.mockReturnValueOnce(mockRegistry);
//       mockRepository.save.mockReturnValueOnce(mockRegistry);

//       const recurso: CreaterecursoDto = mockRegistry;

//       const savedrecurso = await service.create(recurso);

//       expect(savedrecurso).toMatchObject(mockRegistry);
//       expect(mockRepository.create).toBeCalledWith(recurso);
//       expect(mockRepository.create).toBeCalledTimes(1);
//       expect(mockRepository.save).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all recurso', () => {
//     it('should list all recurso', async () => {
//       mockRepository.find.mockReturnValue([mockRegistry]);

//       const recurso = await service.findAll();

//       expect(recurso).toHaveLength(1);
//       expect(mockRepository.find).toBeCalledTimes(1);
//     });
//   });

//   // describe('when search one recurso', () => {
//   //   it('should list one recurso', async () => {
//   //     mockRepository.create.mockReturnValueOnce(mockRegistry);
//   //     mockRepository.save.mockReturnValueOnce(mockRegistry);

//   //     const recursoUpdate: UpdaterecursoDto = mockRegistry;
//   //     const recurso = await service.search(recursoUpdate);

//   //     expect(recurso).toMatchObject(mockRegistry);
//   //     expect(mockRepository.find).toBeCalledTimes(1);
//   //   });
//   // });

//   describe('when search recurso by id', () => {
//     it('should find a existing recurso', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);

//       const recurso = await service.findById('1');

//       expect(recurso).toMatchObject(mockRegistry);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//     });

//     it('should return a exception when does not to find a recurso', async () => {
//       mockRepository.findOne.mockReturnValue(null);

//       await service.findById('3').catch(error => {
//         expect(error).toBeInstanceOf(NotFoundException);
//         expect(error).toMatchObject({ message: 'Registry not found' });
//         expect(mockRepository.findOne).toBeCalledWith('3');
//         expect(mockRepository.findOne).toBeCalledTimes(1);
//       });
//     });
//   });

//   describe('when update a recurso', () => {
//     it('should update a existing recurso', async () => {
//       const recursoUpdate: UpdaterecursoDto = mockRegistry;
//       recursoUpdate.descricao = 'Update recurso '

//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.update.mockReturnValue({
//         ...mockRegistry,
//         ...recursoUpdate,
//       });
//       mockRepository.create.mockReturnValue({
//         ...mockRegistry,
//         ...recursoUpdate,
//       });

//       const updatedrecurso = await service.update(
//         '1',
//         recursoUpdate,
//       );

//       expect(updatedrecurso).toMatchObject(recursoUpdate);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.update).toBeCalledWith('1', recursoUpdate);
//       expect(mockRepository.update).toBeCalledTimes(1);
//       expect(mockRepository.create).toBeCalledWith({
//         ...mockRegistry,
//         ...recursoUpdate,
//       });
//       expect(mockRepository.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a recurso', () => {
//     it('should delete a existing recurso', async () => {
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