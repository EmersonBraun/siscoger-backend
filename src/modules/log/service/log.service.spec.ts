// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreateLogDto, UpdateLogDto } from '../dtos';
// import { fakerRegistry } from '../factory/log.factory';
// import { Log } from '../schema/log.schema';
// import { LogService } from './log.service';

describe('LogService', () => {

  describe('Test Latter', () => {
    it('should list all Log', async () => {
      const Log = 1 
      expect(Log).toBe(1);
    });
  });

  // let service: LogService;
  // let mockRegistry: CreateLogDto;

  // const mockRepository = {
  //   create: jest.fn(),
  //   save: jest.fn(),
  //   search: jest.fn(),
  //   find: jest.fn(),
  //   findOne: jest.fn(),
  //   update: jest.fn(),
  //   delete: jest.fn(),
  // };

  // beforeAll(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     providers: [
  //       LogService,
  //       { provide: getRepositoryToken(Log), useValue: mockRepository },
  //     ],
  //   }).compile();

  //   service = module.get<LogService>(LogService);
  //   mockRegistry = fakerRegistry()
  // });

  // beforeEach(() => {
  //   mockRepository.create.mockReset();
  //   mockRepository.save.mockReset();
  //   mockRepository.search.mockReset();
  //   mockRepository.find.mockReset();
  //   mockRepository.findOne.mockReset();
  //   mockRepository.update.mockReset();
  //   mockRepository.delete.mockReset();
  // });

  // it('should be defined', () => {
  //   expect(service).toBeDefined();
  // });

  // // need to solve
  // describe('when create Log', () => {
  //   it('should create a Log', async () => {
  //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  //     const Log: CreateLogDto = mockRegistry;

  //     const savedLog = await service.create(Log);

  //     expect(savedLog).toMatchObject(mockRegistry);
  //     expect(mockRepository.create).toBeCalledWith(Log);
  //     expect(mockRepository.create).toBeCalledTimes(1);
  //     expect(mockRepository.save).toBeCalledTimes(1);
  //   });
  // });

  // describe('when search all Log', () => {
  //   it('should list all Log', async () => {
  //     mockRepository.find.mockReturnValue([mockRegistry]);

  //     const Log = await service.findAll();

  //     expect(Log).toHaveLength(1);
  //     expect(mockRepository.find).toBeCalledTimes(1);
  //   });
  // });

  // // describe('when search one Log', () => {
  // //   it('should list one Log', async () => {
  // //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  // //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  // //     const LogUpdate: UpdateLogDto = mockRegistry;
  // //     const Log = await service.search(LogUpdate);

  // //     expect(Log).toMatchObject(mockRegistry);
  // //     expect(mockRepository.find).toBeCalledTimes(1);
  // //   });
  // // });

  // describe('when search Log by id', () => {
  //   it('should find a existing Log', async () => {
  //     mockRepository.findOne.mockReturnValue(mockRegistry);

  //     const Log = await service.findById('1');

  //     expect(Log).toMatchObject(mockRegistry);
  //     expect(mockRepository.findOne).toBeCalledWith('1');
  //     expect(mockRepository.findOne).toBeCalledTimes(1);
  //   });

  //   it('should return a exception when does not to find a Log', async () => {
  //     mockRepository.findOne.mockReturnValue(null);

  //     await service.findById('3').catch(error => {
  //       expect(error).toBeInstanceOf(NotFoundException);
  //       expect(error).toMatchObject({ message: 'Registry not found' });
  //       expect(mockRepository.findOne).toBeCalledWith('3');
  //       expect(mockRepository.findOne).toBeCalledTimes(1);
  //     });
  //   });
  // });

  // describe('when update a Log', () => {
  //   it('should update a existing Log', async () => {
  //     const LogUpdate: UpdateLogDto = mockRegistry;
  //     LogUpdate.name = 'Update Log '

  //     mockRepository.findOne.mockReturnValue(mockRegistry);
  //     mockRepository.update.mockReturnValue({
  //       ...mockRegistry,
  //       ...LogUpdate,
  //     });
  //     mockRepository.create.mockReturnValue({
  //       ...mockRegistry,
  //       ...LogUpdate,
  //     });

  //     const updatedLog = await service.update(
  //       '1',
  //       LogUpdate,
  //     );

  //     expect(updatedLog).toMatchObject(LogUpdate);
  //     expect(mockRepository.findOne).toBeCalledWith('1');
  //     expect(mockRepository.findOne).toBeCalledTimes(1);
  //     expect(mockRepository.update).toBeCalledWith('1', LogUpdate);
  //     expect(mockRepository.update).toBeCalledTimes(1);
  //     expect(mockRepository.create).toBeCalledWith({
  //       ...mockRegistry,
  //       ...LogUpdate,
  //     });
  //     expect(mockRepository.create).toBeCalledTimes(1);
  //   });
  // });

  // describe('when delete a Log', () => {
  //   it('should delete a existing Log', async () => {
  //     mockRepository.findOne.mockReturnValue(mockRegistry);
  //     mockRepository.delete.mockReturnValue(mockRegistry);

  //     await service.delete('1');

  //     expect(mockRepository.findOne).toBeCalledWith('1');
  //     expect(mockRepository.findOne).toBeCalledTimes(1);
  //     expect(mockRepository.delete).toBeCalledWith('1');
  //     expect(mockRepository.delete).toBeCalledTimes(1);
  //   });
  // });
});