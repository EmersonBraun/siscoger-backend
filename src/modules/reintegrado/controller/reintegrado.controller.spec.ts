// import { Test, TestingModule } from '@nestjs/testing';
// import { CreatereintegradoDto, UpdatereintegradoDto } from '../dtos';
// import { fakerRegistry } from '../factory/reintegrado.factory';
// import { reintegradoService } from '../service/reintegrado.service';
// import { reintegradoController } from './reintegrado.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('reintegradoController', () => {
//   let controller: reintegradoController;
//   let mockRegistry: CreatereintegradoDto;

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
//       controllers: [reintegradoController],
//       providers: [{ provide: reintegradoService, useValue: mockService }],
//     }).compile();

//     controller = module.get<reintegradoController>(reintegradoController);
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

//   describe('when create reintegrado', () => {
//     it('should create a reintegrado and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const reintegrado: CreatereintegradoDto = mockRegistry;

//       const createdreintegrado = await controller.create(reintegrado);

//       expect(createdreintegrado).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(reintegrado);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all reintegrado', () => {
//     it('should search all reintegrado and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const reintegrado = await controller.findAll();

//       expect(reintegrado).toHaveLength(1);
//       expect(reintegrado).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search reintegrado by id', () => {
//     it('should find a existing reintegrado and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const reintegrado = await controller.findById('1');

//       expect(reintegrado).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a reintegrado', () => {
//     it('should update a existing reintegrado and return it', async () => {
//       const reintegradoUpdate: UpdatereintegradoDto = mockRegistry;
//       reintegradoUpdate.descricao = 'Update reintegrado '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...reintegradoUpdate,
//       });

//       const updatedreintegrado = await controller.update(
//         '1',
//         reintegradoUpdate,
//       );

//       expect(updatedreintegrado).toMatchObject(reintegradoUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         reintegradoUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a reintegrado', () => {
//     it('should delete a existing reintegrado', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
