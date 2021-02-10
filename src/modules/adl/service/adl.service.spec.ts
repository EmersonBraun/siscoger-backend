import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import {
  closeInMongodConnection,
  rootMongooseTestModule
} from '../../../../test/utils';
import { RedisCacheModule } from '../../cache/redis-cache.module';
import { LogModule } from '../../log/log.module';
import { CreateAdlDto, UpdateAdlDto } from '../dtos/index';
import Adl from '../entity/adl.entity';
import fakerRegistry from '../factory/adl.factory';
import { AdlService } from './adl.service';

describe('AdlService', () => {
  let service: AdlService;
  let mockRegistry: CreateAdlDto;

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
      imports: [rootMongooseTestModule(), RedisCacheModule, LogModule],
      providers: [
        AdlService,
        { provide: getRepositoryToken(Adl), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<AdlService>(AdlService);
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

  afterAll(async () => {
    await closeInMongodConnection();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('when create Adl', () => {
    it('should create a Adl', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const adl: CreateAdlDto = mockRegistry;
      console.log(service);
      const savedAdl = await service.create(adl);

      expect(savedAdl).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(adl);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all Adl', () => {
    it('should list all Adl', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const AdlVariable = await service.findAll();

      expect(AdlVariable).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  describe('when search Adl by id', () => {
    it('should find a existing Adl', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const AdlVariable = await service.findById('1');

      expect(AdlVariable).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a Adl', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a Adl', () => {
    it('should update a existing Adl', async () => {
      const AdlUpdate: UpdateAdlDto = mockRegistry;
      AdlUpdate.doc_numero = 'Update Adl ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...AdlUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...AdlUpdate,
      });

      const updatedAdl = await service.update('1', AdlUpdate);

      expect(updatedAdl).toMatchObject(AdlUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', AdlUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...AdlUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a Adl', () => {
    it('should delete a existing Adl', async () => {
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
