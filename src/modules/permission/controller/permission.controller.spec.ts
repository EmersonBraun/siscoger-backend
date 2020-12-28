import { Test, TestingModule } from '@nestjs/testing';
import { CreatePermissionDto } from '../dtos/create.dto';
import { UpdatePermissionDto } from '../dtos/update.dto';
import { fakerRegistry } from '../factory/permission.factory';
import { PermissionService } from '../service/permission.service';
import { PermissionController } from './permission.controller';

describe('PermissionController', () => {
  let controller: PermissionController;
  let mockRegistry: CreatePermissionDto;

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
      controllers: [PermissionController],
      providers: [{ provide: PermissionService, useValue: mockService }],
    }).compile();

    controller = module.get<PermissionController>(PermissionController);
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

  describe('when create permission', () => {
    it('should create a permission and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const permission: CreatePermissionDto = mockRegistry;

      const createdpermission = await controller.create(permission);

      expect(createdpermission).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(permission);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all permission', () => {
    it('should search all permission and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const permission = await controller.findAll();

      expect(permission).toHaveLength(1);
      expect(permission).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search permission by id', () => {
    it('should find a existing permission and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const permission = await controller.findById('1');

      expect(permission).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a permission', () => {
    it('should update a existing permission and return it', async () => {
      const permissionUpdate: UpdatePermissionDto = mockRegistry;
      permissionUpdate.permission = 'Update permission '

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...permissionUpdate,
      });

      const updatedpermission = await controller.update(
        '1',
        permissionUpdate,
      );

      expect(updatedpermission).toMatchObject(permissionUpdate);
      expect(mockService.update).toBeCalledWith(
        '1',
        permissionUpdate,
      );
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a permission', () => {
    it('should delete a existing permission', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});