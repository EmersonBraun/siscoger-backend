import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateCdDto, UpdateCdDto } from '../dtos';
import { Cd } from '../entity/cd.entity';
import { fakerRegister } from '../factory/cd.factory';
import { CdService } from './cd.service';

describe('CdService', () => {
  let service: CdService;
  let mockRegistry: CreateCdDto;

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
        CdService,
        { provide: getRepositoryToken(Cd), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<CdService>(CdService);
    mockRegistry = fakerRegister();
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

  describe('when create Cd', () => {
    it('should create a Cd', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const CdVariable: CreateCdDto = mockRegistry;

      const savedApfd = await service.create(CdVariable);

      expect(savedApfd).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(CdVariable);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all Cd', () => {
    it('should list all Cd', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const CdVariable = await service.findAll();

      expect(CdVariable).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  describe('when search Cd by id', () => {
    it('should find a existing Cd', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const CdVariable = await service.findById('1');

      expect(CdVariable).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a Cd', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a Cd', () => {
    it('should update a existing Cd', async () => {
      const CdUpdate: UpdateCdDto = mockRegistry;
      CdUpdate.doc_numero = 'Update Cd ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...CdUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...CdUpdate,
      });

      const updatedCd = await service.update('1', CdUpdate);

      expect(updatedCd).toMatchObject(CdUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', CdUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...CdUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a Cd', () => {
    it('should delete a existing Cd', async () => {
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
