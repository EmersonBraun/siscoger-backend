import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateAndamentoDto, UpdateAndamentoDto } from '../dtos';
import { Andamento } from '../entity/andamento.entity';
import { fakerRegistry } from '../factory/andamento.factory';
import { AndamentoService } from './andamento.service';

describe('AndamentoService', () => {
  let service: AndamentoService;
  let mockRegistry: CreateAndamentoDto;

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
        AndamentoService,
        { provide: getRepositoryToken(Andamento), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<AndamentoService>(AndamentoService);
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
  describe('when create Andamento', () => {
    it('should create a Andamento', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const AndamentoVariable: CreateAndamentoDto = mockRegistry;

      const savedAndamento = await service.create(AndamentoVariable);

      expect(savedAndamento).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(AndamentoVariable);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all Andamento', () => {
    it('should list all Andamento', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const AndamentoVariable = await service.findAll();

      expect(AndamentoVariable).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  describe('when search Andamento by id', () => {
    it('should find a existing Andamento', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const AndamentoVariable = await service.findById('1');

      expect(AndamentoVariable).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a Andamento', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a Andamento', () => {
    it('should update a existing Andamento', async () => {
      const AndamentoUpdate: UpdateAndamentoDto = mockRegistry;
      AndamentoUpdate.andamento = 'Update Andamento ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...AndamentoUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...AndamentoUpdate,
      });

      const updatedAndamento = await service.update('1', AndamentoUpdate);

      expect(updatedAndamento).toMatchObject(AndamentoUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', AndamentoUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...AndamentoUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a Andamento', () => {
    it('should delete a existing Andamento', async () => {
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
