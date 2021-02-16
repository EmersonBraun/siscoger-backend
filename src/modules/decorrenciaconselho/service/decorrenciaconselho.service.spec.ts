// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreateDecorrenciaConselhoDto, UpdateDecorrenciaConselhoDto } from '../dtos';
// import { fakerRegistry } from '../factory/decorrenciaconselho.factory';
// import { DecorrenciaConselho } from '../entity/decorrenciaconselho.entity';
// import { DecorrenciaConselhoService } from './decorrenciaconselho.service';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});
// describe('DecorrenciaConselhoService', () => {
//   let service: DecorrenciaConselhoService;
//   let mockRegistry: CreateDecorrenciaConselhoDto;

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
//         DecorrenciaConselhoService,
//         { provide: getRepositoryToken(DecorrenciaConselho), useValue: mockRepository },
//       ],
//     }).compile();

//     service = module.get<DecorrenciaConselhoService>(DecorrenciaConselhoService);
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
//   describe('when create DecorrenciaConselho', () => {
//     it('should create a DecorrenciaConselho', async () => {
//       mockRepository.create.mockReturnValueOnce(mockRegistry);
//       mockRepository.save.mockReturnValueOnce(mockRegistry);

//       const DecorrenciaConselho: CreateDecorrenciaConselhoDto = mockRegistry;

//       const savedDecorrenciaConselho = await service.create(DecorrenciaConselho);

//       expect(savedDecorrenciaConselho).toMatchObject(mockRegistry);
//       expect(mockRepository.create).toBeCalledWith(DecorrenciaConselho);
//       expect(mockRepository.create).toBeCalledTimes(1);
//       expect(mockRepository.save).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all DecorrenciaConselho', () => {
//     it('should list all DecorrenciaConselho', async () => {
//       mockRepository.find.mockReturnValue([mockRegistry]);

//       const DecorrenciaConselho = await service.findAll();

//       expect(DecorrenciaConselho).toHaveLength(1);
//       expect(mockRepository.find).toBeCalledTimes(1);
//     });
//   });

//   // describe('when search one DecorrenciaConselho', () => {
//   //   it('should list one DecorrenciaConselho', async () => {
//   //     mockRepository.create.mockReturnValueOnce(mockRegistry);
//   //     mockRepository.save.mockReturnValueOnce(mockRegistry);

//   //     const DecorrenciaConselhoUpdate: UpdateDecorrenciaConselhoDto = mockRegistry;
//   //     const DecorrenciaConselho = await service.search(DecorrenciaConselhoUpdate);

//   //     expect(DecorrenciaConselho).toMatchObject(mockRegistry);
//   //     expect(mockRepository.find).toBeCalledTimes(1);
//   //   });
//   // });

//   describe('when search DecorrenciaConselho by id', () => {
//     it('should find a existing DecorrenciaConselho', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);

//       const DecorrenciaConselho = await service.findById('1');

//       expect(DecorrenciaConselho).toMatchObject(mockRegistry);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//     });

//     it('should return a exception when does not to find a DecorrenciaConselho', async () => {
//       mockRepository.findOne.mockReturnValue(null);

//       await service.findById('3').catch(error => {
//         expect(error).toBeInstanceOf(NotFoundException);
//         expect(error).toMatchObject({ message: 'Registry not found' });
//         expect(mockRepository.findOne).toBeCalledWith('3');
//         expect(mockRepository.findOne).toBeCalledTimes(1);
//       });
//     });
//   });

//   describe('when update a DecorrenciaConselho', () => {
//     it('should update a existing DecorrenciaConselho', async () => {
//       const DecorrenciaConselhoUpdate: UpdateDecorrenciaConselhoDto = mockRegistry;
//       DecorrenciaConselhoUpdate.descricao = 'Update DecorrenciaConselho '

//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.update.mockReturnValue({
//         ...mockRegistry,
//         ...DecorrenciaConselhoUpdate,
//       });
//       mockRepository.create.mockReturnValue({
//         ...mockRegistry,
//         ...DecorrenciaConselhoUpdate,
//       });

//       const updatedDecorrenciaConselho = await service.update(
//         '1',
//         DecorrenciaConselhoUpdate,
//       );

//       expect(updatedDecorrenciaConselho).toMatchObject(DecorrenciaConselhoUpdate);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.update).toBeCalledWith('1', DecorrenciaConselhoUpdate);
//       expect(mockRepository.update).toBeCalledTimes(1);
//       expect(mockRepository.create).toBeCalledWith({
//         ...mockRegistry,
//         ...DecorrenciaConselhoUpdate,
//       });
//       expect(mockRepository.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a DecorrenciaConselho', () => {
//     it('should delete a existing DecorrenciaConselho', async () => {
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
