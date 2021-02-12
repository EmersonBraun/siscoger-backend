import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateGradacaoDto, UpdateGradacaoDto } from '../dtos';
import { Gradacao } from '../entity/gradacao.entity';
import { fakerRegistry } from '../factory/gradacao.factory';
import { GradacaoService } from './gradacao.service';

describe('GradacaoService', () => {
  let service: GradacaoService;
  let mockRegistry: CreateGradacaoDto;

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
        GradacaoService,
        { provide: getRepositoryToken(Gradacao), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<GradacaoService>(GradacaoService);
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
  describe('when create Gradacao', () => {
    it('should create a Gradacao', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const GradacaoVariable: CreateGradacaoDto = mockRegistry;

      const savedGradacao = await service.create(GradacaoVariable);

      expect(savedGradacao).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(GradacaoVariable);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all Gradacao', () => {
    it('should list all Gradacao', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const GradacaoVariable = await service.findAll();

      expect(GradacaoVariable).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  describe('when search Gradacao by id', () => {
    it('should find a existing Gradacao', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const GradacaoVariable = await service.findById('1');

      expect(GradacaoVariable).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a Gradacao', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a Gradacao', () => {
    it('should update a existing Gradacao', async () => {
      const GradacaoUpdate: UpdateGradacaoDto = mockRegistry;
      GradacaoUpdate.gradacao = 'Update Gradacao ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...GradacaoUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...GradacaoUpdate,
      });

      const updatedGradacao = await service.update('1', GradacaoUpdate);

      expect(updatedGradacao).toMatchObject(GradacaoUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', GradacaoUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...GradacaoUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a Gradacao', () => {
    it('should delete a existing Gradacao', async () => {
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
