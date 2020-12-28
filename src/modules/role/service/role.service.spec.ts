import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateRoleDto, UpdateRoleDto } from '../dtos';
import { Role } from '../entity/role.entity';
import { fakerRegistry } from '../factory/role.factory';
import { RoleService } from './role.service';

describe('roleService', () => {
  let service: RoleService;
  let mockRegistry: CreateRoleDto;

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
        RoleService,
        { provide: getRepositoryToken(Role), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<RoleService>(RoleService);
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
  describe('when create role', () => {
    it('should create a role', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const role: CreateRoleDto = mockRegistry;

      const savedrole = await service.create(role);

      expect(savedrole).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(role);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all role', () => {
    it('should list all role', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const role = await service.findAll();

      expect(role).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  // describe('when search one role', () => {
  //   it('should list one role', async () => {
  //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  //     const roleUpdate: UpdateRoleDto = mockRegistry;
  //     const role = await service.search(roleUpdate);

  //     expect(role).toMatchObject(mockRegistry);
  //     expect(mockRepository.find).toBeCalledTimes(1);
  //   });
  // });

  describe('when search role by id', () => {
    it('should find a existing role', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const role = await service.findById('1');

      expect(role).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a role', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a role', () => {
    it('should update a existing role', async () => {
      const roleUpdate: UpdateRoleDto = mockRegistry;
      roleUpdate.role = 'Update role '

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...roleUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...roleUpdate,
      });

      const updatedrole = await service.update(
        '1',
        roleUpdate,
      );

      expect(updatedrole).toMatchObject(roleUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', roleUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...roleUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a role', () => {
    it('should delete a existing role', async () => {
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