import { Test, TestingModule } from '@nestjs/testing';
import { CreateResultadoDto, UpdateResultadoDto } from '../dtos';
import { fakerRegistry } from '../factory/resultado.factory';
import { ResultadoService } from '../service/resultado.service';
import { ResultadoController } from './resultado.controller';

describe('ResultadoController', () => {
  let controller: ResultadoController;
  let mockRegistry: CreateResultadoDto;

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
      controllers: [ResultadoController],
      providers: [{ provide: ResultadoService, useValue: mockService }],
    }).compile();

    controller = module.get<ResultadoController>(ResultadoController);
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

  describe('when create Resultado', () => {
    it('should create a Resultado and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Resultado: CreateResultadoDto = mockRegistry;

      const createdResultado = await controller.create(Resultado);

      expect(createdResultado).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Resultado);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Resultado', () => {
    it('should search all Resultado and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Resultado = await controller.findAll();

      expect(Resultado).toHaveLength(1);
      expect(Resultado).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Resultado by id', () => {
    it('should find a existing Resultado and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Resultado = await controller.findById('1');

      expect(Resultado).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Resultado', () => {
    it('should update a existing Resultado and return it', async () => {
      const ResultadoUpdate: UpdateResultadoDto = mockRegistry;
      ResultadoUpdate.procedimento = 'Update Resultado ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...ResultadoUpdate,
      });

      const updatedResultado = await controller.update('1', ResultadoUpdate);

      expect(updatedResultado).toMatchObject(ResultadoUpdate);
      expect(mockService.update).toBeCalledWith('1', ResultadoUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Resultado', () => {
    it('should delete a existing Resultado', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
