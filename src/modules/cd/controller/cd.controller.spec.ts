import { Test, TestingModule } from '@nestjs/testing';
import { CreateCdDto, UpdateCdDto } from '../dtos';
import { fakerRegistry } from '../factory/cd.factory';
import { CdService } from '../service/cd.service';
import { CdController } from './cd.controller';

describe('CdController', () => {
  let controller: CdController;
  let mockRegistry: CreateCdDto;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CdController],
      providers: [{ provide: CdService, useValue: mockService }],
    }).compile();

    controller = module.get<CdController>(CdController);
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

  describe('when create CD', () => {
    it('should create a CD and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const cdVariable: CreateCdDto = mockRegistry;

      const createdCd = await controller.create(cdVariable);

      expect(createdCd).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(cdVariable);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all CD', () => {
    it('should search all CD and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const cdVariable = await controller.findAll();

      expect(cdVariable).toHaveLength(1);
      expect(cdVariable).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search CD by id', () => {
    it('should find a existing CD and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const cdVariable = await controller.findById('1');

      expect(cdVariable).toMatchObject(mockRegistry);
      expect(cdVariable).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a CD', () => {
    it('should update a existing CD and return it', async () => {
      const cdUpdate: UpdateCdDto = mockRegistry;
      cdUpdate.sintese_text = 'Update CD ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...cdUpdate,
      });

      const updatedcd = await controller.update('1', cdUpdate);

      expect(updatedcd).toMatchObject(cdUpdate);
      expect(mockService.update).toBeCalledWith('1', cdUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a CD', () => {
    it('should delete a existing CD', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
