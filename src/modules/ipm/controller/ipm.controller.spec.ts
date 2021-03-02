import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheModule } from '../../cache/redis-cache.module';
import { CreateIpmDto, UpdateIpmDto } from '../dtos';
import { fakerRegistry } from '../factory/ipm.factory';
import { IpmService } from '../service/ipm.service';
import { IpmController } from './ipm.controller';

describe('IpmController', () => {
  let controller: IpmController;
  let mockRegistry: CreateIpmDto;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RedisCacheModule],
      controllers: [IpmController],
      providers: [{ provide: IpmService, useValue: mockService }],
    }).compile();

    controller = module.get<IpmController>(IpmController);
    mockRegistry = fakerRegistry();
  });

  beforeEach(() => {
    mockService.create.mockReset();
    mockService.findAll.mockReset();
    mockService.findById.mockReset();
    mockService.update.mockReset();
    mockService.delete.mockReset();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('when create ipm', () => {
    it('should create a ipm and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const ipm: CreateIpmDto = mockRegistry;

      const createdIpm = await controller.create(ipm);

      expect(createdIpm).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(ipm);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Ipm', () => {
    it('should search all Ipm and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Ipm = await controller.findAll();

      expect(Ipm).toHaveLength(1);
      expect(Ipm).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search ipm by id', () => {
    it('should find a existing ipm and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const ipm = await controller.findById('1');

      expect(ipm).toMatchObject(mockRegistry);
      expect(ipm).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a ipm', () => {
    it('should update a existing ipm and return it', async () => {
      const ipmUpdate: UpdateIpmDto = mockRegistry;
      ipmUpdate.sintese_txt = 'Update ipm ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...ipmUpdate,
      });

      const updatedipm = await controller.update('1', ipmUpdate);

      expect(updatedipm).toMatchObject(ipmUpdate);
      expect(mockService.update).toBeCalledWith('1', ipmUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a ipm', () => {
    it('should delete a existing ipm', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
