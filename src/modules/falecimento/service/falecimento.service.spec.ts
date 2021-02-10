import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateFalecimentoDto, UpdateFalecimentoDto } from '../dtos';
import { fakerRegistry } from '../factory/falecimento.factory';
import { Falecimento } from '../entity/falecimento.entity';
import { FalecimentoService } from './falecimento.service';

describe('FalecimentoService', () => {
  let service: FalecimentoService;
  let mockRegistry: CreateFalecimentoDto;

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
        FalecimentoService,
        { provide: getRepositoryToken(Falecimento), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<FalecimentoService>(FalecimentoService);
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
  describe('when create Falecimento', () => {
    it('should create a Falecimento', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const FalecimentoVariable: CreateFalecimentoDto = mockRegistry;

      const savedFalecimento = await service.create(FalecimentoVariable);

      expect(savedFalecimento).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(Falecimento);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all Falecimento', () => {
    it('should list all Falecimento', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const FalecimentoVariable = await service.findAll();

      expect(FalecimentoVariable).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  describe('when search Falecimento by id', () => {
    it('should find a existing Falecimento', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const FalecimentoVariable = await service.findById('1');

      expect(FalecimentoVariable).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a Falecimento', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a Falecimento', () => {
    it('should update a existing Falecimento', async () => {
      const FalecimentoUpdate: UpdateFalecimentoDto = mockRegistry;
      FalecimentoUpdate.cargo = 'Update Falecimento ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...FalecimentoUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...FalecimentoUpdate,
      });

      const updatedFalecimento = await service.update('1', FalecimentoUpdate);

      expect(updatedFalecimento).toMatchObject(FalecimentoUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', FalecimentoUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...FalecimentoUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a Falecimento', () => {
    it('should delete a existing Falecimento', async () => {
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
