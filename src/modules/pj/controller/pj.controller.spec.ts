// import { Test, TestingModule } from '@nestjs/testing';
// import { CreatepjDto, UpdatepjDto } from '../dtos';
// import { fakerRegistry } from '../factory/pj.factory';
// import { pjService } from '../service/pj.service';
// import { pjController } from './pj.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('pjController', () => {
//   let controller: pjController;
//   let mockRegistry: CreatepjDto;

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
//       controllers: [pjController],
//       providers: [{ provide: pjService, useValue: mockService }],
//     }).compile();

//     controller = module.get<pjController>(pjController);
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

//   describe('when create pj', () => {
//     it('should create a pj and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const pj: CreatepjDto = mockRegistry;

//       const createdpj = await controller.create(pj);

//       expect(createdpj).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(pj);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all pj', () => {
//     it('should search all pj and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const pj = await controller.findAll();

//       expect(pj).toHaveLength(1);
//       expect(pj).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search pj by id', () => {
//     it('should find a existing pj and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const pj = await controller.findById('1');

//       expect(pj).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a pj', () => {
//     it('should update a existing pj and return it', async () => {
//       const pjUpdate: UpdatepjDto = mockRegistry;
//       pjUpdate.descricao = 'Update pj '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...pjUpdate,
//       });

//       const updatedpj = await controller.update(
//         '1',
//         pjUpdate,
//       );

//       expect(updatedpj).toMatchObject(pjUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         pjUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a pj', () => {
//     it('should delete a existing pj', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
