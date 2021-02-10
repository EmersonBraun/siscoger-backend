import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheModule } from '../../cache/redis-cache.module';
import { CreateFeriadoDto, UpdateFeriadoDto } from '../dtos';
import { fakerRegistry } from '../factory/feriado.factory';
import { FeriadoService } from '../service/feriado.service';
import { FeriadoController } from './feriado.controller';

describe('FeriadoController', () => {
  let controller: FeriadoController;
  let mockRegistry: CreateFeriadoDto;

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
      controllers: [FeriadoController],
      providers: [{ provide: FeriadoService, useValue: mockService }],
    }).compile();

    controller = module.get<FeriadoController>(FeriadoController);
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

  describe('when create Feriado', () => {
    it('should create a Feriado and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Feriado: CreateFeriadoDto = mockRegistry;

      const createdFeriado = await controller.create(Feriado);

      expect(createdFeriado).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Feriado);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Feriado', () => {
    it('should search all Feriado and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Feriado = await controller.findAll();

      expect(Feriado).toHaveLength(1);
      expect(Feriado).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Feriado by id', () => {
    it('should find a existing Feriado and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Feriado = await controller.findById('1');

      expect(Feriado).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Feriado', () => {
    it('should update a existing Feriado and return it', async () => {
      const FeriadoUpdate: UpdateFeriadoDto = mockRegistry;
      FeriadoUpdate.feriado = 'Update Feriado '

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...FeriadoUpdate,
      });

      const updatedFeriado = await controller.update(
        '1',
        FeriadoUpdate,
      );

      expect(updatedFeriado).toMatchObject(FeriadoUpdate);
      expect(mockService.update).toBeCalledWith(
        '1',
        FeriadoUpdate,
      );
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Feriado', () => {
    it('should delete a existing Feriado', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});