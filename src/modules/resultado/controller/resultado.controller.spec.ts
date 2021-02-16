// import { Test, TestingModule } from '@nestjs/testing';
// import { CreateresultadoDto, UpdateresultadoDto } from '../dtos';
// import { fakerRegistry } from '../factory/resultado.factory';
// import { resultadoService } from '../service/resultado.service';
// import { resultadoController } from './resultado.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('resultadoController', () => {
//   let controller: resultadoController;
//   let mockRegistry: CreateresultadoDto;

//   const mockService = {
//     create: jest.fn(),
//     findAll: jest.fn(),
//     search: jest.fn(),
//     findById: jest.fn(),
//     update: jest.fn(),
//     delete: jest.fn(),
//   };

//   beforeAll(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [resultadoController],
//       providers: [{ provide: resultadoService, useValue: mockService }],
//     }).compile();

//     controller = module.get<resultadoController>(resultadoController);
//     mockRegistry = fakerRegistry()
//   });

//   beforeEach(() => {
//     mockService.create.mockReset();
//     mockService.findAll.mockReset();
//     mockService.search.mockReset();
//     mockService.findById.mockReset();
//     mockService.update.mockReset();
//     mockService.delete.mockReset();
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });

//   describe('when create resultado', () => {
//     it('should create a resultado and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const resultado: CreateresultadoDto = mockRegistry;

//       const createdresultado = await controller.create(resultado);

//       expect(createdresultado).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(resultado);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all resultado', () => {
//     it('should search all resultado and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const resultado = await controller.findAll();

//       expect(resultado).toHaveLength(1);
//       expect(resultado).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search resultado by id', () => {
//     it('should find a existing resultado and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const resultado = await controller.findById('1');

//       expect(resultado).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a resultado', () => {
//     it('should update a existing resultado and return it', async () => {
//       const resultadoUpdate: UpdateresultadoDto = mockRegistry;
//       resultadoUpdate.descricao = 'Update resultado '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...resultadoUpdate,
//       });

//       const updatedresultado = await controller.update(
//         '1',
//         resultadoUpdate,
//       );

//       expect(updatedresultado).toMatchObject(resultadoUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         resultadoUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a resultado', () => {
//     it('should delete a existing resultado', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
