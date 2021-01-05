import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheModule } from '../../cache/redis-cache.module';
import { CreateGradacaoDto, UpdateGradacaoDto } from '../dtos';
import { fakerRegistry } from '../factory/gradacao.factory';
import { GradacaoService } from '../service/gradacao.service';
import { GradacaoController } from './gradacao.controller';

describe('GradacaoController', () => {
  let controller: GradacaoController;
  let mockRegistry: CreateGradacaoDto;

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
      controllers: [GradacaoController],
      providers: [{ provide: GradacaoService, useValue: mockService }],
    }).compile();

    controller = module.get<GradacaoController>(GradacaoController);
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

  describe('when create Gradacao', () => {
    it('should create a Gradacao and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Gradacao: CreateGradacaoDto = mockRegistry;

      const createdGradacao = await controller.create(Gradacao);

      expect(createdGradacao).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Gradacao);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Gradacao', () => {
    it('should search all Gradacao and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Gradacao = await controller.findAll();

      expect(Gradacao).toHaveLength(1);
      expect(Gradacao).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Gradacao by id', () => {
    it('should find a existing Gradacao and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Gradacao = await controller.findById('1');

      expect(Gradacao).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Gradacao', () => {
    it('should update a existing Gradacao and return it', async () => {
      const GradacaoUpdate: UpdateGradacaoDto = mockRegistry;
      GradacaoUpdate.gradacao = 'Update Gradacao ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...GradacaoUpdate,
      });

      const updatedGradacao = await controller.update('1', GradacaoUpdate);

      expect(updatedGradacao).toMatchObject(GradacaoUpdate);
      expect(mockService.update).toBeCalledWith('1', GradacaoUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Gradacao', () => {
    it('should delete a existing Gradacao', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
