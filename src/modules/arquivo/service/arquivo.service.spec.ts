import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateArquivoDto, UpdateArquivoDto } from '../dtos';
import { Arquivo } from '../entity/arquivo.entity';
import { fakerRegistry } from '../factory/arquivo.factory';
import { ArquivoService } from './arquivo.service';

describe('ArquivoService', () => {
  let service: ArquivoService;
  let mockRegistry: CreateArquivoDto;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    search: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArquivoService,
        { provide: getRepositoryToken(Arquivo), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<ArquivoService>(ArquivoService);
    mockRegistry = fakerRegistry();
  });

  beforeEach(() => {
    mockRepository.create.mockReset();
    mockRepository.save.mockReset();
    mockRepository.search.mockReset();
    mockRepository.find.mockReset();
    mockRepository.findOne.mockReset();
    mockRepository.update.mockReset();
    mockRepository.delete.mockReset();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('when create Arquivo', () => {
    it('should create a Arquivo', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const ArquivoVariable: CreateArquivoDto = mockRegistry;

      const savedArquivo = await service.create(ArquivoVariable);

      expect(savedArquivo).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(Arquivo);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all Arquivo', () => {
    it('should list all Arquivo', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const ArquivoVariable = await service.findAll();

      expect(ArquivoVariable).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  describe('when search Arquivo by id', () => {
    it('should find a existing Arquivo', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const ArquivoVariable = await service.findById('1');

      expect(ArquivoVariable).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a Arquivo', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a Arquivo', () => {
    it('should update a existing Arquivo', async () => {
      const ArquivoUpdate: UpdateArquivoDto = mockRegistry;
      ArquivoUpdate.nome = 'Update Arquivo ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...ArquivoUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...ArquivoUpdate,
      });

      const updatedArquivo = await service.update('1', ArquivoUpdate);

      expect(updatedArquivo).toMatchObject(ArquivoUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', ArquivoUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...ArquivoUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a Arquivo', () => {
    it('should delete a existing Arquivo', async () => {
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
