import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheModule } from '../../cache/redis-cache.module';
import { CreateApfdDto, UpdateApfdDto } from '../dtos';
import { fakerRegistry } from '../factory/apfd.factory';
import { ApfdService } from '../service/apfd.service';
import { ApfdController } from './apfd.controller';

describe('ApfdController', () => {
  let controller: ApfdController;
  let mockRegistry: CreateApfdDto;

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
      controllers: [ApfdController],
      providers: [{ provide: ApfdService, useValue: mockService }],
    }).compile();

    controller = module.get<ApfdController>(ApfdController);
    mockRegistry = fakerRegistry()
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

  describe('when create Apfd', () => {
    it('should create a Apfd and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Apfd: CreateApfdDto = mockRegistry;

      const createdApfd = await controller.create(Apfd);

      expect(createdApfd).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Apfd);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Apfd', () => {
    it('should search all Apfd and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Apfd = await controller.findAll();

      expect(Apfd).toHaveLength(1);
      expect(Apfd).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Apfd by id', () => {
    it('should find a existing Apfd and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Apfd = await controller.findById('1');

      expect(Apfd).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Apfd', () => {
    it('should update a existing Apfd and return it', async () => {
      const ApfdUpdate: UpdateApfdDto = mockRegistry;
      ApfdUpdate.doc_numero = 'Update Apfd '

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...ApfdUpdate,
      });

      const updatedApfd = await controller.update(
        '1',
        ApfdUpdate,
      );

      expect(updatedApfd).toMatchObject(ApfdUpdate);
      expect(mockService.update).toBeCalledWith(
        '1',
        ApfdUpdate,
      );
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Apfd', () => {
    it('should delete a existing Apfd', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});