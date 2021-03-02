import { Test, TestingModule } from '@nestjs/testing';
import { CreatePresoTipoDto, UpdatePresoTipoDto } from '../dtos';
import { fakerRegistry } from '../factory/presotipo.factory';
import { PresoTipoService } from '../service/presotipo.service';
import { PresoTipoController } from './presotipo.controller';

describe('PresoTipoController', () => {
  let controller: PresoTipoController;
  let mockRegistry: CreatePresoTipoDto;

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
      controllers: [PresoTipoController],
      providers: [{ provide: PresoTipoService, useValue: mockService }],
    }).compile();

    controller = module.get<PresoTipoController>(PresoTipoController);
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

  describe('when create PresoTipo', () => {
    it('should create a PresoTipo and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const PresoTipo: CreatePresoTipoDto = mockRegistry;

      const createdPresoTipo = await controller.create(PresoTipo);

      expect(createdPresoTipo).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(PresoTipo);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all PresoTipo', () => {
    it('should search all PresoTipo and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const PresoTipo = await controller.findAll();

      expect(PresoTipo).toHaveLength(1);
      expect(PresoTipo).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search PresoTipo by id', () => {
    it('should find a existing PresoTipo and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const PresoTipo = await controller.findById('1');

      expect(PresoTipo).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a PresoTipo', () => {
    it('should update a existing PresoTipo and return it', async () => {
      const PresoTipoUpdate: UpdatePresoTipoDto = mockRegistry;
      PresoTipoUpdate.presotipo = 'Update PresoTipo ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...PresoTipoUpdate,
      });

      const updatedPresoTipo = await controller.update('1', PresoTipoUpdate);

      expect(updatedPresoTipo).toMatchObject(PresoTipoUpdate);
      expect(mockService.update).toBeCalledWith('1', PresoTipoUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a PresoTipo', () => {
    it('should delete a existing PresoTipo', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
