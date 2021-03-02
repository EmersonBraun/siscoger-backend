import { Test, TestingModule } from '@nestjs/testing';
import { CreateDesercaoDto, UpdateDesercaoDto } from '../dtos';
import { fakerRegistry } from '../factory/desercao.factory';
import { DesercaoService } from '../service/desercao.service';
import { DesercaoController } from './desercao.controller';

describe('DesercaoController', () => {
  let controller: DesercaoController;
  let mockRegistry: CreateDesercaoDto;

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
      controllers: [DesercaoController],
      providers: [{ provide: DesercaoService, useValue: mockService }],
    }).compile();

    controller = module.get<DesercaoController>(DesercaoController);
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

  describe('when create Desercao', () => {
    it('should create a Desercao and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Desercao: CreateDesercaoDto = mockRegistry;

      const createdDesercao = await controller.create(Desercao);

      expect(createdDesercao).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Desercao);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Desercao', () => {
    it('should search all Desercao and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Desercao = await controller.findAll();

      expect(Desercao).toHaveLength(1);
      expect(Desercao).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Desercao by id', () => {
    it('should find a existing Desercao and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Desercao = await controller.findById('1');

      expect(Desercao).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Desercao', () => {
    it('should update a existing Desercao and return it', async () => {
      const DesercaoUpdate: UpdateDesercaoDto = mockRegistry;
      DesercaoUpdate.pericia = 'Update Desercao ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...DesercaoUpdate,
      });

      const updatedDesercao = await controller.update('1', DesercaoUpdate);

      expect(updatedDesercao).toMatchObject(DesercaoUpdate);
      expect(mockService.update).toBeCalledWith('1', DesercaoUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Desercao', () => {
    it('should delete a existing Desercao', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
