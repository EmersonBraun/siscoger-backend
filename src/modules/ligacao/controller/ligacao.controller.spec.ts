import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheModule } from '../../cache/redis-cache.module';
import { CreateLigacaoDto, UpdateLigacaoDto } from '../dtos';
import { fakerRegistry } from '../factory/ligacao.factory';
import { LigacaoService } from '../service/ligacao.service';
import { LigacaoController } from './ligacao.controller';

describe('LigacaoController', () => {
  let controller: LigacaoController;
  let mockRegistry: CreateLigacaoDto;

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
      imports: [RedisCacheModule],
      controllers: [LigacaoController],
      providers: [{ provide: LigacaoService, useValue: mockService }],
    }).compile();

    controller = module.get<LigacaoController>(LigacaoController);
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

  describe('when create Ligacao', () => {
    it('should create a Ligacao and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Ligacao: CreateLigacaoDto = mockRegistry;

      const createdLigacao = await controller.create(Ligacao);

      expect(createdLigacao).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Ligacao);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Ligacao', () => {
    it('should search all Ligacao and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Ligacao = await controller.findAll();

      expect(Ligacao).toHaveLength(1);
      expect(Ligacao).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  // describe('when search one Ligacao', () => {
  //   it('should search one Ligacao and return them', async () => {
  //     mockService.search.mockReturnValue([mockRegistry]);
  //     const LigacaoUpdate: UpdateLigacaoDto = mockRegistry;
  //     const ligacao = await controller.search(LigacaoUpdate);

  //     expect(ligacao).toBeInstanceOf(Object)
  //     expect(ligacao).toMatchObject([mockRegistry]);
  //     expect(mockService.search).toBeCalledTimes(1);
  //   });
  // });

  describe('when search Ligacao by id', () => {
    it('should find a existing Ligacao and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Ligacao = await controller.findById('1');

      expect(Ligacao).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Ligacao', () => {
    it('should update a existing Ligacao and return it', async () => {
      const LigacaoUpdate: UpdateLigacaoDto = mockRegistry;
      LigacaoUpdate.destino_proc = 'Update Ligacao ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...LigacaoUpdate,
      });

      const updatedLigacao = await controller.update('1', LigacaoUpdate);

      expect(updatedLigacao).toMatchObject(LigacaoUpdate);
      expect(mockService.update).toBeCalledWith('1', LigacaoUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Ligacao', () => {
    it('should delete a existing Ligacao', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
