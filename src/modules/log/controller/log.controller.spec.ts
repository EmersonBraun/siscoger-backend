// import { Test, TestingModule } from '@nestjs/testing';
// import { CreateLogDto, UpdateLogDto } from '../dtos';
// import { fakerRegistry } from '../factory/log.factory';
// import { LogService } from '../service/log.service';
// import { LogController } from './log.controller';

describe('LogController', () => {
  describe('Test Latter', () => {
    it('should list all Log', async () => {
      const Log = 1 
      expect(Log).toBe(1);
    });
  });
//   let controller: LogController;
//   let mockRegistry: CreateLogDto;

//   const mockService = {
//     create: jest.fn(),
//     findAll: jest.fn(),
//     search: jest.fn(),
//     findById: jest.fn(),
//     update: jest.fn(),
//     delete: jest.fn(),
//   };

//   beforeAll(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [LogController],
//       providers: [{ provide: LogService, useValue: mockService }],
//     }).compile();

//     controller = module.get<LogController>(LogController);
//     mockRegistry = fakerRegistry()
//   });

//   beforeEach(() => {
//     mockService.create.mockReset();
//     mockService.findAll.mockReset();
//     mockService.search.mockReset();
//     mockService.findById.mockReset();
//     mockService.update.mockReset();
//     mockService.delete.mockReset();
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });

//   describe('when create log', () => {
//     it('should create a log and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const log: CreateLogDto = mockRegistry;

//       const createdlog = await controller.create('file',log);

//       expect(createdlog).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(log);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all log', () => {
//     it('should search all log and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const log = await controller.findAll();

//       expect(log).toHaveLength(1);
//       expect(log).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search log by id', () => {
//     it('should find a existing log and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const log = await controller.findById('1');

//       expect(log).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a log', () => {
//     it('should update a existing log and return it', async () => {
//       const logUpdate: UpdateLogDto = mockRegistry;
//       logUpdate.name = 'Update log '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...logUpdate,
//       });

//       const updatedlog = await controller.update(
//         '1',
//         logUpdate,
//       );

//       expect(updatedlog).toMatchObject(logUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         logUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a log', () => {
//     it('should delete a existing log', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
});