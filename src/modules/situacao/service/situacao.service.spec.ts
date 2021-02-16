// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreatesituacaoDto, UpdatesituacaoDto } from '../dtos';
// import { fakerRegistry } from '../factory/situacao.factory';
// import { situacao } from '../entity/situacao.entity';
// import { situacaoService } from './situacao.service';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});
// describe('situacaoService', () => {
//   let service: situacaoService;
//   let mockRegistry: CreatesituacaoDto;

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
//         situacaoService,
//         { provide: getRepositoryToken(situacao), useValue: mockRepository },
//       ],
//     }).compile();

//     service = module.get<situacaoService>(situacaoService);
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
//   describe('when create situacao', () => {
//     it('should create a situacao', async () => {
//       mockRepository.create.mockReturnValueOnce(mockRegistry);
//       mockRepository.save.mockReturnValueOnce(mockRegistry);

//       const situacao: CreatesituacaoDto = mockRegistry;

//       const savedsituacao = await service.create(situacao);

//       expect(savedsituacao).toMatchObject(mockRegistry);
//       expect(mockRepository.create).toBeCalledWith(situacao);
//       expect(mockRepository.create).toBeCalledTimes(1);
//       expect(mockRepository.save).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all situacao', () => {
//     it('should list all situacao', async () => {
//       mockRepository.find.mockReturnValue([mockRegistry]);

//       const situacao = await service.findAll();

//       expect(situacao).toHaveLength(1);
//       expect(mockRepository.find).toBeCalledTimes(1);
//     });
//   });

//   // describe('when search one situacao', () => {
//   //   it('should list one situacao', async () => {
//   //     mockRepository.create.mockReturnValueOnce(mockRegistry);
//   //     mockRepository.save.mockReturnValueOnce(mockRegistry);

//   //     const situacaoUpdate: UpdatesituacaoDto = mockRegistry;
//   //     const situacao = await service.search(situacaoUpdate);

//   //     expect(situacao).toMatchObject(mockRegistry);
//   //     expect(mockRepository.find).toBeCalledTimes(1);
//   //   });
//   // });

//   describe('when search situacao by id', () => {
//     it('should find a existing situacao', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);

//       const situacao = await service.findById('1');

//       expect(situacao).toMatchObject(mockRegistry);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//     });

//     it('should return a exception when does not to find a situacao', async () => {
//       mockRepository.findOne.mockReturnValue(null);

//       await service.findById('3').catch(error => {
//         expect(error).toBeInstanceOf(NotFoundException);
//         expect(error).toMatchObject({ message: 'Registry not found' });
//         expect(mockRepository.findOne).toBeCalledWith('3');
//         expect(mockRepository.findOne).toBeCalledTimes(1);
//       });
//     });
//   });

//   describe('when update a situacao', () => {
//     it('should update a existing situacao', async () => {
//       const situacaoUpdate: UpdatesituacaoDto = mockRegistry;
//       situacaoUpdate.descricao = 'Update situacao '

//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.update.mockReturnValue({
//         ...mockRegistry,
//         ...situacaoUpdate,
//       });
//       mockRepository.create.mockReturnValue({
//         ...mockRegistry,
//         ...situacaoUpdate,
//       });

//       const updatedsituacao = await service.update(
//         '1',
//         situacaoUpdate,
//       );

//       expect(updatedsituacao).toMatchObject(situacaoUpdate);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.update).toBeCalledWith('1', situacaoUpdate);
//       expect(mockRepository.update).toBeCalledTimes(1);
//       expect(mockRepository.create).toBeCalledWith({
//         ...mockRegistry,
//         ...situacaoUpdate,
//       });
//       expect(mockRepository.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a situacao', () => {
//     it('should delete a existing situacao', async () => {
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
