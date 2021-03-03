import { Test, TestingModule } from '@nestjs/testing';
import { CreatePjDto, UpdatePjDto } from '../dtos';
import { fakerRegistry } from '../factory/pj.factory';
import { PjService } from '../service/pj.service';
import { PjController } from './pj.controller';

describe('PjController', () => {
  let controller: PjController;
  let mockRegistry: CreatePjDto;

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
      controllers: [PjController],
      providers: [{ provide: PjService, useValue: mockService }],
    }).compile();

    controller = module.get<PjController>(PjController);
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

  describe('when create Pj', () => {
    it('should create a Pj and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Pj: CreatePjDto = mockRegistry;

      const createdPj = await controller.create(Pj);

      expect(createdPj).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Pj);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Pj', () => {
    it('should search all Pj and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Pj = await controller.findAll();

      expect(Pj).toHaveLength(1);
      expect(Pj).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Pj by id', () => {
    it('should find a existing Pj and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Pj = await controller.findById('1');

      expect(Pj).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Pj', () => {
    it('should update a existing Pj and return it', async () => {
      const PjUpdate: UpdatePjDto = mockRegistry;
      PjUpdate.cnpj = 'Update Pj ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...PjUpdate,
      });

      const updatedPj = await controller.update('1', PjUpdate);

      expect(updatedPj).toMatchObject(PjUpdate);
      expect(mockService.update).toBeCalledWith('1', PjUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Pj', () => {
    it('should delete a existing Pj', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
