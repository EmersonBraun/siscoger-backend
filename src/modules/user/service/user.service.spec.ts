/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateUserDto, UpdateUserDto } from '../dtos';
import { User } from '../entity/user.entity';
import { fakerRegistry } from '../factory/user.factory';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let mockRegistry: CreateUserDto;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    search: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: getRepositoryToken(User), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    mockRegistry = fakerRegistry()
  });

  beforeEach(() => {
    mockRepository.create.mockReset();
    mockRepository.save.mockReset();
    mockRepository.search.mockReset();
    mockRepository.find.mockReset();
    mockRepository.findOne.mockReset();
    mockRepository.update.mockReset();
    mockRepository.delete.mockReset();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // need to solve
  describe('when create User', () => {
    it('should create a User', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const User: CreateUserDto = mockRegistry;

      const savedUser = await service.create(User);

      expect(savedUser).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(User);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all User', () => {
    it('should list all User', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const User = await service.findAll();

      expect(User).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  // describe('when search one User', () => {
  //   it('should list one User', async () => {
  //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  //     const UserUpdate: UpdateUserDto = mockRegistry;
  //     const User = await service.search(UserUpdate);

  //     expect(User).toMatchObject(mockRegistry);
  //     expect(mockRepository.find).toBeCalledTimes(1);
  //   });
  // });

  describe('when search User by id', () => {
    it('should find a existing User', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const User = await service.findById('1');

      expect(User).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1', {"relations": ["roles"]});
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a User', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3', {"relations": ["roles"]});
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a User', () => {
    it('should update a existing User', async () => {
      const UserUpdate: UpdateUserDto = mockRegistry;
      UserUpdate.class = 'Update User '

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...UserUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...UserUpdate,
      });

      const updatedUser = await service.update(
        '1',
        UserUpdate,
      );

      // expect(updatedUser).toMatchObject(UserUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1', {"relations": ["roles"]});
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', UserUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      // expect(mockRepository.create).toBeCalledWith({
      //   ...mockRegistry,
      //   ...UserUpdate,
      // });
      // expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a User', () => {
    it('should delete a existing User', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.delete.mockReturnValue(mockRegistry);

      await service.delete('1');

      expect(mockRepository.findOne).toBeCalledWith('1', {"relations": ["roles"]});
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.delete).toBeCalledWith('1');
      expect(mockRepository.delete).toBeCalledTimes(1);
    });
  });
});