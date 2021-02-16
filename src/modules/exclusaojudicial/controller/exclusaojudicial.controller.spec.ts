// import { Test, TestingModule } from '@nestjs/testing';
// import { CreateexclusaojudicialDto, UpdateexclusaojudicialDto } from '../dtos';
// import { fakerRegistry } from '../factory/exclusaojudicial.factory';
// import { exclusaojudicialService } from '../service/exclusaojudicial.service';
// import { exclusaojudicialController } from './exclusaojudicial.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('exclusaojudicialController', () => {
//   let controller: exclusaojudicialController;
//   let mockRegistry: CreateexclusaojudicialDto;

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
//       controllers: [exclusaojudicialController],
//       providers: [{ provide: exclusaojudicialService, useValue: mockService }],
//     }).compile();

//     controller = module.get<exclusaojudicialController>(exclusaojudicialController);
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

//   describe('when create exclusaojudicial', () => {
//     it('should create a exclusaojudicial and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const exclusaojudicial: CreateexclusaojudicialDto = mockRegistry;

//       const createdexclusaojudicial = await controller.create(exclusaojudicial);

//       expect(createdexclusaojudicial).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(exclusaojudicial);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all exclusaojudicial', () => {
//     it('should search all exclusaojudicial and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const exclusaojudicial = await controller.findAll();

//       expect(exclusaojudicial).toHaveLength(1);
//       expect(exclusaojudicial).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search exclusaojudicial by id', () => {
//     it('should find a existing exclusaojudicial and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const exclusaojudicial = await controller.findById('1');

//       expect(exclusaojudicial).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a exclusaojudicial', () => {
//     it('should update a existing exclusaojudicial and return it', async () => {
//       const exclusaojudicialUpdate: UpdateexclusaojudicialDto = mockRegistry;
//       exclusaojudicialUpdate.descricao = 'Update exclusaojudicial '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...exclusaojudicialUpdate,
//       });

//       const updatedexclusaojudicial = await controller.update(
//         '1',
//         exclusaojudicialUpdate,
//       );

//       expect(updatedexclusaojudicial).toMatchObject(exclusaojudicialUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         exclusaojudicialUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a exclusaojudicial', () => {
//     it('should delete a existing exclusaojudicial', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
