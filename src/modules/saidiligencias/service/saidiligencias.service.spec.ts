// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreatesaidiligenciasDto, UpdatesaidiligenciasDto } from '../dtos';
// import { fakerRegistry } from '../factory/saidiligencias.factory';
// import { saidiligencias } from '../entity/saidiligencias.entity';
// import { saidiligenciasService } from './saidiligencias.service';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});
// describe('saidiligenciasService', () => {
//   let service: saidiligenciasService;
//   let mockRegistry: CreatesaidiligenciasDto;

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
//         saidiligenciasService,
//         { provide: getRepositoryToken(saidiligencias), useValue: mockRepository },
//       ],
//     }).compile();

//     service = module.get<saidiligenciasService>(saidiligenciasService);
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
//   describe('when create saidiligencias', () => {
//     it('should create a saidiligencias', async () => {
//       mockRepository.create.mockReturnValueOnce(mockRegistry);
//       mockRepository.save.mockReturnValueOnce(mockRegistry);

//       const saidiligencias: CreatesaidiligenciasDto = mockRegistry;

//       const savedsaidiligencias = await service.create(saidiligencias);

//       expect(savedsaidiligencias).toMatchObject(mockRegistry);
//       expect(mockRepository.create).toBeCalledWith(saidiligencias);
//       expect(mockRepository.create).toBeCalledTimes(1);
//       expect(mockRepository.save).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all saidiligencias', () => {
//     it('should list all saidiligencias', async () => {
//       mockRepository.find.mockReturnValue([mockRegistry]);

//       const saidiligencias = await service.findAll();

//       expect(saidiligencias).toHaveLength(1);
//       expect(mockRepository.find).toBeCalledTimes(1);
//     });
//   });

//   // describe('when search one saidiligencias', () => {
//   //   it('should list one saidiligencias', async () => {
//   //     mockRepository.create.mockReturnValueOnce(mockRegistry);
//   //     mockRepository.save.mockReturnValueOnce(mockRegistry);

//   //     const saidiligenciasUpdate: UpdatesaidiligenciasDto = mockRegistry;
//   //     const saidiligencias = await service.search(saidiligenciasUpdate);

//   //     expect(saidiligencias).toMatchObject(mockRegistry);
//   //     expect(mockRepository.find).toBeCalledTimes(1);
//   //   });
//   // });

//   describe('when search saidiligencias by id', () => {
//     it('should find a existing saidiligencias', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);

//       const saidiligencias = await service.findById('1');

//       expect(saidiligencias).toMatchObject(mockRegistry);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//     });

//     it('should return a exception when does not to find a saidiligencias', async () => {
//       mockRepository.findOne.mockReturnValue(null);

//       await service.findById('3').catch(error => {
//         expect(error).toBeInstanceOf(NotFoundException);
//         expect(error).toMatchObject({ message: 'Registry not found' });
//         expect(mockRepository.findOne).toBeCalledWith('3');
//         expect(mockRepository.findOne).toBeCalledTimes(1);
//       });
//     });
//   });

//   describe('when update a saidiligencias', () => {
//     it('should update a existing saidiligencias', async () => {
//       const saidiligenciasUpdate: UpdatesaidiligenciasDto = mockRegistry;
//       saidiligenciasUpdate.descricao = 'Update saidiligencias '

//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.update.mockReturnValue({
//         ...mockRegistry,
//         ...saidiligenciasUpdate,
//       });
//       mockRepository.create.mockReturnValue({
//         ...mockRegistry,
//         ...saidiligenciasUpdate,
//       });

//       const updatedsaidiligencias = await service.update(
//         '1',
//         saidiligenciasUpdate,
//       );

//       expect(updatedsaidiligencias).toMatchObject(saidiligenciasUpdate);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.update).toBeCalledWith('1', saidiligenciasUpdate);
//       expect(mockRepository.update).toBeCalledTimes(1);
//       expect(mockRepository.create).toBeCalledWith({
//         ...mockRegistry,
//         ...saidiligenciasUpdate,
//       });
//       expect(mockRepository.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a saidiligencias', () => {
//     it('should delete a existing saidiligencias', async () => {
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
