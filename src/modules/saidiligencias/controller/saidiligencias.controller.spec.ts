import { Test, TestingModule } from '@nestjs/testing';
import { CreateSaiDiligenciasDto, UpdateSaiDiligenciasDto } from '../dtos';
import { fakerRegistry } from '../factory/saidiligencias.factory';
import { SaiDiligenciasService } from '../service/saidiligencias.service';
import { SaiDiligenciasController } from './saidiligencias.controller';

describe('SaiDiligenciasController', () => {
  let controller: SaiDiligenciasController;
  let mockRegistry: CreateSaiDiligenciasDto;

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
      controllers: [SaiDiligenciasController],
      providers: [{ provide: SaiDiligenciasService, useValue: mockService }],
    }).compile();

    controller = module.get<SaiDiligenciasController>(SaiDiligenciasController);
    mockRegistry = fakerRegistry();
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

  describe('when create SaiDiligencias', () => {
    it('should create a SaiDiligencias and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const SaiDiligencias: CreateSaiDiligenciasDto = mockRegistry;

      const createdSaiDiligencias = await controller.create(SaiDiligencias);

      expect(createdSaiDiligencias).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(SaiDiligencias);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all SaiDiligencias', () => {
    it('should search all SaiDiligencias and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const SaiDiligencias = await controller.findAll();

      expect(SaiDiligencias).toHaveLength(1);
      expect(SaiDiligencias).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search SaiDiligencias by id', () => {
    it('should find a existing SaiDiligencias and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const SaiDiligencias = await controller.findById('1');

      expect(SaiDiligencias).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a SaiDiligencias', () => {
    it('should update a existing SaiDiligencias and return it', async () => {
      const SaiDiligenciasUpdate: UpdateSaiDiligenciasDto = mockRegistry;
      SaiDiligenciasUpdate.cdopm = 'Update SaiDiligencias ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...SaiDiligenciasUpdate,
      });

      const updatedSaiDiligencias = await controller.update(
        '1',
        SaiDiligenciasUpdate,
      );

      expect(updatedSaiDiligencias).toMatchObject(SaiDiligenciasUpdate);
      expect(mockService.update).toBeCalledWith('1', SaiDiligenciasUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a SaiDiligencias', () => {
    it('should delete a existing SaiDiligencias', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
