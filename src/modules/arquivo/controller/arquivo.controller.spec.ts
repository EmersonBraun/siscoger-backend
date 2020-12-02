import { Test, TestingModule } from '@nestjs/testing';
import { CreateArquivoDto, UpdateArquivoDto } from '../dtos';
import { fakerRegistry } from '../factory/arquivo.factory';
import { ArquivoService } from '../service/arquivo.service';
import { ArquivoController } from './arquivo.controller';

describe('ArquivoController', () => {
  let controller: ArquivoController;
  let mockRegistry: CreateArquivoDto;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArquivoController],
      providers: [{ provide: ArquivoService, useValue: mockService }],
    }).compile();

    controller = module.get<ArquivoController>(ArquivoController);
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

  describe('when create Arquivo', () => {
    it('should create a Arquivo and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Arquivo: CreateArquivoDto = mockRegistry;

      const createdArquivo = await controller.create(Arquivo);

      expect(createdArquivo).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Arquivo);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Arquivo', () => {
    it('should search all Arquivo and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Arquivo = await controller.findAll();

      expect(Arquivo).toHaveLength(1);
      expect(Arquivo).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Arquivo by id', () => {
    it('should find a existing Arquivo and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Arquivo = await controller.findById('1');

      expect(Arquivo).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Arquivo', () => {
    it('should update a existing Arquivo and return it', async () => {
      const ArquivoUpdate: UpdateArquivoDto = mockRegistry;
      ArquivoUpdate.numero = 'Update Arquivo '

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...ArquivoUpdate,
      });

      const updatedArquivo = await controller.update(
        '1',
        ArquivoUpdate,
      );

      expect(updatedArquivo).toMatchObject(ArquivoUpdate);
      expect(mockService.update).toBeCalledWith(
        '1',
        ArquivoUpdate,
      );
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Arquivo', () => {
    it('should delete a existing Arquivo', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});