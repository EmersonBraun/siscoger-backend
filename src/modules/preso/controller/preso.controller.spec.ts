import { Test, TestingModule } from '@nestjs/testing';
import { CreatePresoDto, UpdatePresoDto } from '../dtos';
import { fakerRegistry } from '../factory/preso.factory';
import { PresoService } from '../service/preso.service';
import { PresoController } from './preso.controller';

describe('PresoController', () => {
  let controller: PresoController;
  let mockRegistry: CreatePresoDto;

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
      controllers: [PresoController],
      providers: [{ provide: PresoService, useValue: mockService }],
    }).compile();

    controller = module.get<PresoController>(PresoController);
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

  describe('when create Preso', () => {
    it('should create a Preso and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Preso: CreatePresoDto = mockRegistry;

      const createdPreso = await controller.create(Preso);

      expect(createdPreso).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Preso);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Preso', () => {
    it('should search all Preso and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Preso = await controller.findAll();

      expect(Preso).toHaveLength(1);
      expect(Preso).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Preso by id', () => {
    it('should find a existing Preso and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Preso = await controller.findById('1');

      expect(Preso).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Preso', () => {
    it('should update a existing Preso and return it', async () => {
      const PresoUpdate: UpdatePresoDto = mockRegistry;
      PresoUpdate.rg = 'Update Preso ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...PresoUpdate,
      });

      const updatedPreso = await controller.update('1', PresoUpdate);

      expect(updatedPreso).toMatchObject(PresoUpdate);
      expect(mockService.update).toBeCalledWith('1', PresoUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Preso', () => {
    it('should delete a existing Preso', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
