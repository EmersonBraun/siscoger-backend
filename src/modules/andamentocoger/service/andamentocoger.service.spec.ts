import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateAndamentocogerDto, UpdateAndamentocogerDto } from '../dtos';
import { fakerRegistry } from '../factory/andamentocoger.factory';
import { Andamentocoger } from '../entity/andamentocoger.entity';
import { AndamentocogerService } from './andamentocoger.service';

describe('AndamentocogerService', () => {
  let service: AndamentocogerService;
  let mockRegistry: CreateAndamentocogerDto;

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
        AndamentocogerService,
        { provide: getRepositoryToken(Andamentocoger), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<AndamentocogerService>(AndamentocogerService);
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

  // need to solve
  describe('when create Andamentocoger', () => {
    it('should create a Andamentocoger', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const Andamentocoger: CreateAndamentocogerDto = mockRegistry;

      const savedAndamentocoger = await service.create(Andamentocoger);

      expect(savedAndamentocoger).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(Andamentocoger);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all Andamentocoger', () => {
    it('should list all Andamentocoger', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const Andamentocoger = await service.findAll();

      expect(Andamentocoger).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  describe('when search Andamentocoger by id', () => {
    it('should find a existing Andamentocoger', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const Andamentocoger = await service.findById('1');

      expect(Andamentocoger).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a Andamentocoger', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a Andamentocoger', () => {
    it('should update a existing Andamentocoger', async () => {
      const AndamentocogerUpdate: UpdateAndamentocogerDto = mockRegistry;
      AndamentocogerUpdate.andamentocoger = 'Update Andamentocoger '

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...AndamentocogerUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...AndamentocogerUpdate,
      });

      const updatedAndamentocoger = await service.update(
        '1',
        AndamentocogerUpdate,
      );

      expect(updatedAndamentocoger).toMatchObject(AndamentocogerUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', AndamentocogerUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...AndamentocogerUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a Andamentocoger', () => {
    it('should delete a existing Andamentocoger', async () => {
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