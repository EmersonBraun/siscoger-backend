import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheModule } from '../../cache/redis-cache.module';
import { CreateMotivoconselhoDto, UpdateMotivoconselhoDto } from '../dtos';
import { fakerRegistry } from '../factory/motivoconselho.factory';
import { MotivoconselhoService } from '../service/motivoconselho.service';
import { MotivoconselhoController } from './motivoconselho.controller';

describe('MotivoconselhoController', () => {
  let controller: MotivoconselhoController;
  let mockRegistry: CreateMotivoconselhoDto;

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
      controllers: [MotivoconselhoController],
      providers: [{ provide: MotivoconselhoService, useValue: mockService }],
    }).compile();

    controller = module.get<MotivoconselhoController>(MotivoconselhoController);
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

  describe('when create Motivoconselho', () => {
    it('should create a Motivoconselho and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Motivoconselho: CreateMotivoconselhoDto = mockRegistry;

      const createdMotivoconselho = await controller.create(Motivoconselho);

      expect(createdMotivoconselho).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Motivoconselho);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Motivoconselho', () => {
    it('should search all Motivoconselho and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Motivoconselho = await controller.findAll();

      expect(Motivoconselho).toHaveLength(1);
      expect(Motivoconselho).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Motivoconselho by id', () => {
    it('should find a existing Motivoconselho and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Motivoconselho = await controller.findById('1');

      expect(Motivoconselho).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Motivoconselho', () => {
    it('should update a existing Motivoconselho and return it', async () => {
      const MotivoconselhoUpdate: UpdateMotivoconselhoDto = mockRegistry;
      MotivoconselhoUpdate.motivoconselho = 'Update Motivoconselho ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...MotivoconselhoUpdate,
      });

      const updatedMotivoconselho = await controller.update(
        '1',
        MotivoconselhoUpdate,
      );

      expect(updatedMotivoconselho).toMatchObject(MotivoconselhoUpdate);
      expect(mockService.update).toBeCalledWith('1', MotivoconselhoUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Motivoconselho', () => {
    it('should delete a existing Motivoconselho', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
