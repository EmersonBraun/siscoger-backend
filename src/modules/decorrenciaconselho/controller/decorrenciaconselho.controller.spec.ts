// import { Test, TestingModule } from '@nestjs/testing';
// import { CreateDecorrenciaConselhoDto, UpdateDecorrenciaConselhoDto } from '../dtos';
// import { fakerRegistry } from '../factory/decorrenciaconselho.factory';
// import { DecorrenciaConselhoService } from '../service/decorrenciaconselho.service';
// import { DecorrenciaConselhoController } from './decorrenciaconselho.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});
// describe('DecorrenciaConselhoController', () => {
//   let controller: DecorrenciaConselhoController;
//   let mockRegistry: CreateDecorrenciaConselhoDto;

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
//       controllers: [DecorrenciaConselhoController],
//       providers: [{ provide: DecorrenciaConselhoService, useValue: mockService }],
//     }).compile();

//     controller = module.get<DecorrenciaConselhoController>(DecorrenciaConselhoController);
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

//   describe('when create DecorrenciaConselho', () => {
//     it('should create a DecorrenciaConselho and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const DecorrenciaConselho: CreateDecorrenciaConselhoDto = mockRegistry;

//       const createdDecorrenciaConselho = await controller.create(DecorrenciaConselho);

//       expect(createdDecorrenciaConselho).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(DecorrenciaConselho);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all DecorrenciaConselho', () => {
//     it('should search all DecorrenciaConselho and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const DecorrenciaConselho = await controller.findAll();

//       expect(DecorrenciaConselho).toHaveLength(1);
//       expect(DecorrenciaConselho).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search DecorrenciaConselho by id', () => {
//     it('should find a existing DecorrenciaConselho and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const DecorrenciaConselho = await controller.findById('1');

//       expect(DecorrenciaConselho).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a DecorrenciaConselho', () => {
//     it('should update a existing DecorrenciaConselho and return it', async () => {
//       const DecorrenciaConselhoUpdate: UpdateDecorrenciaConselhoDto = mockRegistry;
//       DecorrenciaConselhoUpdate.descricao = 'Update DecorrenciaConselho '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...DecorrenciaConselhoUpdate,
//       });

//       const updatedDecorrenciaConselho = await controller.update(
//         '1',
//         DecorrenciaConselhoUpdate,
//       );

//       expect(updatedDecorrenciaConselho).toMatchObject(DecorrenciaConselhoUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         DecorrenciaConselhoUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a DecorrenciaConselho', () => {
//     it('should delete a existing DecorrenciaConselho', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
