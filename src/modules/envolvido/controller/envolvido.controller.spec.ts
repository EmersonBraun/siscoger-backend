import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheModule } from '../../cache/redis-cache.module';
import { CreateEnvolvidoDto, UpdateEnvolvidoDto } from '../dtos';
import { fakerRegistry } from '../factory/envolvido.factory';
import { EnvolvidoService } from '../service/envolvido.service';
import { EnvolvidoController } from './envolvido.controller';

describe('EnvolvidoController', () => {
  let controller: EnvolvidoController;
  let mockRegistry: CreateEnvolvidoDto;

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
      controllers: [EnvolvidoController],
      providers: [{ provide: EnvolvidoService, useValue: mockService }],
    }).compile();

    controller = module.get<EnvolvidoController>(EnvolvidoController);
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

  describe('when create Envolvido', () => {
    it('should create a Envolvido and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Envolvido: CreateEnvolvidoDto = mockRegistry;

      const createdEnvolvido = await controller.create(Envolvido);

      expect(createdEnvolvido).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Envolvido);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Envolvido', () => {
    it('should search all Envolvido and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Envolvido = await controller.findAll();

      expect(Envolvido).toHaveLength(1);
      expect(Envolvido).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  // describe('when search one envolvido', () => {
  //   it('should search one envolvido and return them', async () => {
  //     mockService.search.mockReturnValue([mockRegistry]);
  //     const envolvidoUpdate: UpdateEnvolvidoDto = mockRegistry;
  //     const envolvido = await controller.search(envolvidoUpdate);

  //     expect(envolvido).toBeInstanceOf(Object)
  //     expect(envolvido).toMatchObject([mockRegistry]);
  //     expect(mockService.search).toBeCalledTimes(1);
  //   });
  // });

  describe('when search Envolvido by id', () => {
    it('should find a existing Envolvido and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Envolvido = await controller.findById('1');

      expect(Envolvido).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Envolvido', () => {
    it('should update a existing Envolvido and return it', async () => {
      const EnvolvidoUpdate: UpdateEnvolvidoDto = mockRegistry;
      EnvolvidoUpdate.cargo = 'Update Envolvido '

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...EnvolvidoUpdate,
      });

      const updatedEnvolvido = await controller.update(
        '1',
        EnvolvidoUpdate,
      );

      expect(updatedEnvolvido).toMatchObject(EnvolvidoUpdate);
      expect(mockService.update).toBeCalledWith(
        '1',
        EnvolvidoUpdate,
      );
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Envolvido', () => {
    it('should delete a existing Envolvido', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});