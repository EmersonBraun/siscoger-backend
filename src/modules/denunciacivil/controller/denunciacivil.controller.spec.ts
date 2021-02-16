// import { Test, TestingModule } from '@nestjs/testing';
// import { CreatedenunciacivilDto, UpdatedenunciacivilDto } from '../dtos';
// import { fakerRegistry } from '../factory/denunciacivil.factory';
// import { denunciacivilService } from '../service/denunciacivil.service';
// import { denunciacivilController } from './denunciacivil.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('denunciacivilController', () => {
//   let controller: denunciacivilController;
//   let mockRegistry: CreatedenunciacivilDto;

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
//       controllers: [denunciacivilController],
//       providers: [{ provide: denunciacivilService, useValue: mockService }],
//     }).compile();

//     controller = module.get<denunciacivilController>(denunciacivilController);
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

//   describe('when create denunciacivil', () => {
//     it('should create a denunciacivil and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const denunciacivil: CreatedenunciacivilDto = mockRegistry;

//       const createddenunciacivil = await controller.create(denunciacivil);

//       expect(createddenunciacivil).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(denunciacivil);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all denunciacivil', () => {
//     it('should search all denunciacivil and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const denunciacivil = await controller.findAll();

//       expect(denunciacivil).toHaveLength(1);
//       expect(denunciacivil).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search denunciacivil by id', () => {
//     it('should find a existing denunciacivil and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const denunciacivil = await controller.findById('1');

//       expect(denunciacivil).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a denunciacivil', () => {
//     it('should update a existing denunciacivil and return it', async () => {
//       const denunciacivilUpdate: UpdatedenunciacivilDto = mockRegistry;
//       denunciacivilUpdate.descricao = 'Update denunciacivil '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...denunciacivilUpdate,
//       });

//       const updateddenunciacivil = await controller.update(
//         '1',
//         denunciacivilUpdate,
//       );

//       expect(updateddenunciacivil).toMatchObject(denunciacivilUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         denunciacivilUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a denunciacivil', () => {
//     it('should delete a existing denunciacivil', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
