import { Test, TestingModule } from '@nestjs/testing';
import { CreateDenunciaCivilDto, UpdateDenunciaCivilDto } from '../dtos';
import { fakerRegistry } from '../factory/denunciacivil.factory';
import { DenunciaCivilService } from '../service/denunciacivil.service';
import { DenunciaCivilController } from './denunciacivil.controller';

describe('DenunciaCivilController', () => {
  let controller: DenunciaCivilController;
  let mockRegistry: CreateDenunciaCivilDto;

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
      controllers: [DenunciaCivilController],
      providers: [{ provide: DenunciaCivilService, useValue: mockService }],
    }).compile();

    controller = module.get<DenunciaCivilController>(DenunciaCivilController);
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

  describe('when create DenunciaCivil', () => {
    it('should create a DenunciaCivil and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const DenunciaCivil: CreateDenunciaCivilDto = mockRegistry;

      const createdDenunciaCivil = await controller.create(DenunciaCivil);

      expect(createdDenunciaCivil).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(DenunciaCivil);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all DenunciaCivil', () => {
    it('should search all DenunciaCivil and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const DenunciaCivil = await controller.findAll();

      expect(DenunciaCivil).toHaveLength(1);
      expect(DenunciaCivil).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search DenunciaCivil by id', () => {
    it('should find a existing DenunciaCivil and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const DenunciaCivil = await controller.findById('1');

      expect(DenunciaCivil).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a DenunciaCivil', () => {
    it('should update a existing DenunciaCivil and return it', async () => {
      const DenunciaCivilUpdate: UpdateDenunciaCivilDto = mockRegistry;
      DenunciaCivilUpdate.rg = 'Update DenunciaCivil ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...DenunciaCivilUpdate,
      });

      const updatedDenunciaCivil = await controller.update(
        '1',
        DenunciaCivilUpdate,
      );

      expect(updatedDenunciaCivil).toMatchObject(DenunciaCivilUpdate);
      expect(mockService.update).toBeCalledWith('1', DenunciaCivilUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a DenunciaCivil', () => {
    it('should delete a existing DenunciaCivil', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
