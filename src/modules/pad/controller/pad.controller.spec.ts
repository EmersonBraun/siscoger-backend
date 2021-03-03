import { Test, TestingModule } from '@nestjs/testing';
import { CreatePadDto, UpdatePadDto } from '../dtos';
import { fakerRegistry } from '../factory/pad.factory';
import { PadService } from '../service/pad.service';
import { PadController } from './pad.controller';

describe('PadController', () => {
  let controller: PadController;
  let mockRegistry: CreatePadDto;

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
      controllers: [PadController],
      providers: [{ provide: PadService, useValue: mockService }],
    }).compile();

    controller = module.get<PadController>(PadController);
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

  describe('when create Pad', () => {
    it('should create a Pad and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Pad: CreatePadDto = mockRegistry;

      const createdPad = await controller.create(Pad);

      expect(createdPad).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Pad);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Pad', () => {
    it('should search all Pad and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Pad = await controller.findAll();

      expect(Pad).toHaveLength(1);
      expect(Pad).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Pad by id', () => {
    it('should find a existing Pad and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Pad = await controller.findById('1');

      expect(Pad).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Pad', () => {
    it('should update a existing Pad and return it', async () => {
      const PadUpdate: UpdatePadDto = mockRegistry;
      PadUpdate.cdopm = 'Update Pad ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...PadUpdate,
      });

      const updatedPad = await controller.update('1', PadUpdate);

      expect(updatedPad).toMatchObject(PadUpdate);
      expect(mockService.update).toBeCalledWith('1', PadUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Pad', () => {
    it('should delete a existing Pad', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
