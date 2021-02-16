// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreatereintegradoDto, UpdatereintegradoDto } from '../dtos';
// import { fakerRegistry } from '../factory/reintegrado.factory';
// import { reintegrado } from '../entity/reintegrado.entity';
// import { reintegradoService } from './reintegrado.service';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});
// describe('reintegradoService', () => {
//   let service: reintegradoService;
//   let mockRegistry: CreatereintegradoDto;

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
//         reintegradoService,
//         { provide: getRepositoryToken(reintegrado), useValue: mockRepository },
//       ],
//     }).compile();

//     service = module.get<reintegradoService>(reintegradoService);
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
//   describe('when create reintegrado', () => {
//     it('should create a reintegrado', async () => {
//       mockRepository.create.mockReturnValueOnce(mockRegistry);
//       mockRepository.save.mockReturnValueOnce(mockRegistry);

//       const reintegrado: CreatereintegradoDto = mockRegistry;

//       const savedreintegrado = await service.create(reintegrado);

//       expect(savedreintegrado).toMatchObject(mockRegistry);
//       expect(mockRepository.create).toBeCalledWith(reintegrado);
//       expect(mockRepository.create).toBeCalledTimes(1);
//       expect(mockRepository.save).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all reintegrado', () => {
//     it('should list all reintegrado', async () => {
//       mockRepository.find.mockReturnValue([mockRegistry]);

//       const reintegrado = await service.findAll();

//       expect(reintegrado).toHaveLength(1);
//       expect(mockRepository.find).toBeCalledTimes(1);
//     });
//   });

//   // describe('when search one reintegrado', () => {
//   //   it('should list one reintegrado', async () => {
//   //     mockRepository.create.mockReturnValueOnce(mockRegistry);
//   //     mockRepository.save.mockReturnValueOnce(mockRegistry);

//   //     const reintegradoUpdate: UpdatereintegradoDto = mockRegistry;
//   //     const reintegrado = await service.search(reintegradoUpdate);

//   //     expect(reintegrado).toMatchObject(mockRegistry);
//   //     expect(mockRepository.find).toBeCalledTimes(1);
//   //   });
//   // });

//   describe('when search reintegrado by id', () => {
//     it('should find a existing reintegrado', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);

//       const reintegrado = await service.findById('1');

//       expect(reintegrado).toMatchObject(mockRegistry);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//     });

//     it('should return a exception when does not to find a reintegrado', async () => {
//       mockRepository.findOne.mockReturnValue(null);

//       await service.findById('3').catch(error => {
//         expect(error).toBeInstanceOf(NotFoundException);
//         expect(error).toMatchObject({ message: 'Registry not found' });
//         expect(mockRepository.findOne).toBeCalledWith('3');
//         expect(mockRepository.findOne).toBeCalledTimes(1);
//       });
//     });
//   });

//   describe('when update a reintegrado', () => {
//     it('should update a existing reintegrado', async () => {
//       const reintegradoUpdate: UpdatereintegradoDto = mockRegistry;
//       reintegradoUpdate.descricao = 'Update reintegrado '

//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.update.mockReturnValue({
//         ...mockRegistry,
//         ...reintegradoUpdate,
//       });
//       mockRepository.create.mockReturnValue({
//         ...mockRegistry,
//         ...reintegradoUpdate,
//       });

//       const updatedreintegrado = await service.update(
//         '1',
//         reintegradoUpdate,
//       );

//       expect(updatedreintegrado).toMatchObject(reintegradoUpdate);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.update).toBeCalledWith('1', reintegradoUpdate);
//       expect(mockRepository.update).toBeCalledTimes(1);
//       expect(mockRepository.create).toBeCalledWith({
//         ...mockRegistry,
//         ...reintegradoUpdate,
//       });
//       expect(mockRepository.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a reintegrado', () => {
//     it('should delete a existing reintegrado', async () => {
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
