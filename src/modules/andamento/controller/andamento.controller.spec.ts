import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheModule } from '../../cache/redis-cache.module';
import { CreateAndamentoDto, UpdateAndamentoDto } from '../dtos';
import { fakerRegistry } from '../factory/andamento.factory';
import { AndamentoService } from '../service/andamento.service';
import { AndamentoController } from './andamento.controller';

describe('AndamentoController', () => {
  let controller: AndamentoController;
  let mockRegistry: CreateAndamentoDto;

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
      controllers: [AndamentoController],
      providers: [{ provide: AndamentoService, useValue: mockService }],
    }).compile();

    controller = module.get<AndamentoController>(AndamentoController);
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

  describe('when create Andamento', () => {
    it('should create a Andamento and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Andamento: CreateAndamentoDto = mockRegistry;

      const createdAndamento = await controller.create(Andamento);

      expect(createdAndamento).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Andamento);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Andamento', () => {
    it('should search all Andamento and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Andamento = await controller.findAll();

      expect(Andamento).toHaveLength(1);
      expect(Andamento).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Andamento by id', () => {
    it('should find a existing Andamento and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Andamento = await controller.findById('1');

      expect(Andamento).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Andamento', () => {
    it('should update a existing Andamento and return it', async () => {
      const AndamentoUpdate: UpdateAndamentoDto = mockRegistry;
      AndamentoUpdate.andamento = 'Update Andamento '

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...AndamentoUpdate,
      });

      const updatedAndamento = await controller.update(
        '1',
        AndamentoUpdate,
      );

      expect(updatedAndamento).toMatchObject(AndamentoUpdate);
      expect(mockService.update).toBeCalledWith(
        '1',
        AndamentoUpdate,
      );
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Andamento', () => {
    it('should delete a existing Andamento', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});