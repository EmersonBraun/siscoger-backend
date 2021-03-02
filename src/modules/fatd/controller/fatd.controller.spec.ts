import { Test, TestingModule } from '@nestjs/testing';
import { CreateFatdDto, UpdateFatdDto } from '../dtos';
import { fakerRegistry } from '../factory/fatd.factory';
import { FatdService } from '../service/fatd.service';
import { FatdController } from './fatd.controller';

describe('FatdController', () => {
  let controller: FatdController;
  let mockRegistry: CreateFatdDto;

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
      controllers: [FatdController],
      providers: [{ provide: FatdService, useValue: mockService }],
    }).compile();

    controller = module.get<FatdController>(FatdController);
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

  describe('when create Fatd', () => {
    it('should create a Fatd and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Fatd: CreateFatdDto = mockRegistry;

      const createdFatd = await controller.create(Fatd);

      expect(createdFatd).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Fatd);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Fatd', () => {
    it('should search all Fatd and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Fatd = await controller.findAll();

      expect(Fatd).toHaveLength(1);
      expect(Fatd).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Fatd by id', () => {
    it('should find a existing Fatd and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Fatd = await controller.findById('1');

      expect(Fatd).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Fatd', () => {
    it('should update a existing Fatd and return it', async () => {
      const FatdUpdate: UpdateFatdDto = mockRegistry;
      FatdUpdate.cdopm = 'Update Fatd ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...FatdUpdate,
      });

      const updatedFatd = await controller.update('1', FatdUpdate);

      expect(updatedFatd).toMatchObject(FatdUpdate);
      expect(mockService.update).toBeCalledWith('1', FatdUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Fatd', () => {
    it('should delete a existing Fatd', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
