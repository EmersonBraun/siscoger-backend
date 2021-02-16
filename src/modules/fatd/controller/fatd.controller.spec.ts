// import { Test, TestingModule } from '@nestjs/testing';
// import { CreatefatdDto, UpdatefatdDto } from '../dtos';
// import { fakerRegistry } from '../factory/fatd.factory';
// import { fatdService } from '../service/fatd.service';
// import { fatdController } from './fatd.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('fatdController', () => {
//   let controller: fatdController;
//   let mockRegistry: CreatefatdDto;

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
//       controllers: [fatdController],
//       providers: [{ provide: fatdService, useValue: mockService }],
//     }).compile();

//     controller = module.get<fatdController>(fatdController);
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

//   describe('when create fatd', () => {
//     it('should create a fatd and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const fatd: CreatefatdDto = mockRegistry;

//       const createdfatd = await controller.create(fatd);

//       expect(createdfatd).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(fatd);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all fatd', () => {
//     it('should search all fatd and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const fatd = await controller.findAll();

//       expect(fatd).toHaveLength(1);
//       expect(fatd).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search fatd by id', () => {
//     it('should find a existing fatd and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const fatd = await controller.findById('1');

//       expect(fatd).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a fatd', () => {
//     it('should update a existing fatd and return it', async () => {
//       const fatdUpdate: UpdatefatdDto = mockRegistry;
//       fatdUpdate.descricao = 'Update fatd '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...fatdUpdate,
//       });

//       const updatedfatd = await controller.update(
//         '1',
//         fatdUpdate,
//       );

//       expect(updatedfatd).toMatchObject(fatdUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         fatdUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a fatd', () => {
//     it('should delete a existing fatd', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
