import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateEnvolvidoDto, UpdateEnvolvidoDto } from '../dtos';
import { fakerRegistry } from '../factory/envolvido.factory';
import { Envolvido } from '../entity/envolvido.entity';
import { EnvolvidoService } from './envolvido.service';

describe('EnvolvidoService', () => {
  let service: EnvolvidoService;
  let mockRegistry: CreateEnvolvidoDto;

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
        EnvolvidoService,
        { provide: getRepositoryToken(Envolvido), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<EnvolvidoService>(EnvolvidoService);
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
  describe('when create Envolvido', () => {
    it('should create a Envolvido', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const Envolvido: CreateEnvolvidoDto = mockRegistry;

      const savedEnvolvido = await service.create(Envolvido);

      expect(savedEnvolvido).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(Envolvido);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all Envolvido', () => {
    it('should list all Envolvido', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const Envolvido = await service.findAll();

      expect(Envolvido).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  // describe('when search one Envolvido', () => {
  //   it('should list one Envolvido', async () => {
  //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  //     const EnvolvidoUpdate: UpdateEnvolvidoDto = mockRegistry;
  //     const Envolvido = await service.search(EnvolvidoUpdate);

  //     expect(Envolvido).toMatchObject(mockRegistry);
  //     expect(mockRepository.find).toBeCalledTimes(1);
  //   });
  // });

  describe('when search Envolvido by id', () => {
    it('should find a existing Envolvido', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const Envolvido = await service.findById('1');

      expect(Envolvido).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a Envolvido', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a Envolvido', () => {
    it('should update a existing Envolvido', async () => {
      const EnvolvidoUpdate: UpdateEnvolvidoDto = mockRegistry;
      EnvolvidoUpdate.cargo = 'Update Envolvido '

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...EnvolvidoUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...EnvolvidoUpdate,
      });

      const updatedEnvolvido = await service.update(
        '1',
        EnvolvidoUpdate,
      );

      expect(updatedEnvolvido).toMatchObject(EnvolvidoUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', EnvolvidoUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...EnvolvidoUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a Envolvido', () => {
    it('should delete a existing Envolvido', async () => {
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