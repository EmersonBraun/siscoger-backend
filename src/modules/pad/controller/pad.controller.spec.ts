// import { Test, TestingModule } from '@nestjs/testing';
// import { CreatepadDto, UpdatepadDto } from '../dtos';
// import { fakerRegistry } from '../factory/pad.factory';
// import { padService } from '../service/pad.service';
// import { padController } from './pad.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('padController', () => {
//   let controller: padController;
//   let mockRegistry: CreatepadDto;

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
//       controllers: [padController],
//       providers: [{ provide: padService, useValue: mockService }],
//     }).compile();

//     controller = module.get<padController>(padController);
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

//   describe('when create pad', () => {
//     it('should create a pad and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const pad: CreatepadDto = mockRegistry;

//       const createdpad = await controller.create(pad);

//       expect(createdpad).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(pad);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all pad', () => {
//     it('should search all pad and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const pad = await controller.findAll();

//       expect(pad).toHaveLength(1);
//       expect(pad).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search pad by id', () => {
//     it('should find a existing pad and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const pad = await controller.findById('1');

//       expect(pad).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a pad', () => {
//     it('should update a existing pad and return it', async () => {
//       const padUpdate: UpdatepadDto = mockRegistry;
//       padUpdate.descricao = 'Update pad '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...padUpdate,
//       });

//       const updatedpad = await controller.update(
//         '1',
//         padUpdate,
//       );

//       expect(updatedpad).toMatchObject(padUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         padUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a pad', () => {
//     it('should delete a existing pad', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
