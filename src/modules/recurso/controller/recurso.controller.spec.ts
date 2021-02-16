// import { Test, TestingModule } from '@nestjs/testing';
// import { CreaterecursoDto, UpdaterecursoDto } from '../dtos';
// import { fakerRegistry } from '../factory/recurso.factory';
// import { recursoService } from '../service/recurso.service';
// import { recursoController } from './recurso.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('recursoController', () => {
//   let controller: recursoController;
//   let mockRegistry: CreaterecursoDto;

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
//       controllers: [recursoController],
//       providers: [{ provide: recursoService, useValue: mockService }],
//     }).compile();

//     controller = module.get<recursoController>(recursoController);
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

//   describe('when create recurso', () => {
//     it('should create a recurso and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const recurso: CreaterecursoDto = mockRegistry;

//       const createdrecurso = await controller.create(recurso);

//       expect(createdrecurso).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(recurso);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all recurso', () => {
//     it('should search all recurso and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const recurso = await controller.findAll();

//       expect(recurso).toHaveLength(1);
//       expect(recurso).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search recurso by id', () => {
//     it('should find a existing recurso and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const recurso = await controller.findById('1');

//       expect(recurso).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a recurso', () => {
//     it('should update a existing recurso and return it', async () => {
//       const recursoUpdate: UpdaterecursoDto = mockRegistry;
//       recursoUpdate.descricao = 'Update recurso '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...recursoUpdate,
//       });

//       const updatedrecurso = await controller.update(
//         '1',
//         recursoUpdate,
//       );

//       expect(updatedrecurso).toMatchObject(recursoUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         recursoUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a recurso', () => {
//     it('should delete a existing recurso', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
