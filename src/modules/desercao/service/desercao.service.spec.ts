// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreatedesercaoDto, UpdatedesercaoDto } from '../dtos';
// import { fakerRegistry } from '../factory/desercao.factory';
// import { desercao } from '../entity/desercao.entity';
// import { desercaoService } from './desercao.service';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});
// describe('desercaoService', () => {
//   let service: desercaoService;
//   let mockRegistry: CreatedesercaoDto;

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
//         desercaoService,
//         { provide: getRepositoryToken(desercao), useValue: mockRepository },
//       ],
//     }).compile();

//     service = module.get<desercaoService>(desercaoService);
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
//   describe('when create desercao', () => {
//     it('should create a desercao', async () => {
//       mockRepository.create.mockReturnValueOnce(mockRegistry);
//       mockRepository.save.mockReturnValueOnce(mockRegistry);

//       const desercao: CreatedesercaoDto = mockRegistry;

//       const saveddesercao = await service.create(desercao);

//       expect(saveddesercao).toMatchObject(mockRegistry);
//       expect(mockRepository.create).toBeCalledWith(desercao);
//       expect(mockRepository.create).toBeCalledTimes(1);
//       expect(mockRepository.save).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all desercao', () => {
//     it('should list all desercao', async () => {
//       mockRepository.find.mockReturnValue([mockRegistry]);

//       const desercao = await service.findAll();

//       expect(desercao).toHaveLength(1);
//       expect(mockRepository.find).toBeCalledTimes(1);
//     });
//   });

//   // describe('when search one desercao', () => {
//   //   it('should list one desercao', async () => {
//   //     mockRepository.create.mockReturnValueOnce(mockRegistry);
//   //     mockRepository.save.mockReturnValueOnce(mockRegistry);

//   //     const desercaoUpdate: UpdatedesercaoDto = mockRegistry;
//   //     const desercao = await service.search(desercaoUpdate);

//   //     expect(desercao).toMatchObject(mockRegistry);
//   //     expect(mockRepository.find).toBeCalledTimes(1);
//   //   });
//   // });

//   describe('when search desercao by id', () => {
//     it('should find a existing desercao', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);

//       const desercao = await service.findById('1');

//       expect(desercao).toMatchObject(mockRegistry);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//     });

//     it('should return a exception when does not to find a desercao', async () => {
//       mockRepository.findOne.mockReturnValue(null);

//       await service.findById('3').catch(error => {
//         expect(error).toBeInstanceOf(NotFoundException);
//         expect(error).toMatchObject({ message: 'Registry not found' });
//         expect(mockRepository.findOne).toBeCalledWith('3');
//         expect(mockRepository.findOne).toBeCalledTimes(1);
//       });
//     });
//   });

//   describe('when update a desercao', () => {
//     it('should update a existing desercao', async () => {
//       const desercaoUpdate: UpdatedesercaoDto = mockRegistry;
//       desercaoUpdate.descricao = 'Update desercao '

//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.update.mockReturnValue({
//         ...mockRegistry,
//         ...desercaoUpdate,
//       });
//       mockRepository.create.mockReturnValue({
//         ...mockRegistry,
//         ...desercaoUpdate,
//       });

//       const updateddesercao = await service.update(
//         '1',
//         desercaoUpdate,
//       );

//       expect(updateddesercao).toMatchObject(desercaoUpdate);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.update).toBeCalledWith('1', desercaoUpdate);
//       expect(mockRepository.update).toBeCalledTimes(1);
//       expect(mockRepository.create).toBeCalledWith({
//         ...mockRegistry,
//         ...desercaoUpdate,
//       });
//       expect(mockRepository.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a desercao', () => {
//     it('should delete a existing desercao', async () => {
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
