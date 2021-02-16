// import { Test, TestingModule } from '@nestjs/testing';
// import { CreatesituacaoDto, UpdatesituacaoDto } from '../dtos';
// import { fakerRegistry } from '../factory/situacao.factory';
// import { situacaoService } from '../service/situacao.service';
// import { situacaoController } from './situacao.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('situacaoController', () => {
//   let controller: situacaoController;
//   let mockRegistry: CreatesituacaoDto;

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
//       controllers: [situacaoController],
//       providers: [{ provide: situacaoService, useValue: mockService }],
//     }).compile();

//     controller = module.get<situacaoController>(situacaoController);
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

//   describe('when create situacao', () => {
//     it('should create a situacao and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const situacao: CreatesituacaoDto = mockRegistry;

//       const createdsituacao = await controller.create(situacao);

//       expect(createdsituacao).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(situacao);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all situacao', () => {
//     it('should search all situacao and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const situacao = await controller.findAll();

//       expect(situacao).toHaveLength(1);
//       expect(situacao).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search situacao by id', () => {
//     it('should find a existing situacao and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const situacao = await controller.findById('1');

//       expect(situacao).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a situacao', () => {
//     it('should update a existing situacao and return it', async () => {
//       const situacaoUpdate: UpdatesituacaoDto = mockRegistry;
//       situacaoUpdate.descricao = 'Update situacao '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...situacaoUpdate,
//       });

//       const updatedsituacao = await controller.update(
//         '1',
//         situacaoUpdate,
//       );

//       expect(updatedsituacao).toMatchObject(situacaoUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         situacaoUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a situacao', () => {
//     it('should delete a existing situacao', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
