import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateSituacaoDto, UpdateSituacaoDto } from '../dtos';
import Situacao from '../entity/situacao.entity';
import { fakerRegistry } from '../factory/situacao.factory';
import { SituacaoService } from './situacao.service';

describe('SituacaoService', () => {
  let service: SituacaoService;
  let mockRegistry: CreateSituacaoDto;

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
        SituacaoService,
        { provide: getRepositoryToken(Situacao), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<SituacaoService>(SituacaoService);
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
  describe('when create Situacao', () => {
    it('should create a Situacao', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const situacao: CreateSituacaoDto = mockRegistry;

      const savedSituacao = await service.create(situacao);

      expect(savedSituacao).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(situacao);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all Situacao', () => {
    it('should list all Situacao', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const situacao = await service.findAll();

      expect(situacao).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  // describe('when search one Situacao', () => {
  //   it('should list one Situacao', async () => {
  //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  //     const SituacaoUpdate: UpdateSituacaoDto = mockRegistry;
  //     const Situacao = await service.search(SituacaoUpdate);

  //     expect(Situacao).toMatchObject(mockRegistry);
  //     expect(mockRepository.find).toBeCalledTimes(1);
  //   });
  // });

  describe('when search Situacao by id', () => {
    it('should find a existing Situacao', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const situacao = await service.findById('1');

      expect(situacao).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a Situacao', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a Situacao', () => {
    it('should update a existing Situacao', async () => {
      const SituacaoUpdate: UpdateSituacaoDto = mockRegistry;
      SituacaoUpdate.situacao = 'Update Situacao ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...SituacaoUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...SituacaoUpdate,
      });

      const updatedSituacao = await service.update('1', SituacaoUpdate);

      expect(updatedSituacao).toMatchObject(SituacaoUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', SituacaoUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...SituacaoUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a Situacao', () => {
    it('should delete a existing Situacao', async () => {
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
