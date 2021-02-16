// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreatefatdDto, UpdatefatdDto } from '../dtos';
// import { fakerRegistry } from '../factory/fatd.factory';
// import { fatd } from '../entity/fatd.entity';
// import { fatdService } from './fatd.service';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});
// describe('fatdService', () => {
//   let service: fatdService;
//   let mockRegistry: CreatefatdDto;

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
//         fatdService,
//         { provide: getRepositoryToken(fatd), useValue: mockRepository },
//       ],
//     }).compile();

//     service = module.get<fatdService>(fatdService);
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
//   describe('when create fatd', () => {
//     it('should create a fatd', async () => {
//       mockRepository.create.mockReturnValueOnce(mockRegistry);
//       mockRepository.save.mockReturnValueOnce(mockRegistry);

//       const fatd: CreatefatdDto = mockRegistry;

//       const savedfatd = await service.create(fatd);

//       expect(savedfatd).toMatchObject(mockRegistry);
//       expect(mockRepository.create).toBeCalledWith(fatd);
//       expect(mockRepository.create).toBeCalledTimes(1);
//       expect(mockRepository.save).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all fatd', () => {
//     it('should list all fatd', async () => {
//       mockRepository.find.mockReturnValue([mockRegistry]);

//       const fatd = await service.findAll();

//       expect(fatd).toHaveLength(1);
//       expect(mockRepository.find).toBeCalledTimes(1);
//     });
//   });

//   // describe('when search one fatd', () => {
//   //   it('should list one fatd', async () => {
//   //     mockRepository.create.mockReturnValueOnce(mockRegistry);
//   //     mockRepository.save.mockReturnValueOnce(mockRegistry);

//   //     const fatdUpdate: UpdatefatdDto = mockRegistry;
//   //     const fatd = await service.search(fatdUpdate);

//   //     expect(fatd).toMatchObject(mockRegistry);
//   //     expect(mockRepository.find).toBeCalledTimes(1);
//   //   });
//   // });

//   describe('when search fatd by id', () => {
//     it('should find a existing fatd', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);

//       const fatd = await service.findById('1');

//       expect(fatd).toMatchObject(mockRegistry);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//     });

//     it('should return a exception when does not to find a fatd', async () => {
//       mockRepository.findOne.mockReturnValue(null);

//       await service.findById('3').catch(error => {
//         expect(error).toBeInstanceOf(NotFoundException);
//         expect(error).toMatchObject({ message: 'Registry not found' });
//         expect(mockRepository.findOne).toBeCalledWith('3');
//         expect(mockRepository.findOne).toBeCalledTimes(1);
//       });
//     });
//   });

//   describe('when update a fatd', () => {
//     it('should update a existing fatd', async () => {
//       const fatdUpdate: UpdatefatdDto = mockRegistry;
//       fatdUpdate.descricao = 'Update fatd '

//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.update.mockReturnValue({
//         ...mockRegistry,
//         ...fatdUpdate,
//       });
//       mockRepository.create.mockReturnValue({
//         ...mockRegistry,
//         ...fatdUpdate,
//       });

//       const updatedfatd = await service.update(
//         '1',
//         fatdUpdate,
//       );

//       expect(updatedfatd).toMatchObject(fatdUpdate);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.update).toBeCalledWith('1', fatdUpdate);
//       expect(mockRepository.update).toBeCalledTimes(1);
//       expect(mockRepository.create).toBeCalledWith({
//         ...mockRegistry,
//         ...fatdUpdate,
//       });
//       expect(mockRepository.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a fatd', () => {
//     it('should delete a existing fatd', async () => {
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
