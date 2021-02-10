import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateOfendidoDto, UpdateOfendidoDto } from '../dtos';
import { fakerRegistry } from '../factory/ofendido.factory';
import { Ofendido } from '../entity/ofendido.entity';
import { OfendidoService } from './ofendido.service';

describe('OfendidoService', () => {
  let service: OfendidoService;
  let mockRegistry: CreateOfendidoDto;

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
        OfendidoService,
        { provide: getRepositoryToken(Ofendido), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<OfendidoService>(OfendidoService);
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
  describe('when create Ofendido', () => {
    it('should create a Ofendido', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const OfendidoVariable: CreateOfendidoDto = mockRegistry;

      const savedOfendido = await service.create(OfendidoVariable);

      expect(savedOfendido).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(Ofendido);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all Ofendido', () => {
    it('should list all Ofendido', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const OfendidoVariable = await service.findAll();

      expect(OfendidoVariable).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  // describe('when search one Ofendido', () => {
  //   it('should list one Ofendido', async () => {
  //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  //     const OfendidoUpdate: UpdateOfendidoDto = mockRegistry;
  //     const Ofendido = await service.search(OfendidoUpdate);

  //     expect(Ofendido).toMatchObject(mockRegistry);
  //     expect(mockRepository.find).toBeCalledTimes(1);
  //   });
  // });

  describe('when search Ofendido by id', () => {
    it('should find a existing Ofendido', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const OfendidoVariable = await service.findById('1');

      expect(OfendidoVariable).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a Ofendido', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a Ofendido', () => {
    it('should update a existing Ofendido', async () => {
      const OfendidoUpdate: UpdateOfendidoDto = mockRegistry;
      OfendidoUpdate.email = 'Update Ofendido ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...OfendidoUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...OfendidoUpdate,
      });

      const updatedOfendido = await service.update('1', OfendidoUpdate);

      expect(updatedOfendido).toMatchObject(OfendidoUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', OfendidoUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...OfendidoUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a Ofendido', () => {
    it('should delete a existing Ofendido', async () => {
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
