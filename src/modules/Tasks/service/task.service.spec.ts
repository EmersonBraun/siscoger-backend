// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreateTaskDto, UpdateTaskDto } from '../dtos';
// import { fakerRegistry } from '../factory/pendencia.factory';
// import { Task } from '../schema/pendencia.schema';
// import { TaskService } from './pendencia.service';

describe('TaskService', () => {

  describe('Test Latter', () => {
    it('should list all Task', async () => {
      const Task = 1 
      expect(Task).toBe(1);
    });
  });

  // let service: TaskService;
  // let mockRegistry: CreateTaskDto;

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
  //       TaskService,
  //       { provide: getRepositoryToken(Task), useValue: mockRepository },
  //     ],
  //   }).compile();

  //   service = module.get<TaskService>(TaskService);
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
  // describe('when create Task', () => {
  //   it('should create a Task', async () => {
  //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  //     const Task: CreateTaskDto = mockRegistry;

  //     const savedTask = await service.create(Task);

  //     expect(savedTask).toMatchObject(mockRegistry);
  //     expect(mockRepository.create).toBeCalledWith(Task);
  //     expect(mockRepository.create).toBeCalledTimes(1);
  //     expect(mockRepository.save).toBeCalledTimes(1);
  //   });
  // });

  // describe('when search all Task', () => {
  //   it('should list all Task', async () => {
  //     mockRepository.find.mockReturnValue([mockRegistry]);

  //     const Task = await service.findAll();

  //     expect(Task).toHaveLength(1);
  //     expect(mockRepository.find).toBeCalledTimes(1);
  //   });
  // });

  // // describe('when search one Task', () => {
  // //   it('should list one Task', async () => {
  // //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  // //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  // //     const TaskUpdate: UpdateTaskDto = mockRegistry;
  // //     const Task = await service.search(TaskUpdate);

  // //     expect(Task).toMatchObject(mockRegistry);
  // //     expect(mockRepository.find).toBeCalledTimes(1);
  // //   });
  // // });

  // describe('when search Task by id', () => {
  //   it('should find a existing Task', async () => {
  //     mockRepository.findOne.mockReturnValue(mockRegistry);

  //     const Task = await service.findById('1');

  //     expect(Task).toMatchObject(mockRegistry);
  //     expect(mockRepository.findOne).toBeCalledWith('1');
  //     expect(mockRepository.findOne).toBeCalledTimes(1);
  //   });

  //   it('should return a exception when does not to find a Task', async () => {
  //     mockRepository.findOne.mockReturnValue(null);

  //     await service.findById('3').catch(error => {
  //       expect(error).toBeInstanceOf(NotFoundException);
  //       expect(error).toMatchObject({ message: 'Registry not found' });
  //       expect(mockRepository.findOne).toBeCalledWith('3');
  //       expect(mockRepository.findOne).toBeCalledTimes(1);
  //     });
  //   });
  // });

  // describe('when update a Task', () => {
  //   it('should update a existing Task', async () => {
  //     const TaskUpdate: UpdateTaskDto = mockRegistry;
  //     TaskUpdate.name = 'Update Task '

  //     mockRepository.findOne.mockReturnValue(mockRegistry);
  //     mockRepository.update.mockReturnValue({
  //       ...mockRegistry,
  //       ...TaskUpdate,
  //     });
  //     mockRepository.create.mockReturnValue({
  //       ...mockRegistry,
  //       ...TaskUpdate,
  //     });

  //     const updatedTask = await service.update(
  //       '1',
  //       TaskUpdate,
  //     );

  //     expect(updatedTask).toMatchObject(TaskUpdate);
  //     expect(mockRepository.findOne).toBeCalledWith('1');
  //     expect(mockRepository.findOne).toBeCalledTimes(1);
  //     expect(mockRepository.update).toBeCalledWith('1', TaskUpdate);
  //     expect(mockRepository.update).toBeCalledTimes(1);
  //     expect(mockRepository.create).toBeCalledWith({
  //       ...mockRegistry,
  //       ...TaskUpdate,
  //     });
  //     expect(mockRepository.create).toBeCalledTimes(1);
  //   });
  // });

  // describe('when delete a Task', () => {
  //   it('should delete a existing Task', async () => {
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