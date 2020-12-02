import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateMotivoconselhoDto, UpdateMotivoconselhoDto } from '../dtos';
import { fakerRegistry } from '../factory/motivoconselho.factory';
import { Motivoconselho } from '../entity/motivoconselho.entity';
import { MotivoconselhoService } from './motivoconselho.service';

describe('MotivoconselhoService', () => {
  let service: MotivoconselhoService;
  let mockRegistry: CreateMotivoconselhoDto;

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
        MotivoconselhoService,
        { provide: getRepositoryToken(Motivoconselho), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<MotivoconselhoService>(MotivoconselhoService);
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
  describe('when create Motivoconselho', () => {
    it('should create a Motivoconselho', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const Motivoconselho: CreateMotivoconselhoDto = mockRegistry;

      const savedMotivoconselho = await service.create(Motivoconselho);

      expect(savedMotivoconselho).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(Motivoconselho);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all Motivoconselho', () => {
    it('should list all Motivoconselho', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const Motivoconselho = await service.findAll();

      expect(Motivoconselho).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  describe('when search Motivoconselho by id', () => {
    it('should find a existing Motivoconselho', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const Motivoconselho = await service.findById('1');

      expect(Motivoconselho).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a Motivoconselho', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a Motivoconselho', () => {
    it('should update a existing Motivoconselho', async () => {
      const MotivoconselhoUpdate: UpdateMotivoconselhoDto = mockRegistry;
      MotivoconselhoUpdate.motivoconselho = 'Update Motivoconselho '

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...MotivoconselhoUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...MotivoconselhoUpdate,
      });

      const updatedMotivoconselho = await service.update(
        '1',
        MotivoconselhoUpdate,
      );

      expect(updatedMotivoconselho).toMatchObject(MotivoconselhoUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', MotivoconselhoUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...MotivoconselhoUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a Motivoconselho', () => {
    it('should delete a existing Motivoconselho', async () => {
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