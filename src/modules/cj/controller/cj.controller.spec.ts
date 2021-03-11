import { Test, TestingModule } from '@nestjs/testing';
import { CreateCjDto, UpdateCjDto } from '../dtos';
import { fakerRegistry } from '../factory/cj.factory';
import { CjService } from '../service/cj.service';
import { CjController } from './cj.controller';

describe('CjController', () => {
  let controller: CjController;
  let mockRegistry: CreateCjDto;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CjController],
      providers: [{ provide: CjService, useValue: mockService }],
    }).compile();

    controller = module.get<CjController>(CjController);
    mockRegistry = fakerRegistry();
  });

  beforeEach(() => {
    mockService.create.mockReset();
    mockService.findAll.mockReset();
    mockService.findById.mockReset();
    mockService.update.mockReset();
    mockService.delete.mockReset();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('when create Cj', () => {
    it('should create a Cj and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const cjVariable: CreateCjDto = mockRegistry;

      const createdCj = await controller.create(cjVariable);

      expect(createdCj).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(cjVariable);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Cj', () => {
    it('should search all Cj and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const cjVariable = await controller.findAll();

      expect(cjVariable).toHaveLength(1);
      expect(cjVariable).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Cj by id', () => {
    it('should find a existing Cj and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const cjVariable = await controller.findById('1');

      expect(cjVariable).toMatchObject(mockRegistry);
      expect(cjVariable).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Cj', () => {
    it('should update a existing Cj and return it', async () => {
      const cjUpdate: UpdateCjDto = mockRegistry;
      cjUpdate.sintese_txt = 'Update Cj ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...cjUpdate,
      });

      const updatedcj = await controller.update('1', cjUpdate);

      expect(updatedcj).toMatchObject(cjUpdate);
      expect(mockService.update).toBeCalledWith('1', cjUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Cj', () => {
    it('should delete a existing Cj', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
