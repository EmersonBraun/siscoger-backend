import { Test, TestingModule } from '@nestjs/testing';
import { CreateSindicanciaDto, UpdateSindicanciaDto } from '../dtos';
import { fakerRegistry } from '../factory/sindicancia.factory';
import { SindicanciaService } from '../service/sindicancia.service';
import { SindicanciaController } from './sindicancia.controller';

describe('SindicanciaController', () => {
  let controller: SindicanciaController;
  let mockRegistry: CreateSindicanciaDto;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SindicanciaController],
      providers: [{ provide: SindicanciaService, useValue: mockService }],
    }).compile();

    controller = module.get<SindicanciaController>(SindicanciaController);
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

  describe('when create sindicancia', () => {
    it('should create a sindicancia and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const sindicancia: CreateSindicanciaDto = mockRegistry;

      const createdSindicancia = await controller.create(sindicancia);

      expect(createdSindicancia).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(sindicancia);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Sindicancia', () => {
    it('should search all Sindicancia and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Sindicancia = await controller.findAll();

      expect(Sindicancia).toHaveLength(1);
      expect(Sindicancia).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search sindicancia by id', () => {
    it('should find a existing sindicancia and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const sindicancia = await controller.findById('1');

      expect(sindicancia).toMatchObject(mockRegistry);
      expect(sindicancia).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a sindicancia', () => {
    it('should update a existing sindicancia and return it', async () => {
      const sindicanciaUpdate: UpdateSindicanciaDto = mockRegistry;
      sindicanciaUpdate.sintese_txt = 'Update sindicancia '

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...sindicanciaUpdate,
      });

      const updatedsindicancia = await controller.update(
        '1',
        sindicanciaUpdate,
      );

      expect(updatedsindicancia).toMatchObject(sindicanciaUpdate);
      expect(mockService.update).toBeCalledWith(
        '1',
        sindicanciaUpdate,
      );
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a sindicancia', () => {
    it('should delete a existing sindicancia', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});