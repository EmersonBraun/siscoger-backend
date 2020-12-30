import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheModule } from '../../cache/redis-cache.module';
import { CreateComportamentoDto, UpdateComportamentoDto } from '../dtos';
import { fakerRegistry } from '../factory/comportamento.factory';
import { ComportamentoService } from '../service/comportamento.service';
import { ComportamentoController } from './comportamento.controller';

describe('ComportamentoController', () => {
  let controller: ComportamentoController;
  let mockRegistry: CreateComportamentoDto;

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
      controllers: [ComportamentoController],
      providers: [{ provide: ComportamentoService, useValue: mockService }],
    }).compile();

    controller = module.get<ComportamentoController>(ComportamentoController);
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

  describe('when create Comportamento', () => {
    it('should create a Comportamento and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Comportamento: CreateComportamentoDto = mockRegistry;

      const createdComportamento = await controller.create(Comportamento);

      expect(createdComportamento).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Comportamento);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Comportamento', () => {
    it('should search all Comportamento and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Comportamento = await controller.findAll();

      expect(Comportamento).toHaveLength(1);
      expect(Comportamento).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Comportamento by id', () => {
    it('should find a existing Comportamento and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Comportamento = await controller.findById('1');

      expect(Comportamento).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Comportamento', () => {
    it('should update a existing Comportamento and return it', async () => {
      const ComportamentoUpdate: UpdateComportamentoDto = mockRegistry;
      ComportamentoUpdate.comportamento = 'Update Comportamento '

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...ComportamentoUpdate,
      });

      const updatedComportamento = await controller.update(
        '1',
        ComportamentoUpdate,
      );

      expect(updatedComportamento).toMatchObject(ComportamentoUpdate);
      expect(mockService.update).toBeCalledWith(
        '1',
        ComportamentoUpdate,
      );
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Comportamento', () => {
    it('should delete a existing Comportamento', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});