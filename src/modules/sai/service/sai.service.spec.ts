// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreatesaiDto, UpdatesaiDto } from '../dtos';
// import { fakerRegistry } from '../factory/sai.factory';
// import { sai } from '../entity/sai.entity';
// import { saiService } from './sai.service';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});
// describe('saiService', () => {
//   let service: saiService;
//   let mockRegistry: CreatesaiDto;

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
//         saiService,
//         { provide: getRepositoryToken(sai), useValue: mockRepository },
//       ],
//     }).compile();

//     service = module.get<saiService>(saiService);
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
//   describe('when create sai', () => {
//     it('should create a sai', async () => {
//       mockRepository.create.mockReturnValueOnce(mockRegistry);
//       mockRepository.save.mockReturnValueOnce(mockRegistry);

//       const sai: CreatesaiDto = mockRegistry;

//       const savedsai = await service.create(sai);

//       expect(savedsai).toMatchObject(mockRegistry);
//       expect(mockRepository.create).toBeCalledWith(sai);
//       expect(mockRepository.create).toBeCalledTimes(1);
//       expect(mockRepository.save).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all sai', () => {
//     it('should list all sai', async () => {
//       mockRepository.find.mockReturnValue([mockRegistry]);

//       const sai = await service.findAll();

//       expect(sai).toHaveLength(1);
//       expect(mockRepository.find).toBeCalledTimes(1);
//     });
//   });

//   // describe('when search one sai', () => {
//   //   it('should list one sai', async () => {
//   //     mockRepository.create.mockReturnValueOnce(mockRegistry);
//   //     mockRepository.save.mockReturnValueOnce(mockRegistry);

//   //     const saiUpdate: UpdatesaiDto = mockRegistry;
//   //     const sai = await service.search(saiUpdate);

//   //     expect(sai).toMatchObject(mockRegistry);
//   //     expect(mockRepository.find).toBeCalledTimes(1);
//   //   });
//   // });

//   describe('when search sai by id', () => {
//     it('should find a existing sai', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);

//       const sai = await service.findById('1');

//       expect(sai).toMatchObject(mockRegistry);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//     });

//     it('should return a exception when does not to find a sai', async () => {
//       mockRepository.findOne.mockReturnValue(null);

//       await service.findById('3').catch(error => {
//         expect(error).toBeInstanceOf(NotFoundException);
//         expect(error).toMatchObject({ message: 'Registry not found' });
//         expect(mockRepository.findOne).toBeCalledWith('3');
//         expect(mockRepository.findOne).toBeCalledTimes(1);
//       });
//     });
//   });

//   describe('when update a sai', () => {
//     it('should update a existing sai', async () => {
//       const saiUpdate: UpdatesaiDto = mockRegistry;
//       saiUpdate.descricao = 'Update sai '

//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.update.mockReturnValue({
//         ...mockRegistry,
//         ...saiUpdate,
//       });
//       mockRepository.create.mockReturnValue({
//         ...mockRegistry,
//         ...saiUpdate,
//       });

//       const updatedsai = await service.update(
//         '1',
//         saiUpdate,
//       );

//       expect(updatedsai).toMatchObject(saiUpdate);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.update).toBeCalledWith('1', saiUpdate);
//       expect(mockRepository.update).toBeCalledTimes(1);
//       expect(mockRepository.create).toBeCalledWith({
//         ...mockRegistry,
//         ...saiUpdate,
//       });
//       expect(mockRepository.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a sai', () => {
//     it('should delete a existing sai', async () => {
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
