import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreatePermissionDto } from '../dtos/create.dto';
import { UpdatePermissionDto } from '../dtos/update.dto';
import { Permission } from '../entity/permission.entity';
import { fakerRegistry } from '../factory/permission.factory';
import { PermissionService } from './permission.service';

describe('PermissionService', () => {
  let service: PermissionService;
  let mockRegistry: CreatePermissionDto;

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
        PermissionService,
        { provide: getRepositoryToken(Permission), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<PermissionService>(PermissionService);
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
  describe('when create permission', () => {
    it('should create a permission', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const permission: CreatePermissionDto = mockRegistry;

      const savedpermission = await service.create(permission);

      expect(savedpermission).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(permission);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all permission', () => {
    it('should list all permission', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const permission = await service.findAll();

      expect(permission).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  // describe('when search one permission', () => {
  //   it('should list one permission', async () => {
  //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  //     const permissionUpdate: UpdatePermissionDto = mockRegistry;
  //     const permission = await service.search(permissionUpdate);

  //     expect(permission).toMatchObject(mockRegistry);
  //     expect(mockRepository.find).toBeCalledTimes(1);
  //   });
  // });

  describe('when search permission by id', () => {
    it('should find a existing permission', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const permission = await service.findById('1');

      expect(permission).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a permission', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a permission', () => {
    it('should update a existing permission', async () => {
      const permissionUpdate: UpdatePermissionDto = mockRegistry;
      permissionUpdate.permission = 'Update permission '

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...permissionUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...permissionUpdate,
      });

      const updatedpermission = await service.update(
        '1',
        permissionUpdate,
      );

      expect(updatedpermission).toMatchObject(permissionUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', permissionUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...permissionUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a permission', () => {
    it('should delete a existing permission', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.delete.mockReturnValue(mockRegistry);

      await service.delete('1');

      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.delete).toBeCalledWith('1');
      expect(mockRepository.delete).toBeCalledTimes(1);
    });
  });
});