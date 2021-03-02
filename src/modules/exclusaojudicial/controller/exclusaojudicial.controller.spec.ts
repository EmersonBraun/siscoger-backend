import { Test, TestingModule } from '@nestjs/testing';
import { CreateExclusaoJudicialDto, UpdateExclusaoJudicialDto } from '../dtos';
import { fakerRegistry } from '../factory/exclusaojudicial.factory';
import { ExclusaoJudicialService } from '../service/exclusaojudicial.service';
import { ExclusaoJudicialController } from './exclusaojudicial.controller';

describe('ExclusaoJudicialController', () => {
  let controller: ExclusaoJudicialController;
  let mockRegistry: CreateExclusaoJudicialDto;

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
      controllers: [ExclusaoJudicialController],
      providers: [{ provide: ExclusaoJudicialService, useValue: mockService }],
    }).compile();

    controller = module.get<ExclusaoJudicialController>(
      ExclusaoJudicialController,
    );
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

  describe('when create ExclusaoJudicial', () => {
    it('should create a ExclusaoJudicial and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const ExclusaoJudicial: CreateExclusaoJudicialDto = mockRegistry;

      const createdExclusaoJudicial = await controller.create(ExclusaoJudicial);

      expect(createdExclusaoJudicial).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(ExclusaoJudicial);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all ExclusaoJudicial', () => {
    it('should search all ExclusaoJudicial and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const ExclusaoJudicial = await controller.findAll();

      expect(ExclusaoJudicial).toHaveLength(1);
      expect(ExclusaoJudicial).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search ExclusaoJudicial by id', () => {
    it('should find a existing ExclusaoJudicial and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const ExclusaoJudicial = await controller.findById('1');

      expect(ExclusaoJudicial).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a ExclusaoJudicial', () => {
    it('should update a existing ExclusaoJudicial and return it', async () => {
      const ExclusaoJudicialUpdate: UpdateExclusaoJudicialDto = mockRegistry;
      ExclusaoJudicialUpdate.rg = 'Update ExclusaoJudicial ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...ExclusaoJudicialUpdate,
      });

      const updatedExclusaoJudicial = await controller.update(
        '1',
        ExclusaoJudicialUpdate,
      );

      expect(updatedExclusaoJudicial).toMatchObject(ExclusaoJudicialUpdate);
      expect(mockService.update).toBeCalledWith('1', ExclusaoJudicialUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a ExclusaoJudicial', () => {
    it('should delete a existing ExclusaoJudicial', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
