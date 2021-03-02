import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateExclusaoJudicialDto, UpdateExclusaoJudicialDto } from '../dtos';
import ExclusaoJudicial from '../entity/exclusaojudicial.entity';
import { fakerRegistry } from '../factory/exclusaojudicial.factory';
import { ExclusaoJudicialService } from './exclusaojudicial.service';

describe('ExclusaoJudicialService', () => {
  let service: ExclusaoJudicialService;
  let mockRegistry: CreateExclusaoJudicialDto;

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
        ExclusaoJudicialService,
        {
          provide: getRepositoryToken(ExclusaoJudicial),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ExclusaoJudicialService>(ExclusaoJudicialService);
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
  describe('when create ExclusaoJudicial', () => {
    it('should create a ExclusaoJudicial', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const exclusaoJudicial: CreateExclusaoJudicialDto = mockRegistry;

      const savedExclusaoJudicial = await service.create(exclusaoJudicial);

      expect(savedExclusaoJudicial).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(exclusaoJudicial);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all ExclusaoJudicial', () => {
    it('should list all ExclusaoJudicial', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const exclusaoJudicial = await service.findAll();

      expect(exclusaoJudicial).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  // describe('when search one exclusaoJudicial', () => {
  //   it('should list one exclusaoJudicial', async () => {
  //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  //     const exclusaoJudicialUpdate: UpdateexclusaoJudicialDto = mockRegistry;
  //     const exclusaoJudicial = await service.search(exclusaoJudicialUpdate);

  //     expect(exclusaoJudicial).toMatchObject(mockRegistry);
  //     expect(mockRepository.find).toBeCalledTimes(1);
  //   });
  // });

  describe('when search ExclusaoJudicial by id', () => {
    it('should find a existing ExclusaoJudicial', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const exclusaoJudicial = await service.findById('1');

      expect(exclusaoJudicial).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a ExclusaoJudicial', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a ExclusaoJudicial', () => {
    it('should update a existing ExclusaoJudicial', async () => {
      const ExclusaoJudicialUpdate: UpdateExclusaoJudicialDto = mockRegistry;
      ExclusaoJudicialUpdate.rg = 'Update ExclusaoJudicial ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...ExclusaoJudicialUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...ExclusaoJudicialUpdate,
      });

      const updatedExclusaoJudicial = await service.update(
        '1',
        ExclusaoJudicialUpdate,
      );

      expect(updatedExclusaoJudicial).toMatchObject(ExclusaoJudicialUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', ExclusaoJudicialUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...ExclusaoJudicialUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a ExclusaoJudicial', () => {
    it('should delete a existing ExclusaoJudicial', async () => {
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
