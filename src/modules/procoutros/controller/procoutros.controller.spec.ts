import { Test, TestingModule } from '@nestjs/testing';
import { CreateProcOutrosDto, UpdateProcOutrosDto } from '../dtos';
import { fakerRegistry } from '../factory/procoutros.factory';
import { ProcOutrosService } from '../service/procoutros.service';
import { ProcOutrosController } from './procoutros.controller';

describe('ProcOutrosController', () => {
  let controller: ProcOutrosController;
  let mockRegistry: CreateProcOutrosDto;

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
      controllers: [ProcOutrosController],
      providers: [{ provide: ProcOutrosService, useValue: mockService }],
    }).compile();

    controller = module.get<ProcOutrosController>(ProcOutrosController);
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

  describe('when create ProcOutros', () => {
    it('should create a ProcOutros and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const ProcOutros: CreateProcOutrosDto = mockRegistry;

      const createdProcOutros = await controller.create(ProcOutros);

      expect(createdProcOutros).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(ProcOutros);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all ProcOutros', () => {
    it('should search all ProcOutros and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const ProcOutros = await controller.findAll();

      expect(ProcOutros).toHaveLength(1);
      expect(ProcOutros).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search ProcOutros by id', () => {
    it('should find a existing ProcOutros and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const ProcOutros = await controller.findById('1');

      expect(ProcOutros).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a ProcOutros', () => {
    it('should update a existing ProcOutros and return it', async () => {
      const ProcOutrosUpdate: UpdateProcOutrosDto = mockRegistry;
      ProcOutrosUpdate.cdopm = 'Update ProcOutros ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...ProcOutrosUpdate,
      });

      const updatedProcOutros = await controller.update('1', ProcOutrosUpdate);

      expect(updatedProcOutros).toMatchObject(ProcOutrosUpdate);
      expect(mockService.update).toBeCalledWith('1', ProcOutrosUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a ProcOutros', () => {
    it('should delete a existing ProcOutros', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
