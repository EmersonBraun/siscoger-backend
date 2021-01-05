import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheModule } from '../../cache/redis-cache.module';
import { CreateOfendidoDto, UpdateOfendidoDto } from '../dtos';
import { fakerRegistry } from '../factory/ofendido.factory';
import { OfendidoService } from '../service/ofendido.service';
import { OfendidoController } from './ofendido.controller';

describe('OfendidoController', () => {
  let controller: OfendidoController;
  let mockRegistry: CreateOfendidoDto;

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
      controllers: [OfendidoController],
      providers: [{ provide: OfendidoService, useValue: mockService }],
    }).compile();

    controller = module.get<OfendidoController>(OfendidoController);
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

  describe('when create Ofendido', () => {
    it('should create a Ofendido and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Ofendido: CreateOfendidoDto = mockRegistry;

      const createdOfendido = await controller.create(Ofendido);

      expect(createdOfendido).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Ofendido);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Ofendido', () => {
    it('should search all Ofendido and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Ofendido = await controller.findAll();

      expect(Ofendido).toHaveLength(1);
      expect(Ofendido).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  // describe('when search one ofendido', () => {
  //   it('should search one ofendido and return them', async () => {
  //     mockService.search.mockReturnValue([mockRegistry]);
  //     const ofendidoUpdate: UpdateOfendidoDto = mockRegistry;
  //     const ofendido = await controller.search(ofendidoUpdate);

  //     expect(ofendido).toBeInstanceOf(Object)
  //     expect(ofendido).toMatchObject([mockRegistry]);
  //     expect(mockService.search).toBeCalledTimes(1);
  //   });
  // });

  describe('when search Ofendido by id', () => {
    it('should find a existing Ofendido and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Ofendido = await controller.findById('1');

      expect(Ofendido).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Ofendido', () => {
    it('should update a existing Ofendido and return it', async () => {
      const OfendidoUpdate: UpdateOfendidoDto = mockRegistry;
      OfendidoUpdate.email = 'Update Ofendido ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...OfendidoUpdate,
      });

      const updatedOfendido = await controller.update('1', OfendidoUpdate);

      expect(updatedOfendido).toMatchObject(OfendidoUpdate);
      expect(mockService.update).toBeCalledWith('1', OfendidoUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Ofendido', () => {
    it('should delete a existing Ofendido', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
