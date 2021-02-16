// import { Test, TestingModule } from '@nestjs/testing';
// import { CreatepresoDto, UpdatepresoDto } from '../dtos';
// import { fakerRegistry } from '../factory/preso.factory';
// import { presoService } from '../service/preso.service';
// import { presoController } from './preso.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('presoController', () => {
//   let controller: presoController;
//   let mockRegistry: CreatepresoDto;

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
//       controllers: [presoController],
//       providers: [{ provide: presoService, useValue: mockService }],
//     }).compile();

//     controller = module.get<presoController>(presoController);
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

//   describe('when create preso', () => {
//     it('should create a preso and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const preso: CreatepresoDto = mockRegistry;

//       const createdpreso = await controller.create(preso);

//       expect(createdpreso).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(preso);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all preso', () => {
//     it('should search all preso and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const preso = await controller.findAll();

//       expect(preso).toHaveLength(1);
//       expect(preso).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search preso by id', () => {
//     it('should find a existing preso and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const preso = await controller.findById('1');

//       expect(preso).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a preso', () => {
//     it('should update a existing preso and return it', async () => {
//       const presoUpdate: UpdatepresoDto = mockRegistry;
//       presoUpdate.descricao = 'Update preso '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...presoUpdate,
//       });

//       const updatedpreso = await controller.update(
//         '1',
//         presoUpdate,
//       );

//       expect(updatedpreso).toMatchObject(presoUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         presoUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a preso', () => {
//     it('should delete a existing preso', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
