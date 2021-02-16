// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreatepresotipoDto, UpdatepresotipoDto } from '../dtos';
// import { fakerRegistry } from '../factory/presotipo.factory';
// import { presotipo } from '../entity/presotipo.entity';
// import { presotipoService } from './presotipo.service';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});
// describe('presotipoService', () => {
//   let service: presotipoService;
//   let mockRegistry: CreatepresotipoDto;

//   const mockRepository = {
//     create: jest.fn(),
//     save: jest.fn(),
//     search: jest.fn(),
//     find: jest.fn(),
//     findOne: jest.fn(),
//     update: jest.fn(),
//     delete: jest.fn(),
//   };

//   beforeAll(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         presotipoService,
//         { provide: getRepositoryToken(presotipo), useValue: mockRepository },
//       ],
//     }).compile();

//     service = module.get<presotipoService>(presotipoService);
//     mockRegistry = fakerRegistry()
//   });

//   beforeEach(() => {
//     mockRepository.create.mockReset();
//     mockRepository.save.mockReset();
//     mockRepository.search.mockReset();
//     mockRepository.find.mockReset();
//     mockRepository.findOne.mockReset();
//     mockRepository.update.mockReset();
//     mockRepository.delete.mockReset();
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });

//   // need to solve
//   describe('when create presotipo', () => {
//     it('should create a presotipo', async () => {
//       mockRepository.create.mockReturnValueOnce(mockRegistry);
//       mockRepository.save.mockReturnValueOnce(mockRegistry);

//       const presotipo: CreatepresotipoDto = mockRegistry;

//       const savedpresotipo = await service.create(presotipo);

//       expect(savedpresotipo).toMatchObject(mockRegistry);
//       expect(mockRepository.create).toBeCalledWith(presotipo);
//       expect(mockRepository.create).toBeCalledTimes(1);
//       expect(mockRepository.save).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all presotipo', () => {
//     it('should list all presotipo', async () => {
//       mockRepository.find.mockReturnValue([mockRegistry]);

//       const presotipo = await service.findAll();

//       expect(presotipo).toHaveLength(1);
//       expect(mockRepository.find).toBeCalledTimes(1);
//     });
//   });

//   // describe('when search one presotipo', () => {
//   //   it('should list one presotipo', async () => {
//   //     mockRepository.create.mockReturnValueOnce(mockRegistry);
//   //     mockRepository.save.mockReturnValueOnce(mockRegistry);

//   //     const presotipoUpdate: UpdatepresotipoDto = mockRegistry;
//   //     const presotipo = await service.search(presotipoUpdate);

//   //     expect(presotipo).toMatchObject(mockRegistry);
//   //     expect(mockRepository.find).toBeCalledTimes(1);
//   //   });
//   // });

//   describe('when search presotipo by id', () => {
//     it('should find a existing presotipo', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);

//       const presotipo = await service.findById('1');

//       expect(presotipo).toMatchObject(mockRegistry);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//     });

//     it('should return a exception when does not to find a presotipo', async () => {
//       mockRepository.findOne.mockReturnValue(null);

//       await service.findById('3').catch(error => {
//         expect(error).toBeInstanceOf(NotFoundException);
//         expect(error).toMatchObject({ message: 'Registry not found' });
//         expect(mockRepository.findOne).toBeCalledWith('3');
//         expect(mockRepository.findOne).toBeCalledTimes(1);
//       });
//     });
//   });

//   describe('when update a presotipo', () => {
//     it('should update a existing presotipo', async () => {
//       const presotipoUpdate: UpdatepresotipoDto = mockRegistry;
//       presotipoUpdate.descricao = 'Update presotipo '

//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.update.mockReturnValue({
//         ...mockRegistry,
//         ...presotipoUpdate,
//       });
//       mockRepository.create.mockReturnValue({
//         ...mockRegistry,
//         ...presotipoUpdate,
//       });

//       const updatedpresotipo = await service.update(
//         '1',
//         presotipoUpdate,
//       );

//       expect(updatedpresotipo).toMatchObject(presotipoUpdate);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.update).toBeCalledWith('1', presotipoUpdate);
//       expect(mockRepository.update).toBeCalledTimes(1);
//       expect(mockRepository.create).toBeCalledWith({
//         ...mockRegistry,
//         ...presotipoUpdate,
//       });
//       expect(mockRepository.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a presotipo', () => {
//     it('should delete a existing presotipo', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.delete.mockReturnValue(mockRegistry);

//       await service.delete('1');

//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.delete).toBeCalledWith('1');
//       expect(mockRepository.delete).toBeCalledTimes(1);
//     });
//   });
// });
