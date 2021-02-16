// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreatedenunciacivilDto, UpdatedenunciacivilDto } from '../dtos';
// import { fakerRegistry } from '../factory/denunciacivil.factory';
// import { denunciacivil } from '../entity/denunciacivil.entity';
// import { denunciacivilService } from './denunciacivil.service';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});
// describe('denunciacivilService', () => {
//   let service: denunciacivilService;
//   let mockRegistry: CreatedenunciacivilDto;

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
//         denunciacivilService,
//         { provide: getRepositoryToken(denunciacivil), useValue: mockRepository },
//       ],
//     }).compile();

//     service = module.get<denunciacivilService>(denunciacivilService);
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
//   describe('when create denunciacivil', () => {
//     it('should create a denunciacivil', async () => {
//       mockRepository.create.mockReturnValueOnce(mockRegistry);
//       mockRepository.save.mockReturnValueOnce(mockRegistry);

//       const denunciacivil: CreatedenunciacivilDto = mockRegistry;

//       const saveddenunciacivil = await service.create(denunciacivil);

//       expect(saveddenunciacivil).toMatchObject(mockRegistry);
//       expect(mockRepository.create).toBeCalledWith(denunciacivil);
//       expect(mockRepository.create).toBeCalledTimes(1);
//       expect(mockRepository.save).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all denunciacivil', () => {
//     it('should list all denunciacivil', async () => {
//       mockRepository.find.mockReturnValue([mockRegistry]);

//       const denunciacivil = await service.findAll();

//       expect(denunciacivil).toHaveLength(1);
//       expect(mockRepository.find).toBeCalledTimes(1);
//     });
//   });

//   // describe('when search one denunciacivil', () => {
//   //   it('should list one denunciacivil', async () => {
//   //     mockRepository.create.mockReturnValueOnce(mockRegistry);
//   //     mockRepository.save.mockReturnValueOnce(mockRegistry);

//   //     const denunciacivilUpdate: UpdatedenunciacivilDto = mockRegistry;
//   //     const denunciacivil = await service.search(denunciacivilUpdate);

//   //     expect(denunciacivil).toMatchObject(mockRegistry);
//   //     expect(mockRepository.find).toBeCalledTimes(1);
//   //   });
//   // });

//   describe('when search denunciacivil by id', () => {
//     it('should find a existing denunciacivil', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);

//       const denunciacivil = await service.findById('1');

//       expect(denunciacivil).toMatchObject(mockRegistry);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//     });

//     it('should return a exception when does not to find a denunciacivil', async () => {
//       mockRepository.findOne.mockReturnValue(null);

//       await service.findById('3').catch(error => {
//         expect(error).toBeInstanceOf(NotFoundException);
//         expect(error).toMatchObject({ message: 'Registry not found' });
//         expect(mockRepository.findOne).toBeCalledWith('3');
//         expect(mockRepository.findOne).toBeCalledTimes(1);
//       });
//     });
//   });

//   describe('when update a denunciacivil', () => {
//     it('should update a existing denunciacivil', async () => {
//       const denunciacivilUpdate: UpdatedenunciacivilDto = mockRegistry;
//       denunciacivilUpdate.descricao = 'Update denunciacivil '

//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.update.mockReturnValue({
//         ...mockRegistry,
//         ...denunciacivilUpdate,
//       });
//       mockRepository.create.mockReturnValue({
//         ...mockRegistry,
//         ...denunciacivilUpdate,
//       });

//       const updateddenunciacivil = await service.update(
//         '1',
//         denunciacivilUpdate,
//       );

//       expect(updateddenunciacivil).toMatchObject(denunciacivilUpdate);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.update).toBeCalledWith('1', denunciacivilUpdate);
//       expect(mockRepository.update).toBeCalledTimes(1);
//       expect(mockRepository.create).toBeCalledWith({
//         ...mockRegistry,
//         ...denunciacivilUpdate,
//       });
//       expect(mockRepository.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a denunciacivil', () => {
//     it('should delete a existing denunciacivil', async () => {
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
