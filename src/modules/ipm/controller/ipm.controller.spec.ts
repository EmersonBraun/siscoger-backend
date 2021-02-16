// import { Test, TestingModule } from '@nestjs/testing';
// import { CreateipmDto, UpdateipmDto } from '../dtos';
// import { fakerRegistry } from '../factory/ipm.factory';
// import { ipmService } from '../service/ipm.service';
// import { ipmController } from './ipm.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('ipmController', () => {
//   let controller: ipmController;
//   let mockRegistry: CreateipmDto;

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
//       controllers: [ipmController],
//       providers: [{ provide: ipmService, useValue: mockService }],
//     }).compile();

//     controller = module.get<ipmController>(ipmController);
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

//   describe('when create ipm', () => {
//     it('should create a ipm and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const ipm: CreateipmDto = mockRegistry;

//       const createdipm = await controller.create(ipm);

//       expect(createdipm).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(ipm);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all ipm', () => {
//     it('should search all ipm and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const ipm = await controller.findAll();

//       expect(ipm).toHaveLength(1);
//       expect(ipm).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search ipm by id', () => {
//     it('should find a existing ipm and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const ipm = await controller.findById('1');

//       expect(ipm).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a ipm', () => {
//     it('should update a existing ipm and return it', async () => {
//       const ipmUpdate: UpdateipmDto = mockRegistry;
//       ipmUpdate.descricao = 'Update ipm '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...ipmUpdate,
//       });

//       const updatedipm = await controller.update(
//         '1',
//         ipmUpdate,
//       );

//       expect(updatedipm).toMatchObject(ipmUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         ipmUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a ipm', () => {
//     it('should delete a existing ipm', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
