// import { Test, TestingModule } from '@nestjs/testing';
// import { CreatesaiDto, UpdatesaiDto } from '../dtos';
// import { fakerRegistry } from '../factory/sai.factory';
// import { saiService } from '../service/sai.service';
// import { saiController } from './sai.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('saiController', () => {
//   let controller: saiController;
//   let mockRegistry: CreatesaiDto;

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
//       controllers: [saiController],
//       providers: [{ provide: saiService, useValue: mockService }],
//     }).compile();

//     controller = module.get<saiController>(saiController);
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

//   describe('when create sai', () => {
//     it('should create a sai and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const sai: CreatesaiDto = mockRegistry;

//       const createdsai = await controller.create(sai);

//       expect(createdsai).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(sai);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all sai', () => {
//     it('should search all sai and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const sai = await controller.findAll();

//       expect(sai).toHaveLength(1);
//       expect(sai).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search sai by id', () => {
//     it('should find a existing sai and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const sai = await controller.findById('1');

//       expect(sai).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a sai', () => {
//     it('should update a existing sai and return it', async () => {
//       const saiUpdate: UpdatesaiDto = mockRegistry;
//       saiUpdate.descricao = 'Update sai '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...saiUpdate,
//       });

//       const updatedsai = await controller.update(
//         '1',
//         saiUpdate,
//       );

//       expect(updatedsai).toMatchObject(saiUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         saiUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a sai', () => {
//     it('should delete a existing sai', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
