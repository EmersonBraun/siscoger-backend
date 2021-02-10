import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateMovimentoDto, UpdateMovimentoDto } from '../dtos';
import { fakerRegistry } from '../factory/movimento.factory';
import { Movimento } from '../entity/movimento.entity';
import { MovimentoService } from './movimento.service';

describe('MovimentoService', () => {
  let service: MovimentoService;
  let mockRegistry: CreateMovimentoDto;

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
        MovimentoService,
        { provide: getRepositoryToken(Movimento), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<MovimentoService>(MovimentoService);
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
  describe('when create Movimento', () => {
    it('should create a Movimento', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const MovimentoVariable: CreateMovimentoDto = mockRegistry;

      const savedMovimento = await service.create(MovimentoVariable);

      expect(savedMovimento).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(Movimento);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all Movimento', () => {
    it('should list all Movimento', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const MovimentoVariable = await service.findAll();

      expect(MovimentoVariable).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  // describe('when search one Movimento', () => {
  //   it('should list one Movimento', async () => {
  //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  //     const MovimentoUpdate: UpdateMovimentoDto = mockRegistry;
  //     const Movimento = await service.search(MovimentoUpdate);

  //     expect(Movimento).toMatchObject(mockRegistry);
  //     expect(mockRepository.find).toBeCalledTimes(1);
  //   });
  // });

  describe('when search Movimento by id', () => {
    it('should find a existing Movimento', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const MovimentoVariable = await service.findById('1');

      expect(MovimentoVariable).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a Movimento', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a Movimento', () => {
    it('should update a existing Movimento', async () => {
      const MovimentoUpdate: UpdateMovimentoDto = mockRegistry;
      MovimentoUpdate.descricao = 'Update Movimento ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...MovimentoUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...MovimentoUpdate,
      });

      const updatedMovimento = await service.update('1', MovimentoUpdate);

      expect(updatedMovimento).toMatchObject(MovimentoUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', MovimentoUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...MovimentoUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a Movimento', () => {
    it('should delete a existing Movimento', async () => {
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
