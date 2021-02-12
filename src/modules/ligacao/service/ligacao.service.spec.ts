import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateLigacaoDto, UpdateLigacaoDto } from '../dtos';
import { Ligacao } from '../entity/ligacao.entity';
import { fakerRegistry } from '../factory/ligacao.factory';
import { LigacaoService } from './ligacao.service';

describe('LigacaoService', () => {
  let service: LigacaoService;
  let mockRegistry: CreateLigacaoDto;

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
        LigacaoService,
        { provide: getRepositoryToken(Ligacao), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<LigacaoService>(LigacaoService);
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

  // need to solve
  describe('when create Ligacao', () => {
    it('should create a Ligacao', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const LigacaoVariable: CreateLigacaoDto = mockRegistry;

      const savedLigacao = await service.create(LigacaoVariable);

      expect(savedLigacao).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(LigacaoVariable);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all Ligacao', () => {
    it('should list all Ligacao', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const LigacaoVariable = await service.findAll();

      expect(LigacaoVariable).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  // describe('when search one Ligacao', () => {
  //   it('should list one Ligacao', async () => {
  //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  //     const LigacaoUpdate: UpdateLigacaoDto = mockRegistry;
  //     const Ligacao = await service.search(LigacaoUpdate);

  //     expect(Ligacao).toMatchObject(mockRegistry);
  //     expect(mockRepository.find).toBeCalledTimes(1);
  //   });
  // });

  describe('when search Ligacao by id', () => {
    it('should find a existing Ligacao', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const LigacaoVariable = await service.findById('1');

      expect(LigacaoVariable).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a Ligacao', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a Ligacao', () => {
    it('should update a existing Ligacao', async () => {
      const LigacaoUpdate: UpdateLigacaoDto = mockRegistry;
      LigacaoUpdate.destino_proc = 'Update Ligacao ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...LigacaoUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...LigacaoUpdate,
      });

      const updatedLigacao = await service.update('1', LigacaoUpdate);

      expect(updatedLigacao).toMatchObject(LigacaoUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', LigacaoUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...LigacaoUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a Ligacao', () => {
    it('should delete a existing Ligacao', async () => {
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
