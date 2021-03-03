import { Test, TestingModule } from '@nestjs/testing';
import { CreateSaiDto, UpdateSaiDto } from '../dtos';
import { fakerRegistry } from '../factory/sai.factory';
import { SaiService } from '../service/sai.service';
import { SaiController } from './sai.controller';

describe('SaiController', () => {
  let controller: SaiController;
  let mockRegistry: CreateSaiDto;

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
      controllers: [SaiController],
      providers: [{ provide: SaiService, useValue: mockService }],
    }).compile();

    controller = module.get<SaiController>(SaiController);
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

  describe('when create Sai', () => {
    it('should create a Sai and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Sai: CreateSaiDto = mockRegistry;

      const createdSai = await controller.create(Sai);

      expect(createdSai).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Sai);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Sai', () => {
    it('should search all Sai and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Sai = await controller.findAll();

      expect(Sai).toHaveLength(1);
      expect(Sai).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Sai by id', () => {
    it('should find a existing Sai and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Sai = await controller.findById('1');

      expect(Sai).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Sai', () => {
    it('should update a existing Sai and return it', async () => {
      const SaiUpdate: UpdateSaiDto = mockRegistry;
      SaiUpdate.cdopm = 'Update Sai ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...SaiUpdate,
      });

      const updatedSai = await controller.update('1', SaiUpdate);

      expect(updatedSai).toMatchObject(SaiUpdate);
      expect(mockService.update).toBeCalledWith('1', SaiUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Sai', () => {
    it('should delete a existing Sai', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
