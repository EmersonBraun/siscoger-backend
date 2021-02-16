// import { Test, TestingModule } from '@nestjs/testing';
// import { CreateisoDto, UpdateisoDto } from '../dtos';
// import { fakerRegistry } from '../factory/iso.factory';
// import { isoService } from '../service/iso.service';
// import { isoController } from './iso.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('isoController', () => {
//   let controller: isoController;
//   let mockRegistry: CreateisoDto;

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
//       controllers: [isoController],
//       providers: [{ provide: isoService, useValue: mockService }],
//     }).compile();

//     controller = module.get<isoController>(isoController);
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

//   describe('when create iso', () => {
//     it('should create a iso and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const iso: CreateisoDto = mockRegistry;

//       const creatediso = await controller.create(iso);

//       expect(creatediso).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(iso);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all iso', () => {
//     it('should search all iso and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const iso = await controller.findAll();

//       expect(iso).toHaveLength(1);
//       expect(iso).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search iso by id', () => {
//     it('should find a existing iso and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const iso = await controller.findById('1');

//       expect(iso).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a iso', () => {
//     it('should update a existing iso and return it', async () => {
//       const isoUpdate: UpdateisoDto = mockRegistry;
//       isoUpdate.descricao = 'Update iso '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...isoUpdate,
//       });

//       const updatediso = await controller.update(
//         '1',
//         isoUpdate,
//       );

//       expect(updatediso).toMatchObject(isoUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         isoUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a iso', () => {
//     it('should delete a existing iso', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
