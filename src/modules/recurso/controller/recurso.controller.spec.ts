import { Test, TestingModule } from '@nestjs/testing';
import { CreateRecursoDto, UpdateRecursoDto } from '../dtos';
import { fakerRegistry } from '../factory/recurso.factory';
import { RecursoService } from '../service/recurso.service';
import { RecursoController } from './recurso.controller';

describe('RecursoController', () => {
  let controller: RecursoController;
  let mockRegistry: CreateRecursoDto;

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
      controllers: [RecursoController],
      providers: [{ provide: RecursoService, useValue: mockService }],
    }).compile();

    controller = module.get<RecursoController>(RecursoController);
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

  describe('when create Recurso', () => {
    it('should create a Recurso and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Recurso: CreateRecursoDto = mockRegistry;

      const createdRecurso = await controller.create(Recurso);

      expect(createdRecurso).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Recurso);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Recurso', () => {
    it('should search all Recurso and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Recurso = await controller.findAll();

      expect(Recurso).toHaveLength(1);
      expect(Recurso).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Recurso by id', () => {
    it('should find a existing Recurso and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Recurso = await controller.findById('1');

      expect(Recurso).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Recurso', () => {
    it('should update a existing Recurso and return it', async () => {
      const RecursoUpdate: UpdateRecursoDto = mockRegistry;
      RecursoUpdate.cdopm = 'Update Recurso ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...RecursoUpdate,
      });

      const updatedRecurso = await controller.update('1', RecursoUpdate);

      expect(updatedRecurso).toMatchObject(RecursoUpdate);
      expect(mockService.update).toBeCalledWith('1', RecursoUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Recurso', () => {
    it('should delete a existing Recurso', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
