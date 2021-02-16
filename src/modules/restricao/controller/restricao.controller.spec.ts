// import { Test, TestingModule } from '@nestjs/testing';
// import { CreaterestricaoDto, UpdaterestricaoDto } from '../dtos';
// import { fakerRegistry } from '../factory/restricao.factory';
// import { restricaoService } from '../service/restricao.service';
// import { restricaoController } from './restricao.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('restricaoController', () => {
//   let controller: restricaoController;
//   let mockRegistry: CreaterestricaoDto;

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
//       controllers: [restricaoController],
//       providers: [{ provide: restricaoService, useValue: mockService }],
//     }).compile();

//     controller = module.get<restricaoController>(restricaoController);
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

//   describe('when create restricao', () => {
//     it('should create a restricao and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const restricao: CreaterestricaoDto = mockRegistry;

//       const createdrestricao = await controller.create(restricao);

//       expect(createdrestricao).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(restricao);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all restricao', () => {
//     it('should search all restricao and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const restricao = await controller.findAll();

//       expect(restricao).toHaveLength(1);
//       expect(restricao).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search restricao by id', () => {
//     it('should find a existing restricao and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const restricao = await controller.findById('1');

//       expect(restricao).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a restricao', () => {
//     it('should update a existing restricao and return it', async () => {
//       const restricaoUpdate: UpdaterestricaoDto = mockRegistry;
//       restricaoUpdate.descricao = 'Update restricao '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...restricaoUpdate,
//       });

//       const updatedrestricao = await controller.update(
//         '1',
//         restricaoUpdate,
//       );

//       expect(updatedrestricao).toMatchObject(restricaoUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         restricaoUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a restricao', () => {
//     it('should delete a existing restricao', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
