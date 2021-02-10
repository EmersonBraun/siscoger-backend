import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateFeriadoDto, UpdateFeriadoDto } from '../dtos';
import { fakerRegistry } from '../factory/feriado.factory';
import { Feriado } from '../entity/feriado.entity';
import { FeriadoService } from './feriado.service';

describe('FeriadoService', () => {
  let service: FeriadoService;
  let mockRegistry: CreateFeriadoDto;

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
        FeriadoService,
        { provide: getRepositoryToken(Feriado), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<FeriadoService>(FeriadoService);
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
  describe('when create Feriado', () => {
    it('should create a Feriado', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const FeriadoVariable: CreateFeriadoDto = mockRegistry;

      const savedFeriado = await service.create(FeriadoVariable);

      expect(savedFeriado).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(Feriado);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all Feriado', () => {
    it('should list all Feriado', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const FeriadoVariable = await service.findAll();

      expect(FeriadoVariable).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  describe('when search Feriado by id', () => {
    it('should find a existing Feriado', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const FeriadoVariable = await service.findById('1');

      expect(FeriadoVariable).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a Feriado', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a Feriado', () => {
    it('should update a existing Feriado', async () => {
      const FeriadoUpdate: UpdateFeriadoDto = mockRegistry;
      FeriadoUpdate.feriado = 'Update Feriado ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...FeriadoUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...FeriadoUpdate,
      });

      const updatedFeriado = await service.update('1', FeriadoUpdate);

      expect(updatedFeriado).toMatchObject(FeriadoUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', FeriadoUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...FeriadoUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a Feriado', () => {
    it('should delete a existing Feriado', async () => {
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
