import { Test, TestingModule } from '@nestjs/testing';
import { CreateSituacaoDto, UpdateSituacaoDto } from '../dtos';
import { fakerRegistry } from '../factory/situacao.factory';
import { SituacaoService } from '../service/situacao.service';
import { SituacaoController } from './situacao.controller';

describe('SituacaoController', () => {
  let controller: SituacaoController;
  let mockRegistry: CreateSituacaoDto;

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
      controllers: [SituacaoController],
      providers: [{ provide: SituacaoService, useValue: mockService }],
    }).compile();

    controller = module.get<SituacaoController>(SituacaoController);
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

  describe('when create Situacao', () => {
    it('should create a Situacao and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Situacao: CreateSituacaoDto = mockRegistry;

      const createdSituacao = await controller.create(Situacao);

      expect(createdSituacao).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Situacao);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Situacao', () => {
    it('should search all Situacao and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Situacao = await controller.findAll();

      expect(Situacao).toHaveLength(1);
      expect(Situacao).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Situacao by id', () => {
    it('should find a existing Situacao and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Situacao = await controller.findById('1');

      expect(Situacao).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Situacao', () => {
    it('should update a existing Situacao and return it', async () => {
      const SituacaoUpdate: UpdateSituacaoDto = mockRegistry;
      SituacaoUpdate.situacao = 'Update Situacao ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...SituacaoUpdate,
      });

      const updatedSituacao = await controller.update('1', SituacaoUpdate);

      expect(updatedSituacao).toMatchObject(SituacaoUpdate);
      expect(mockService.update).toBeCalledWith('1', SituacaoUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Situacao', () => {
    it('should delete a existing Situacao', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
