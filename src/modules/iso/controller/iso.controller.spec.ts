import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheModule } from '../../cache/redis-cache.module';
import { CreateIsoDto, UpdateIsoDto } from '../dtos';
import { fakerRegistry } from '../factory/iso.factory';
import { IsoService } from '../service/iso.service';
import { IsoController } from './iso.controller';

describe('IsoController', () => {
  let controller: IsoController;
  let mockRegistry: CreateIsoDto;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RedisCacheModule],
      controllers: [IsoController],
      providers: [{ provide: IsoService, useValue: mockService }],
    }).compile();

    controller = module.get<IsoController>(IsoController);
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

  describe('when create iso', () => {
    it('should create a iso and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const iso: CreateIsoDto = mockRegistry;

      const createdIso = await controller.create(iso);

      expect(createdIso).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(iso);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Iso', () => {
    it('should search all Iso and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Iso = await controller.findAll();

      expect(Iso).toHaveLength(1);
      expect(Iso).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search iso by id', () => {
    it('should find a existing iso and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const iso = await controller.findById('1');

      expect(iso).toMatchObject(mockRegistry);
      expect(iso).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a iso', () => {
    it('should update a existing iso and return it', async () => {
      const isoUpdate: UpdateIsoDto = mockRegistry;
      isoUpdate.sintese_txt = 'Update iso ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...isoUpdate,
      });

      const updatediso = await controller.update('1', isoUpdate);

      expect(updatediso).toMatchObject(isoUpdate);
      expect(mockService.update).toBeCalledWith('1', isoUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a iso', () => {
    it('should delete a existing iso', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
