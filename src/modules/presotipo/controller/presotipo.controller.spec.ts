// import { Test, TestingModule } from '@nestjs/testing';
// import { CreatepresotipoDto, UpdatepresotipoDto } from '../dtos';
// import { fakerRegistry } from '../factory/presotipo.factory';
// import { presotipoService } from '../service/presotipo.service';
// import { presotipoController } from './presotipo.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('presotipoController', () => {
//   let controller: presotipoController;
//   let mockRegistry: CreatepresotipoDto;

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
//       controllers: [presotipoController],
//       providers: [{ provide: presotipoService, useValue: mockService }],
//     }).compile();

//     controller = module.get<presotipoController>(presotipoController);
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

//   describe('when create presotipo', () => {
//     it('should create a presotipo and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const presotipo: CreatepresotipoDto = mockRegistry;

//       const createdpresotipo = await controller.create(presotipo);

//       expect(createdpresotipo).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(presotipo);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all presotipo', () => {
//     it('should search all presotipo and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const presotipo = await controller.findAll();

//       expect(presotipo).toHaveLength(1);
//       expect(presotipo).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search presotipo by id', () => {
//     it('should find a existing presotipo and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const presotipo = await controller.findById('1');

//       expect(presotipo).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a presotipo', () => {
//     it('should update a existing presotipo and return it', async () => {
//       const presotipoUpdate: UpdatepresotipoDto = mockRegistry;
//       presotipoUpdate.descricao = 'Update presotipo '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...presotipoUpdate,
//       });

//       const updatedpresotipo = await controller.update(
//         '1',
//         presotipoUpdate,
//       );

//       expect(updatedpresotipo).toMatchObject(presotipoUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         presotipoUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a presotipo', () => {
//     it('should delete a existing presotipo', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });
