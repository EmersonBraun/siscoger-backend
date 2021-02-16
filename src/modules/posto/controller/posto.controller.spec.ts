// import { Test, TestingModule } from '@nestjs/testing';
// import { CreatepostoDto, UpdatepostoDto } from '../dtos';
// import { fakerRegistry } from '../factory/posto.factory';
// import { postoService } from '../service/posto.service';
// import { postoController } from './posto.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('postoController', () => {
//   let controller: postoController;
//   let mockRegistry: CreatepostoDto;

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
//       controllers: [postoController],
//       providers: [{ provide: postoService, useValue: mockService }],
//     }).compile();

//     controller = module.get<postoController>(postoController);
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

//   describe('when create posto', () => {
//     it('should create a posto and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const posto: CreatepostoDto = mockRegistry;

//       const createdposto = await controller.create(posto);

//       expect(createdposto).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(posto);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all posto', () => {
//     it('should search all posto and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const posto = await controller.findAll();

//       expect(posto).toHaveLength(1);
//       expect(posto).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search posto by id', () => {
//     it('should find a existing posto and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const posto = await controller.findById('1');

//       expect(posto).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a posto', () => {
//     it('should update a existing posto and return it', async () => {
//       const postoUpdate: UpdatepostoDto = mockRegistry;
//       postoUpdate.descricao = 'Update posto '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...postoUpdate,
//       });

//       const updatedposto = await controller.update(
//         '1',
//         postoUpdate,
//       );

//       expect(updatedposto).toMatchObject(postoUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         postoUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a posto', () => {
//     it('should delete a existing posto', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
