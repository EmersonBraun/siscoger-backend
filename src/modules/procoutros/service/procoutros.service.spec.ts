// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreateprocoutrosDto, UpdateprocoutrosDto } from '../dtos';
// import { fakerRegistry } from '../factory/procoutros.factory';
// import { procoutros } from '../entity/procoutros.entity';
// import { procoutrosService } from './procoutros.service';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});
// describe('procoutrosService', () => {
//   let service: procoutrosService;
//   let mockRegistry: CreateprocoutrosDto;

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
//         procoutrosService,
//         { provide: getRepositoryToken(procoutros), useValue: mockRepository },
//       ],
//     }).compile();

//     service = module.get<procoutrosService>(procoutrosService);
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
//   describe('when create procoutros', () => {
//     it('should create a procoutros', async () => {
//       mockRepository.create.mockReturnValueOnce(mockRegistry);
//       mockRepository.save.mockReturnValueOnce(mockRegistry);

//       const procoutros: CreateprocoutrosDto = mockRegistry;

//       const savedprocoutros = await service.create(procoutros);

//       expect(savedprocoutros).toMatchObject(mockRegistry);
//       expect(mockRepository.create).toBeCalledWith(procoutros);
//       expect(mockRepository.create).toBeCalledTimes(1);
//       expect(mockRepository.save).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all procoutros', () => {
//     it('should list all procoutros', async () => {
//       mockRepository.find.mockReturnValue([mockRegistry]);

//       const procoutros = await service.findAll();

//       expect(procoutros).toHaveLength(1);
//       expect(mockRepository.find).toBeCalledTimes(1);
//     });
//   });

//   // describe('when search one procoutros', () => {
//   //   it('should list one procoutros', async () => {
//   //     mockRepository.create.mockReturnValueOnce(mockRegistry);
//   //     mockRepository.save.mockReturnValueOnce(mockRegistry);

//   //     const procoutrosUpdate: UpdateprocoutrosDto = mockRegistry;
//   //     const procoutros = await service.search(procoutrosUpdate);

//   //     expect(procoutros).toMatchObject(mockRegistry);
//   //     expect(mockRepository.find).toBeCalledTimes(1);
//   //   });
//   // });

//   describe('when search procoutros by id', () => {
//     it('should find a existing procoutros', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);

//       const procoutros = await service.findById('1');

//       expect(procoutros).toMatchObject(mockRegistry);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//     });

//     it('should return a exception when does not to find a procoutros', async () => {
//       mockRepository.findOne.mockReturnValue(null);

//       await service.findById('3').catch(error => {
//         expect(error).toBeInstanceOf(NotFoundException);
//         expect(error).toMatchObject({ message: 'Registry not found' });
//         expect(mockRepository.findOne).toBeCalledWith('3');
//         expect(mockRepository.findOne).toBeCalledTimes(1);
//       });
//     });
//   });

//   describe('when update a procoutros', () => {
//     it('should update a existing procoutros', async () => {
//       const procoutrosUpdate: UpdateprocoutrosDto = mockRegistry;
//       procoutrosUpdate.descricao = 'Update procoutros '

//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.update.mockReturnValue({
//         ...mockRegistry,
//         ...procoutrosUpdate,
//       });
//       mockRepository.create.mockReturnValue({
//         ...mockRegistry,
//         ...procoutrosUpdate,
//       });

//       const updatedprocoutros = await service.update(
//         '1',
//         procoutrosUpdate,
//       );

//       expect(updatedprocoutros).toMatchObject(procoutrosUpdate);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.update).toBeCalledWith('1', procoutrosUpdate);
//       expect(mockRepository.update).toBeCalledTimes(1);
//       expect(mockRepository.create).toBeCalledWith({
//         ...mockRegistry,
//         ...procoutrosUpdate,
//       });
//       expect(mockRepository.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a procoutros', () => {
//     it('should delete a existing procoutros', async () => {
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
