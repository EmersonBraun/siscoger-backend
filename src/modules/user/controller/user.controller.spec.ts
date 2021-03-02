import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheModule } from '../../cache/redis-cache.module';
import { CreateUserDto, UpdateUserDto } from '../dtos';
import { fakerRegistry } from '../factory/user.factory';
import { UserService } from '../service/user.service';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;
  let mockRegistry: CreateUserDto;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    search: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RedisCacheModule],
      controllers: [UserController],
      providers: [{ provide: UserService, useValue: mockService }],
    }).compile();

    controller = module.get<UserController>(UserController);
    mockRegistry = fakerRegistry();
  });

  beforeEach(() => {
    mockService.create.mockReset();
    mockService.findAll.mockReset();
    mockService.search.mockReset();
    mockService.findById.mockReset();
    mockService.update.mockReset();
    mockService.delete.mockReset();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('when create User', () => {
    it('should create a User and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const User: CreateUserDto = mockRegistry;

      const createdUser = await controller.create(User);

      expect(createdUser).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(User);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all User', () => {
    it('should search all User and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const User = await controller.findAll();

      expect(User).toHaveLength(1);
      expect(User).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search User by id', () => {
    it('should find a existing User and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const User = await controller.findById('1');

      expect(User).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a User', () => {
    it('should update a existing User and return it', async () => {
      const UserUpdate: UpdateUserDto = mockRegistry;
      UserUpdate.class = 'Update User ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...UserUpdate,
      });

      const updatedUser = await controller.update('1', UserUpdate);
      delete updatedUser.password;
      delete mockRegistry.password;

      expect(updatedUser).toMatchObject(UserUpdate);
      expect(mockService.update).toBeCalledWith('1', UserUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a User', () => {
    it('should delete a existing User', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
