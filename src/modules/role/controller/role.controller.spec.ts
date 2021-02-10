import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheModule } from '../../cache/redis-cache.module';
import { CreateRoleDto } from '../dtos/create.dto';
import { UpdateRoleDto } from '../dtos/update.dto';
import { fakerRegistry } from '../factory/role.factory';
import { RoleService } from '../service/role.service';
import { RoleController } from './role.controller';

describe('RoleController', () => {
  let controller: RoleController;
  let mockRegistry: CreateRoleDto;

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
      controllers: [RoleController],
      providers: [{ provide: RoleService, useValue: mockService }],
    }).compile();

    controller = module.get<RoleController>(RoleController);
    mockRegistry = fakerRegistry()
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

  describe('when create role', () => {
    it('should create a role and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const role: CreateRoleDto = mockRegistry;

      const createdrole = await controller.create(role);

      expect(createdrole).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(role);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all role', () => {
    it('should search all role and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const role = await controller.findAll();

      expect(role).toHaveLength(1);
      expect(role).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search role by id', () => {
    it('should find a existing role and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const role = await controller.findById('1');

      expect(role).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a role', () => {
    it('should update a existing role and return it', async () => {
      const roleUpdate: UpdateRoleDto = mockRegistry;
      roleUpdate.role = 'Update role '

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...roleUpdate,
      });

      const updatedrole = await controller.update(
        '1',
        roleUpdate,
      );

      expect(updatedrole).toMatchObject(roleUpdate);
      expect(mockService.update).toBeCalledWith(
        '1',
        roleUpdate,
      );
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a role', () => {
    it('should delete a existing role', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});