import { Test, TestingModule } from '@nestjs/testing';
import { CreateReintegradoDto, UpdateReintegradoDto } from '../dtos';
import { fakerRegistry } from '../factory/reintegrado.factory';
import { ReintegradoService } from '../service/reintegrado.service';
import { ReintegradoController } from './reintegrado.controller';

describe('ReintegradoController', () => {
  let controller: ReintegradoController;
  let mockRegistry: CreateReintegradoDto;

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
      controllers: [ReintegradoController],
      providers: [{ provide: ReintegradoService, useValue: mockService }],
    }).compile();

    controller = module.get<ReintegradoController>(ReintegradoController);
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

  describe('when create Reintegrado', () => {
    it('should create a Reintegrado and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Reintegrado: CreateReintegradoDto = mockRegistry;

      const createdReintegrado = await controller.create(Reintegrado);

      expect(createdReintegrado).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Reintegrado);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Reintegrado', () => {
    it('should search all Reintegrado and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Reintegrado = await controller.findAll();

      expect(Reintegrado).toHaveLength(1);
      expect(Reintegrado).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Reintegrado by id', () => {
    it('should find a existing Reintegrado and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Reintegrado = await controller.findById('1');

      expect(Reintegrado).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Reintegrado', () => {
    it('should update a existing Reintegrado and return it', async () => {
      const ReintegradoUpdate: UpdateReintegradoDto = mockRegistry;
      ReintegradoUpdate.rg = 'Update Reintegrado ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...ReintegradoUpdate,
      });

      const updatedReintegrado = await controller.update(
        '1',
        ReintegradoUpdate,
      );

      expect(updatedReintegrado).toMatchObject(ReintegradoUpdate);
      expect(mockService.update).toBeCalledWith('1', ReintegradoUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Reintegrado', () => {
    it('should delete a existing Reintegrado', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
