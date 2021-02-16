// import { Test, TestingModule } from '@nestjs/testing';
// import { CreaterespcivilDto, UpdaterespcivilDto } from '../dtos';
// import { fakerRegistry } from '../factory/respcivil.factory';
// import { respcivilService } from '../service/respcivil.service';
// import { respcivilController } from './respcivil.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('respcivilController', () => {
//   let controller: respcivilController;
//   let mockRegistry: CreaterespcivilDto;

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
//       controllers: [respcivilController],
//       providers: [{ provide: respcivilService, useValue: mockService }],
//     }).compile();

//     controller = module.get<respcivilController>(respcivilController);
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

//   describe('when create respcivil', () => {
//     it('should create a respcivil and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const respcivil: CreaterespcivilDto = mockRegistry;

//       const createdrespcivil = await controller.create(respcivil);

//       expect(createdrespcivil).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(respcivil);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all respcivil', () => {
//     it('should search all respcivil and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const respcivil = await controller.findAll();

//       expect(respcivil).toHaveLength(1);
//       expect(respcivil).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search respcivil by id', () => {
//     it('should find a existing respcivil and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const respcivil = await controller.findById('1');

//       expect(respcivil).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a respcivil', () => {
//     it('should update a existing respcivil and return it', async () => {
//       const respcivilUpdate: UpdaterespcivilDto = mockRegistry;
//       respcivilUpdate.descricao = 'Update respcivil '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...respcivilUpdate,
//       });

//       const updatedrespcivil = await controller.update(
//         '1',
//         respcivilUpdate,
//       );

//       expect(updatedrespcivil).toMatchObject(respcivilUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         respcivilUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a respcivil', () => {
//     it('should delete a existing respcivil', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
