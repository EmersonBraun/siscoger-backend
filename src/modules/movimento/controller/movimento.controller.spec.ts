import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheModule } from '../../cache/redis-cache.module';
import { CreateMovimentoDto, UpdateMovimentoDto } from '../dtos';
import { fakerRegistry } from '../factory/movimento.factory';
import { MovimentoService } from '../service/movimento.service';
import { MovimentoController } from './movimento.controller';

describe('MovimentoController', () => {
  let controller: MovimentoController;
  let mockRegistry: CreateMovimentoDto;

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
      controllers: [MovimentoController],
      providers: [{ provide: MovimentoService, useValue: mockService }],
    }).compile();

    controller = module.get<MovimentoController>(MovimentoController);
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

  describe('when create Movimento', () => {
    it('should create a Movimento and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Movimento: CreateMovimentoDto = mockRegistry;

      const createdMovimento = await controller.create(Movimento);

      expect(createdMovimento).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Movimento);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Movimento', () => {
    it('should search all Movimento and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Movimento = await controller.findAll();

      expect(Movimento).toHaveLength(1);
      expect(Movimento).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  // describe('when search one Movimento', () => {
  //   it('should search one Movimento and return them', async () => {
  //     mockService.search.mockReturnValue([mockRegistry]);
  //     const MovimentoUpdate: UpdateMovimentoDto = mockRegistry;
  //     const Movimento = await controller.search(MovimentoUpdate);

  //     expect(Movimento).toBeInstanceOf(Object)
  //     expect(Movimento).toMatchObject([mockRegistry]);
  //     expect(mockService.search).toBeCalledTimes(1);
  //   });
  // });

  describe('when search Movimento by id', () => {
    it('should find a existing Movimento and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Movimento = await controller.findById('1');

      expect(Movimento).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Movimento', () => {
    it('should update a existing Movimento and return it', async () => {
      const MovimentoUpdate: UpdateMovimentoDto = mockRegistry;
      MovimentoUpdate.descricao = 'Update Movimento '

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...MovimentoUpdate,
      });

      const updatedMovimento = await controller.update(
        '1',
        MovimentoUpdate,
      );

      expect(updatedMovimento).toMatchObject(MovimentoUpdate);
      expect(mockService.update).toBeCalledWith(
        '1',
        MovimentoUpdate,
      );
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Movimento', () => {
    it('should delete a existing Movimento', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});