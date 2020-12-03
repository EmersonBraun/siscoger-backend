import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateApfdDto, UpdateApfdDto } from '../dtos';
import { Apfd } from '../entity/apfd.entity';
import { fakerRegistry } from '../factory/apfd.factory';
import { ApfdService } from './apfd.service';

describe('ApfdService', () => {
  let service: ApfdService;
  let mockRegistry: CreateApfdDto;

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
        ApfdService,
        { provide: getRepositoryToken(Apfd), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<ApfdService>(ApfdService);
    mockRegistry = fakerRegistry()
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

  describe('when create Apfd', () => {
    it('should create a Apfd', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const Apfd: CreateApfdDto = mockRegistry;

      const savedApfd = await service.create(Apfd);

      expect(savedApfd).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(Apfd);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all Apfd', () => {
    it('should list all Apfd', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const Apfd = await service.findAll();

      expect(Apfd).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  describe('when search Apfd by id', () => {
    it('should find a existing Apfd', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const Apfd = await service.findById('1');

      expect(Apfd).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a Apfd', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a Apfd', () => {
    it('should update a existing Apfd', async () => {
      const ApfdUpdate: UpdateApfdDto = mockRegistry;
      ApfdUpdate.doc_numero = 'Update Apfd '

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...ApfdUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...ApfdUpdate,
      });

      const updatedApfd = await service.update(
        '1',
        ApfdUpdate,
      );

      expect(updatedApfd).toMatchObject(ApfdUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', ApfdUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...ApfdUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a Apfd', () => {
    it('should delete a existing Apfd', async () => {
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