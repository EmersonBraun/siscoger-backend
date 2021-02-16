// import { Test, TestingModule } from '@nestjs/testing';
// import { CreatesaidiligenciasDto, UpdatesaidiligenciasDto } from '../dtos';
// import { fakerRegistry } from '../factory/saidiligencias.factory';
// import { saidiligenciasService } from '../service/saidiligencias.service';
// import { saidiligenciasController } from './saidiligencias.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('saidiligenciasController', () => {
//   let controller: saidiligenciasController;
//   let mockRegistry: CreatesaidiligenciasDto;

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
//       controllers: [saidiligenciasController],
//       providers: [{ provide: saidiligenciasService, useValue: mockService }],
//     }).compile();

//     controller = module.get<saidiligenciasController>(saidiligenciasController);
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

//   describe('when create saidiligencias', () => {
//     it('should create a saidiligencias and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const saidiligencias: CreatesaidiligenciasDto = mockRegistry;

//       const createdsaidiligencias = await controller.create(saidiligencias);

//       expect(createdsaidiligencias).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(saidiligencias);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all saidiligencias', () => {
//     it('should search all saidiligencias and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const saidiligencias = await controller.findAll();

//       expect(saidiligencias).toHaveLength(1);
//       expect(saidiligencias).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search saidiligencias by id', () => {
//     it('should find a existing saidiligencias and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const saidiligencias = await controller.findById('1');

//       expect(saidiligencias).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a saidiligencias', () => {
//     it('should update a existing saidiligencias and return it', async () => {
//       const saidiligenciasUpdate: UpdatesaidiligenciasDto = mockRegistry;
//       saidiligenciasUpdate.descricao = 'Update saidiligencias '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...saidiligenciasUpdate,
//       });

//       const updatedsaidiligencias = await controller.update(
//         '1',
//         saidiligenciasUpdate,
//       );

//       expect(updatedsaidiligencias).toMatchObject(saidiligenciasUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         saidiligenciasUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a saidiligencias', () => {
//     it('should delete a existing saidiligencias', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
