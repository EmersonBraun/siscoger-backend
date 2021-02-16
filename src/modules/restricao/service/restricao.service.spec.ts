// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreaterestricaoDto, UpdaterestricaoDto } from '../dtos';
// import { fakerRegistry } from '../factory/restricao.factory';
// import { restricao } from '../entity/restricao.entity';
// import { restricaoService } from './restricao.service';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});
// describe('restricaoService', () => {
//   let service: restricaoService;
//   let mockRegistry: CreaterestricaoDto;

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
//         restricaoService,
//         { provide: getRepositoryToken(restricao), useValue: mockRepository },
//       ],
//     }).compile();

//     service = module.get<restricaoService>(restricaoService);
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
//   describe('when create restricao', () => {
//     it('should create a restricao', async () => {
//       mockRepository.create.mockReturnValueOnce(mockRegistry);
//       mockRepository.save.mockReturnValueOnce(mockRegistry);

//       const restricao: CreaterestricaoDto = mockRegistry;

//       const savedrestricao = await service.create(restricao);

//       expect(savedrestricao).toMatchObject(mockRegistry);
//       expect(mockRepository.create).toBeCalledWith(restricao);
//       expect(mockRepository.create).toBeCalledTimes(1);
//       expect(mockRepository.save).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all restricao', () => {
//     it('should list all restricao', async () => {
//       mockRepository.find.mockReturnValue([mockRegistry]);

//       const restricao = await service.findAll();

//       expect(restricao).toHaveLength(1);
//       expect(mockRepository.find).toBeCalledTimes(1);
//     });
//   });

//   // describe('when search one restricao', () => {
//   //   it('should list one restricao', async () => {
//   //     mockRepository.create.mockReturnValueOnce(mockRegistry);
//   //     mockRepository.save.mockReturnValueOnce(mockRegistry);

//   //     const restricaoUpdate: UpdaterestricaoDto = mockRegistry;
//   //     const restricao = await service.search(restricaoUpdate);

//   //     expect(restricao).toMatchObject(mockRegistry);
//   //     expect(mockRepository.find).toBeCalledTimes(1);
//   //   });
//   // });

//   describe('when search restricao by id', () => {
//     it('should find a existing restricao', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);

//       const restricao = await service.findById('1');

//       expect(restricao).toMatchObject(mockRegistry);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//     });

//     it('should return a exception when does not to find a restricao', async () => {
//       mockRepository.findOne.mockReturnValue(null);

//       await service.findById('3').catch(error => {
//         expect(error).toBeInstanceOf(NotFoundException);
//         expect(error).toMatchObject({ message: 'Registry not found' });
//         expect(mockRepository.findOne).toBeCalledWith('3');
//         expect(mockRepository.findOne).toBeCalledTimes(1);
//       });
//     });
//   });

//   describe('when update a restricao', () => {
//     it('should update a existing restricao', async () => {
//       const restricaoUpdate: UpdaterestricaoDto = mockRegistry;
//       restricaoUpdate.descricao = 'Update restricao '

//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.update.mockReturnValue({
//         ...mockRegistry,
//         ...restricaoUpdate,
//       });
//       mockRepository.create.mockReturnValue({
//         ...mockRegistry,
//         ...restricaoUpdate,
//       });

//       const updatedrestricao = await service.update(
//         '1',
//         restricaoUpdate,
//       );

//       expect(updatedrestricao).toMatchObject(restricaoUpdate);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.update).toBeCalledWith('1', restricaoUpdate);
//       expect(mockRepository.update).toBeCalledTimes(1);
//       expect(mockRepository.create).toBeCalledWith({
//         ...mockRegistry,
//         ...restricaoUpdate,
//       });
//       expect(mockRepository.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a restricao', () => {
//     it('should delete a existing restricao', async () => {
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
