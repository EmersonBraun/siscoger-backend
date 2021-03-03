import { Test, TestingModule } from '@nestjs/testing';
import { CreateRestricaoDto, UpdateRestricaoDto } from '../dtos';
import { fakerRegistry } from '../factory/restricao.factory';
import { RestricaoService } from '../service/restricao.service';
import { RestricaoController } from './restricao.controller';

describe('RestricaoController', () => {
  let controller: RestricaoController;
  let mockRegistry: CreateRestricaoDto;

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
      controllers: [RestricaoController],
      providers: [{ provide: RestricaoService, useValue: mockService }],
    }).compile();

    controller = module.get<RestricaoController>(RestricaoController);
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

  describe('when create Restricao', () => {
    it('should create a Restricao and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Restricao: CreateRestricaoDto = mockRegistry;

      const createdRestricao = await controller.create(Restricao);

      expect(createdRestricao).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Restricao);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Restricao', () => {
    it('should search all Restricao and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Restricao = await controller.findAll();

      expect(Restricao).toHaveLength(1);
      expect(Restricao).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Restricao by id', () => {
    it('should find a existing Restricao and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Restricao = await controller.findById('1');

      expect(Restricao).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Restricao', () => {
    it('should update a existing Restricao and return it', async () => {
      const RestricaoUpdate: UpdateRestricaoDto = mockRegistry;
      RestricaoUpdate.rg = 'Update Restricao ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...RestricaoUpdate,
      });

      const updatedRestricao = await controller.update('1', RestricaoUpdate);

      expect(updatedRestricao).toMatchObject(RestricaoUpdate);
      expect(mockService.update).toBeCalledWith('1', RestricaoUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Restricao', () => {
    it('should delete a existing Restricao', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
