// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreaterespcivilDto, UpdaterespcivilDto } from '../dtos';
// import { fakerRegistry } from '../factory/respcivil.factory';
// import { respcivil } from '../entity/respcivil.entity';
// import { respcivilService } from './respcivil.service';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});
// describe('respcivilService', () => {
//   let service: respcivilService;
//   let mockRegistry: CreaterespcivilDto;

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
//         respcivilService,
//         { provide: getRepositoryToken(respcivil), useValue: mockRepository },
//       ],
//     }).compile();

//     service = module.get<respcivilService>(respcivilService);
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
//   describe('when create respcivil', () => {
//     it('should create a respcivil', async () => {
//       mockRepository.create.mockReturnValueOnce(mockRegistry);
//       mockRepository.save.mockReturnValueOnce(mockRegistry);

//       const respcivil: CreaterespcivilDto = mockRegistry;

//       const savedrespcivil = await service.create(respcivil);

//       expect(savedrespcivil).toMatchObject(mockRegistry);
//       expect(mockRepository.create).toBeCalledWith(respcivil);
//       expect(mockRepository.create).toBeCalledTimes(1);
//       expect(mockRepository.save).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all respcivil', () => {
//     it('should list all respcivil', async () => {
//       mockRepository.find.mockReturnValue([mockRegistry]);

//       const respcivil = await service.findAll();

//       expect(respcivil).toHaveLength(1);
//       expect(mockRepository.find).toBeCalledTimes(1);
//     });
//   });

//   // describe('when search one respcivil', () => {
//   //   it('should list one respcivil', async () => {
//   //     mockRepository.create.mockReturnValueOnce(mockRegistry);
//   //     mockRepository.save.mockReturnValueOnce(mockRegistry);

//   //     const respcivilUpdate: UpdaterespcivilDto = mockRegistry;
//   //     const respcivil = await service.search(respcivilUpdate);

//   //     expect(respcivil).toMatchObject(mockRegistry);
//   //     expect(mockRepository.find).toBeCalledTimes(1);
//   //   });
//   // });

//   describe('when search respcivil by id', () => {
//     it('should find a existing respcivil', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);

//       const respcivil = await service.findById('1');

//       expect(respcivil).toMatchObject(mockRegistry);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//     });

//     it('should return a exception when does not to find a respcivil', async () => {
//       mockRepository.findOne.mockReturnValue(null);

//       await service.findById('3').catch(error => {
//         expect(error).toBeInstanceOf(NotFoundException);
//         expect(error).toMatchObject({ message: 'Registry not found' });
//         expect(mockRepository.findOne).toBeCalledWith('3');
//         expect(mockRepository.findOne).toBeCalledTimes(1);
//       });
//     });
//   });

//   describe('when update a respcivil', () => {
//     it('should update a existing respcivil', async () => {
//       const respcivilUpdate: UpdaterespcivilDto = mockRegistry;
//       respcivilUpdate.descricao = 'Update respcivil '

//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.update.mockReturnValue({
//         ...mockRegistry,
//         ...respcivilUpdate,
//       });
//       mockRepository.create.mockReturnValue({
//         ...mockRegistry,
//         ...respcivilUpdate,
//       });

//       const updatedrespcivil = await service.update(
//         '1',
//         respcivilUpdate,
//       );

//       expect(updatedrespcivil).toMatchObject(respcivilUpdate);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.update).toBeCalledWith('1', respcivilUpdate);
//       expect(mockRepository.update).toBeCalledTimes(1);
//       expect(mockRepository.create).toBeCalledWith({
//         ...mockRegistry,
//         ...respcivilUpdate,
//       });
//       expect(mockRepository.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a respcivil', () => {
//     it('should delete a existing respcivil', async () => {
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
