// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreateresultadoDto, UpdateresultadoDto } from '../dtos';
// import { fakerRegistry } from '../factory/resultado.factory';
// import { resultado } from '../entity/resultado.entity';
// import { resultadoService } from './resultado.service';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});
// describe('resultadoService', () => {
//   let service: resultadoService;
//   let mockRegistry: CreateresultadoDto;

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
//         resultadoService,
//         { provide: getRepositoryToken(resultado), useValue: mockRepository },
//       ],
//     }).compile();

//     service = module.get<resultadoService>(resultadoService);
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
//   describe('when create resultado', () => {
//     it('should create a resultado', async () => {
//       mockRepository.create.mockReturnValueOnce(mockRegistry);
//       mockRepository.save.mockReturnValueOnce(mockRegistry);

//       const resultado: CreateresultadoDto = mockRegistry;

//       const savedresultado = await service.create(resultado);

//       expect(savedresultado).toMatchObject(mockRegistry);
//       expect(mockRepository.create).toBeCalledWith(resultado);
//       expect(mockRepository.create).toBeCalledTimes(1);
//       expect(mockRepository.save).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all resultado', () => {
//     it('should list all resultado', async () => {
//       mockRepository.find.mockReturnValue([mockRegistry]);

//       const resultado = await service.findAll();

//       expect(resultado).toHaveLength(1);
//       expect(mockRepository.find).toBeCalledTimes(1);
//     });
//   });

//   // describe('when search one resultado', () => {
//   //   it('should list one resultado', async () => {
//   //     mockRepository.create.mockReturnValueOnce(mockRegistry);
//   //     mockRepository.save.mockReturnValueOnce(mockRegistry);

//   //     const resultadoUpdate: UpdateresultadoDto = mockRegistry;
//   //     const resultado = await service.search(resultadoUpdate);

//   //     expect(resultado).toMatchObject(mockRegistry);
//   //     expect(mockRepository.find).toBeCalledTimes(1);
//   //   });
//   // });

//   describe('when search resultado by id', () => {
//     it('should find a existing resultado', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);

//       const resultado = await service.findById('1');

//       expect(resultado).toMatchObject(mockRegistry);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//     });

//     it('should return a exception when does not to find a resultado', async () => {
//       mockRepository.findOne.mockReturnValue(null);

//       await service.findById('3').catch(error => {
//         expect(error).toBeInstanceOf(NotFoundException);
//         expect(error).toMatchObject({ message: 'Registry not found' });
//         expect(mockRepository.findOne).toBeCalledWith('3');
//         expect(mockRepository.findOne).toBeCalledTimes(1);
//       });
//     });
//   });

//   describe('when update a resultado', () => {
//     it('should update a existing resultado', async () => {
//       const resultadoUpdate: UpdateresultadoDto = mockRegistry;
//       resultadoUpdate.descricao = 'Update resultado '

//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.update.mockReturnValue({
//         ...mockRegistry,
//         ...resultadoUpdate,
//       });
//       mockRepository.create.mockReturnValue({
//         ...mockRegistry,
//         ...resultadoUpdate,
//       });

//       const updatedresultado = await service.update(
//         '1',
//         resultadoUpdate,
//       );

//       expect(updatedresultado).toMatchObject(resultadoUpdate);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.update).toBeCalledWith('1', resultadoUpdate);
//       expect(mockRepository.update).toBeCalledTimes(1);
//       expect(mockRepository.create).toBeCalledWith({
//         ...mockRegistry,
//         ...resultadoUpdate,
//       });
//       expect(mockRepository.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a resultado', () => {
//     it('should delete a existing resultado', async () => {
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
