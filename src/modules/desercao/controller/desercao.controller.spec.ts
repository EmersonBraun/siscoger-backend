// import { Test, TestingModule } from '@nestjs/testing';
// import { CreatedesercaoDto, UpdatedesercaoDto } from '../dtos';
// import { fakerRegistry } from '../factory/desercao.factory';
// import { desercaoService } from '../service/desercao.service';
// import { desercaoController } from './desercao.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('desercaoController', () => {
//   let controller: desercaoController;
//   let mockRegistry: CreatedesercaoDto;

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
//       controllers: [desercaoController],
//       providers: [{ provide: desercaoService, useValue: mockService }],
//     }).compile();

//     controller = module.get<desercaoController>(desercaoController);
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

//   describe('when create desercao', () => {
//     it('should create a desercao and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const desercao: CreatedesercaoDto = mockRegistry;

//       const createddesercao = await controller.create(desercao);

//       expect(createddesercao).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(desercao);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all desercao', () => {
//     it('should search all desercao and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const desercao = await controller.findAll();

//       expect(desercao).toHaveLength(1);
//       expect(desercao).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search desercao by id', () => {
//     it('should find a existing desercao and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const desercao = await controller.findById('1');

//       expect(desercao).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a desercao', () => {
//     it('should update a existing desercao and return it', async () => {
//       const desercaoUpdate: UpdatedesercaoDto = mockRegistry;
//       desercaoUpdate.descricao = 'Update desercao '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...desercaoUpdate,
//       });

//       const updateddesercao = await controller.update(
//         '1',
//         desercaoUpdate,
//       );

//       expect(updateddesercao).toMatchObject(desercaoUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         desercaoUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a desercao', () => {
//     it('should delete a existing desercao', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
