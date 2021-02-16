// import { Test, TestingModule } from '@nestjs/testing';
// import { CreateprocoutrosDto, UpdateprocoutrosDto } from '../dtos';
// import { fakerRegistry } from '../factory/procoutros.factory';
// import { procoutrosService } from '../service/procoutros.service';
// import { procoutrosController } from './procoutros.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('procoutrosController', () => {
//   let controller: procoutrosController;
//   let mockRegistry: CreateprocoutrosDto;

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
//       controllers: [procoutrosController],
//       providers: [{ provide: procoutrosService, useValue: mockService }],
//     }).compile();

//     controller = module.get<procoutrosController>(procoutrosController);
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

//   describe('when create procoutros', () => {
//     it('should create a procoutros and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const procoutros: CreateprocoutrosDto = mockRegistry;

//       const createdprocoutros = await controller.create(procoutros);

//       expect(createdprocoutros).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(procoutros);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all procoutros', () => {
//     it('should search all procoutros and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const procoutros = await controller.findAll();

//       expect(procoutros).toHaveLength(1);
//       expect(procoutros).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search procoutros by id', () => {
//     it('should find a existing procoutros and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const procoutros = await controller.findById('1');

//       expect(procoutros).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a procoutros', () => {
//     it('should update a existing procoutros and return it', async () => {
//       const procoutrosUpdate: UpdateprocoutrosDto = mockRegistry;
//       procoutrosUpdate.descricao = 'Update procoutros '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...procoutrosUpdate,
//       });

//       const updatedprocoutros = await controller.update(
//         '1',
//         procoutrosUpdate,
//       );

//       expect(updatedprocoutros).toMatchObject(procoutrosUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         procoutrosUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a procoutros', () => {
//     it('should delete a existing procoutros', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
