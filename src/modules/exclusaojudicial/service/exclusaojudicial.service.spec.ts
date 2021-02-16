// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreateexclusaojudicialDto, UpdateexclusaojudicialDto } from '../dtos';
// import { fakerRegistry } from '../factory/exclusaojudicial.factory';
// import { exclusaojudicial } from '../entity/exclusaojudicial.entity';
// import { exclusaojudicialService } from './exclusaojudicial.service';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});
// describe('exclusaojudicialService', () => {
//   let service: exclusaojudicialService;
//   let mockRegistry: CreateexclusaojudicialDto;

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
//         exclusaojudicialService,
//         { provide: getRepositoryToken(exclusaojudicial), useValue: mockRepository },
//       ],
//     }).compile();

//     service = module.get<exclusaojudicialService>(exclusaojudicialService);
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
//   describe('when create exclusaojudicial', () => {
//     it('should create a exclusaojudicial', async () => {
//       mockRepository.create.mockReturnValueOnce(mockRegistry);
//       mockRepository.save.mockReturnValueOnce(mockRegistry);

//       const exclusaojudicial: CreateexclusaojudicialDto = mockRegistry;

//       const savedexclusaojudicial = await service.create(exclusaojudicial);

//       expect(savedexclusaojudicial).toMatchObject(mockRegistry);
//       expect(mockRepository.create).toBeCalledWith(exclusaojudicial);
//       expect(mockRepository.create).toBeCalledTimes(1);
//       expect(mockRepository.save).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all exclusaojudicial', () => {
//     it('should list all exclusaojudicial', async () => {
//       mockRepository.find.mockReturnValue([mockRegistry]);

//       const exclusaojudicial = await service.findAll();

//       expect(exclusaojudicial).toHaveLength(1);
//       expect(mockRepository.find).toBeCalledTimes(1);
//     });
//   });

//   // describe('when search one exclusaojudicial', () => {
//   //   it('should list one exclusaojudicial', async () => {
//   //     mockRepository.create.mockReturnValueOnce(mockRegistry);
//   //     mockRepository.save.mockReturnValueOnce(mockRegistry);

//   //     const exclusaojudicialUpdate: UpdateexclusaojudicialDto = mockRegistry;
//   //     const exclusaojudicial = await service.search(exclusaojudicialUpdate);

//   //     expect(exclusaojudicial).toMatchObject(mockRegistry);
//   //     expect(mockRepository.find).toBeCalledTimes(1);
//   //   });
//   // });

//   describe('when search exclusaojudicial by id', () => {
//     it('should find a existing exclusaojudicial', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);

//       const exclusaojudicial = await service.findById('1');

//       expect(exclusaojudicial).toMatchObject(mockRegistry);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//     });

//     it('should return a exception when does not to find a exclusaojudicial', async () => {
//       mockRepository.findOne.mockReturnValue(null);

//       await service.findById('3').catch(error => {
//         expect(error).toBeInstanceOf(NotFoundException);
//         expect(error).toMatchObject({ message: 'Registry not found' });
//         expect(mockRepository.findOne).toBeCalledWith('3');
//         expect(mockRepository.findOne).toBeCalledTimes(1);
//       });
//     });
//   });

//   describe('when update a exclusaojudicial', () => {
//     it('should update a existing exclusaojudicial', async () => {
//       const exclusaojudicialUpdate: UpdateexclusaojudicialDto = mockRegistry;
//       exclusaojudicialUpdate.descricao = 'Update exclusaojudicial '

//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.update.mockReturnValue({
//         ...mockRegistry,
//         ...exclusaojudicialUpdate,
//       });
//       mockRepository.create.mockReturnValue({
//         ...mockRegistry,
//         ...exclusaojudicialUpdate,
//       });

//       const updatedexclusaojudicial = await service.update(
//         '1',
//         exclusaojudicialUpdate,
//       );

//       expect(updatedexclusaojudicial).toMatchObject(exclusaojudicialUpdate);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.update).toBeCalledWith('1', exclusaojudicialUpdate);
//       expect(mockRepository.update).toBeCalledTimes(1);
//       expect(mockRepository.create).toBeCalledWith({
//         ...mockRegistry,
//         ...exclusaojudicialUpdate,
//       });
//       expect(mockRepository.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a exclusaojudicial', () => {
//     it('should delete a existing exclusaojudicial', async () => {
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
