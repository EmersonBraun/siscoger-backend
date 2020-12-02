import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateSobrestamentoDto, UpdateSobrestamentoDto } from '../dtos';
import { fakerRegistry } from '../factory/sobrestamento.factory';
import { Sobrestamento } from '../entity/sobrestamento.entity';
import { SobrestamentoService } from './sobrestamento.service';

describe('SobrestamentoService', () => {
  let service: SobrestamentoService;
  let mockRegistry: CreateSobrestamentoDto;

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
        SobrestamentoService,
        { provide: getRepositoryToken(Sobrestamento), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<SobrestamentoService>(SobrestamentoService);
    mockRegistry = fakerRegistry()
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
  describe('when create Sobrestamento', () => {
    it('should create a Sobrestamento', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const Sobrestamento: CreateSobrestamentoDto = mockRegistry;

      const savedSobrestamento = await service.create(Sobrestamento);

      expect(savedSobrestamento).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(Sobrestamento);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all Sobrestamento', () => {
    it('should list all Sobrestamento', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const Sobrestamento = await service.findAll();

      expect(Sobrestamento).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  // describe('when search one Sobrestamento', () => {
  //   it('should list one Sobrestamento', async () => {
  //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  //     const SobrestamentoUpdate: UpdateSobrestamentoDto = mockRegistry;
  //     const Sobrestamento = await service.search(SobrestamentoUpdate);

  //     expect(Sobrestamento).toMatchObject(mockRegistry);
  //     expect(mockRepository.find).toBeCalledTimes(1);
  //   });
  // });

  describe('when search Sobrestamento by id', () => {
    it('should find a existing Sobrestamento', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const Sobrestamento = await service.findById('1');

      expect(Sobrestamento).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a Sobrestamento', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a Sobrestamento', () => {
    it('should update a existing Sobrestamento', async () => {
      const SobrestamentoUpdate: UpdateSobrestamentoDto = mockRegistry;
      SobrestamentoUpdate.publicacao_inicio = 'Update Sobrestamento '

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...SobrestamentoUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...SobrestamentoUpdate,
      });

      const updatedSobrestamento = await service.update(
        '1',
        SobrestamentoUpdate,
      );

      expect(updatedSobrestamento).toMatchObject(SobrestamentoUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', SobrestamentoUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...SobrestamentoUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a Sobrestamento', () => {
    it('should delete a existing Sobrestamento', async () => {
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