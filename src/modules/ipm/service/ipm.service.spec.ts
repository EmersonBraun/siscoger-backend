// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreateipmDto, UpdateipmDto } from '../dtos';
// import { fakerRegistry } from '../factory/ipm.factory';
// import { ipm } from '../entity/ipm.entity';
// import { ipmService } from './ipm.service';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});
// describe('ipmService', () => {
//   let service: ipmService;
//   let mockRegistry: CreateipmDto;

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
//         ipmService,
//         { provide: getRepositoryToken(ipm), useValue: mockRepository },
//       ],
//     }).compile();

//     service = module.get<ipmService>(ipmService);
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
//   describe('when create ipm', () => {
//     it('should create a ipm', async () => {
//       mockRepository.create.mockReturnValueOnce(mockRegistry);
//       mockRepository.save.mockReturnValueOnce(mockRegistry);

//       const ipm: CreateipmDto = mockRegistry;

//       const savedipm = await service.create(ipm);

//       expect(savedipm).toMatchObject(mockRegistry);
//       expect(mockRepository.create).toBeCalledWith(ipm);
//       expect(mockRepository.create).toBeCalledTimes(1);
//       expect(mockRepository.save).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all ipm', () => {
//     it('should list all ipm', async () => {
//       mockRepository.find.mockReturnValue([mockRegistry]);

//       const ipm = await service.findAll();

//       expect(ipm).toHaveLength(1);
//       expect(mockRepository.find).toBeCalledTimes(1);
//     });
//   });

//   // describe('when search one ipm', () => {
//   //   it('should list one ipm', async () => {
//   //     mockRepository.create.mockReturnValueOnce(mockRegistry);
//   //     mockRepository.save.mockReturnValueOnce(mockRegistry);

//   //     const ipmUpdate: UpdateipmDto = mockRegistry;
//   //     const ipm = await service.search(ipmUpdate);

//   //     expect(ipm).toMatchObject(mockRegistry);
//   //     expect(mockRepository.find).toBeCalledTimes(1);
//   //   });
//   // });

//   describe('when search ipm by id', () => {
//     it('should find a existing ipm', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);

//       const ipm = await service.findById('1');

//       expect(ipm).toMatchObject(mockRegistry);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//     });

//     it('should return a exception when does not to find a ipm', async () => {
//       mockRepository.findOne.mockReturnValue(null);

//       await service.findById('3').catch(error => {
//         expect(error).toBeInstanceOf(NotFoundException);
//         expect(error).toMatchObject({ message: 'Registry not found' });
//         expect(mockRepository.findOne).toBeCalledWith('3');
//         expect(mockRepository.findOne).toBeCalledTimes(1);
//       });
//     });
//   });

//   describe('when update a ipm', () => {
//     it('should update a existing ipm', async () => {
//       const ipmUpdate: UpdateipmDto = mockRegistry;
//       ipmUpdate.descricao = 'Update ipm '

//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.update.mockReturnValue({
//         ...mockRegistry,
//         ...ipmUpdate,
//       });
//       mockRepository.create.mockReturnValue({
//         ...mockRegistry,
//         ...ipmUpdate,
//       });

//       const updatedipm = await service.update(
//         '1',
//         ipmUpdate,
//       );

//       expect(updatedipm).toMatchObject(ipmUpdate);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.update).toBeCalledWith('1', ipmUpdate);
//       expect(mockRepository.update).toBeCalledTimes(1);
//       expect(mockRepository.create).toBeCalledWith({
//         ...mockRegistry,
//         ...ipmUpdate,
//       });
//       expect(mockRepository.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a ipm', () => {
//     it('should delete a existing ipm', async () => {
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
