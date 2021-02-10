import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheModule } from '../../cache/redis-cache.module';
import { CreateAndamentocogerDto, UpdateAndamentocogerDto } from '../dtos';
import { fakerRegistry } from '../factory/andamentocoger.factory';
import { AndamentocogerService } from '../service/andamentocoger.service';
import { AndamentocogerController } from './andamentocoger.controller';

describe('AndamentocogerController', () => {
  let controller: AndamentocogerController;
  let mockRegistry: CreateAndamentocogerDto;

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
      controllers: [AndamentocogerController],
      providers: [{ provide: AndamentocogerService, useValue: mockService }],
    }).compile();

    controller = module.get<AndamentocogerController>(AndamentocogerController);
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

  describe('when create Andamentocoger', () => {
    it('should create a Andamentocoger and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Andamentocoger: CreateAndamentocogerDto = mockRegistry;

      const createdAndamentocoger = await controller.create(Andamentocoger);

      expect(createdAndamentocoger).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Andamentocoger);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Andamentocoger', () => {
    it('should search all Andamentocoger and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Andamentocoger = await controller.findAll();

      expect(Andamentocoger).toHaveLength(1);
      expect(Andamentocoger).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Andamentocoger by id', () => {
    it('should find a existing Andamentocoger and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Andamentocoger = await controller.findById('1');

      expect(Andamentocoger).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Andamentocoger', () => {
    it('should update a existing Andamentocoger and return it', async () => {
      const AndamentocogerUpdate: UpdateAndamentocogerDto = mockRegistry;
      AndamentocogerUpdate.andamentocoger = 'Update Andamentocoger ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...AndamentocogerUpdate,
      });

      const updatedAndamentocoger = await controller.update(
        '1',
        AndamentocogerUpdate,
      );

      expect(updatedAndamentocoger).toMatchObject(AndamentocogerUpdate);
      expect(mockService.update).toBeCalledWith('1', AndamentocogerUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Andamentocoger', () => {
    it('should delete a existing Andamentocoger', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
