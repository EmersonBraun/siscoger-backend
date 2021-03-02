import { Test, TestingModule } from '@nestjs/testing';
import { CreateRespCivilDto, UpdateRespCivilDto } from '../dtos';
import { fakerRegistry } from '../factory/respcivil.factory';
import { RespCivilService } from '../service/respcivil.service';
import { RespCivilController } from './respcivil.controller';

describe('RespCivilController', () => {
  let controller: RespCivilController;
  let mockRegistry: CreateRespCivilDto;

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
      controllers: [RespCivilController],
      providers: [{ provide: RespCivilService, useValue: mockService }],
    }).compile();

    controller = module.get<RespCivilController>(RespCivilController);
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

  describe('when create RespCivil', () => {
    it('should create a RespCivil and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const RespCivil: CreateRespCivilDto = mockRegistry;

      const createdRespCivil = await controller.create(RespCivil);

      expect(createdRespCivil).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(RespCivil);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all RespCivil', () => {
    it('should search all RespCivil and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const RespCivil = await controller.findAll();

      expect(RespCivil).toHaveLength(1);
      expect(RespCivil).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search RespCivil by id', () => {
    it('should find a existing RespCivil and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const RespCivil = await controller.findById('1');

      expect(RespCivil).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a RespCivil', () => {
    it('should update a existing RespCivil and return it', async () => {
      const RespCivilUpdate: UpdateRespCivilDto = mockRegistry;
      RespCivilUpdate.resp_civil = 'Update RespCivil ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...RespCivilUpdate,
      });

      const updatedRespCivil = await controller.update('1', RespCivilUpdate);

      expect(updatedRespCivil).toMatchObject(RespCivilUpdate);
      expect(mockService.update).toBeCalledWith('1', RespCivilUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a RespCivil', () => {
    it('should delete a existing RespCivil', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
