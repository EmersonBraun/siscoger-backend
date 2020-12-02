import { Test, TestingModule } from '@nestjs/testing';
import { CreateSobrestamentoDto, UpdateSobrestamentoDto } from '../dtos';
import { fakerRegistry } from '../factory/sobrestamento.factory';
import { SobrestamentoService } from '../service/sobrestamento.service';
import { SobrestamentoController } from './sobrestamento.controller';

describe('SobrestamentoController', () => {
  let controller: SobrestamentoController;
  let mockRegistry: CreateSobrestamentoDto;

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
      controllers: [SobrestamentoController],
      providers: [{ provide: SobrestamentoService, useValue: mockService }],
    }).compile();

    controller = module.get<SobrestamentoController>(SobrestamentoController);
    mockRegistry = fakerRegistry()
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

  describe('when create Sobrestamento', () => {
    it('should create a Sobrestamento and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Sobrestamento: CreateSobrestamentoDto = mockRegistry;

      const createdSobrestamento = await controller.create(Sobrestamento);

      expect(createdSobrestamento).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Sobrestamento);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Sobrestamento', () => {
    it('should search all Sobrestamento and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Sobrestamento = await controller.findAll();

      expect(Sobrestamento).toHaveLength(1);
      expect(Sobrestamento).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search one Sobrestamento', () => {
    it('should search one Sobrestamento and return them', async () => {
      mockService.search.mockReturnValue([mockRegistry]);
      const SobrestamentoUpdate: UpdateSobrestamentoDto = mockRegistry;
      const Sobrestamento = await controller.search(SobrestamentoUpdate);

      expect(Sobrestamento).toHaveLength(1);
      expect(Sobrestamento).toMatchObject([mockRegistry]);
      expect(mockService.search).toBeCalledTimes(1);
    });
  });

  describe('when search Sobrestamento by id', () => {
    it('should find a existing Sobrestamento and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Sobrestamento = await controller.findById('1');

      expect(Sobrestamento).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Sobrestamento', () => {
    it('should update a existing Sobrestamento and return it', async () => {
      const SobrestamentoUpdate: UpdateSobrestamentoDto = mockRegistry;
      SobrestamentoUpdate.publicacao_inicio = 'Update Sobrestamento '

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...SobrestamentoUpdate,
      });

      const updatedSobrestamento = await controller.update(
        '1',
        SobrestamentoUpdate,
      );

      expect(updatedSobrestamento).toMatchObject(SobrestamentoUpdate);
      expect(mockService.update).toBeCalledWith(
        '1',
        SobrestamentoUpdate,
      );
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Sobrestamento', () => {
    it('should delete a existing Sobrestamento', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});