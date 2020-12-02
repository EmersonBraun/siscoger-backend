import { Test, TestingModule } from '@nestjs/testing';
import { CreateAdlDto, UpdateAdlDto } from '../dtos';
import { fakerRegistry } from '../factory/adl.factory';
import { AdlService } from '../service/adl.service';
import { AdlController } from './adl.controller';

describe('AdlController', () => {
  let controller: AdlController;
  let mockRegistry: CreateAdlDto;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdlController],
      providers: [{ provide: AdlService, useValue: mockService }],
    }).compile();

    controller = module.get<AdlController>(AdlController);
    mockRegistry = fakerRegistry()
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

  describe('when create Adl', () => {
    it('should create a Adl and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Adl: CreateAdlDto = mockRegistry;

      const createdAdl = await controller.create(Adl);

      expect(createdAdl).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Adl);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Adl', () => {
    it('should search all Adl and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Adl = await controller.findAll();

      expect(Adl).toHaveLength(1);
      expect(Adl).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Adl by id', () => {
    it('should find a existing Adl and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Adl = await controller.findById('1');

      expect(Adl).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Adl', () => {
    it('should update a existing Adl and return it', async () => {
      const AdlUpdate: UpdateAdlDto = mockRegistry;
      AdlUpdate.doc_numero = 'Update Adl '

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...AdlUpdate,
      });

      const updatedAdl = await controller.update(
        '1',
        AdlUpdate,
      );

      expect(updatedAdl).toMatchObject(AdlUpdate);
      expect(mockService.update).toBeCalledWith(
        '1',
        AdlUpdate,
      );
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Adl', () => {
    it('should delete a existing Adl', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});