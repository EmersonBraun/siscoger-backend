import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheModule } from '../../cache/redis-cache.module';
import { CreateFalecimentoDto, UpdateFalecimentoDto } from '../dtos';
import { fakerRegistry } from '../factory/falecimento.factory';
import { FalecimentoService } from '../service/falecimento.service';
import { FalecimentoController } from './falecimento.controller';

describe('FalecimentoController', () => {
  let controller: FalecimentoController;
  let mockRegistry: CreateFalecimentoDto;

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
      controllers: [FalecimentoController],
      providers: [{ provide: FalecimentoService, useValue: mockService }],
    }).compile();

    controller = module.get<FalecimentoController>(FalecimentoController);
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

  describe('when create Falecimento', () => {
    it('should create a Falecimento and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Falecimento: CreateFalecimentoDto = mockRegistry;

      const createdFalecimento = await controller.create(Falecimento);

      expect(createdFalecimento).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Falecimento);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Falecimento', () => {
    it('should search all Falecimento and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Falecimento = await controller.findAll();

      expect(Falecimento).toHaveLength(1);
      expect(Falecimento).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Falecimento by id', () => {
    it('should find a existing Falecimento and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Falecimento = await controller.findById('1');

      expect(Falecimento).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Falecimento', () => {
    it('should update a existing Falecimento and return it', async () => {
      const FalecimentoUpdate: UpdateFalecimentoDto = mockRegistry;
      FalecimentoUpdate.cargo = 'Update Falecimento '

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...FalecimentoUpdate,
      });

      const updatedFalecimento = await controller.update(
        '1',
        FalecimentoUpdate,
      );

      expect(updatedFalecimento).toMatchObject(FalecimentoUpdate);
      expect(mockService.update).toBeCalledWith(
        '1',
        FalecimentoUpdate,
      );
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Falecimento', () => {
    it('should delete a existing Falecimento', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});