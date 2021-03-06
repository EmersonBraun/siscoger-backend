import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateComportamentoDto, UpdateComportamentoDto } from '../dtos';
import { Comportamento } from '../entity/comportamento.entity';
import { fakerRegistry } from '../factory/comportamento.factory';
import { ComportamentoService } from './comportamento.service';

describe('ComportamentoService', () => {
  let service: ComportamentoService;
  let mockRegistry: CreateComportamentoDto;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ComportamentoService,
        {
          provide: getRepositoryToken(Comportamento),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ComportamentoService>(ComportamentoService);
    mockRegistry = fakerRegistry();
  });

  beforeEach(() => {
    mockRepository.create.mockReset();
    mockRepository.save.mockReset();
    mockRepository.find.mockReset();
    mockRepository.findOne.mockReset();
    mockRepository.update.mockReset();
    mockRepository.delete.mockReset();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // need to solve
  describe('when create Comportamento', () => {
    it('should create a Comportamento', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const ComportamentoVariable: CreateComportamentoDto = mockRegistry;

      const savedComportamento = await service.create(ComportamentoVariable);

      expect(savedComportamento).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(ComportamentoVariable);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all Comportamento', () => {
    it('should list all Comportamento', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const ComportamentoVariable = await service.findAll();

      expect(ComportamentoVariable).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  describe('when search Comportamento by id', () => {
    it('should find a existing Comportamento', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const ComportamentoVariable = await service.findById('1');

      expect(ComportamentoVariable).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a Comportamento', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a Comportamento', () => {
    it('should update a existing Comportamento', async () => {
      const ComportamentoUpdate: UpdateComportamentoDto = mockRegistry;
      ComportamentoUpdate.comportamento = 'Update Comportamento ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...ComportamentoUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...ComportamentoUpdate,
      });

      const updatedComportamento = await service.update(
        '1',
        ComportamentoUpdate,
      );

      expect(updatedComportamento).toMatchObject(ComportamentoUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', ComportamentoUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...ComportamentoUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a Comportamento', () => {
    it('should delete a existing Comportamento', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.delete.mockReturnValue(mockRegistry);

      await service.delete('1');

      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.delete).toBeCalledWith('1');
      expect(mockRepository.delete).toBeCalledTimes(1);
    });
  });
});
