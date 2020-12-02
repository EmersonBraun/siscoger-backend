import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateSindicanciaDto, UpdateSindicanciaDto } from '../dtos';
import { fakerRegistry } from '../factory/sindicancia.factory';
import { Sindicancia } from '../entity/sindicancia.entity';
import { SindicanciaService } from './sindicancia.service';

describe('SindicanciaService', () => {
  let service: SindicanciaService;
  let mockRegistry: CreateSindicanciaDto;

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
        SindicanciaService,
        { provide: getRepositoryToken(Sindicancia), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<SindicanciaService>(SindicanciaService);
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
  // describe('when create sindicancia', () => {
  //   it('should create a sindicancia', async () => {
  //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  //     const sindicancia: CreateSindicanciaDto = mockRegistry;

  //     const savedsindicancia = await service.create(sindicancia);

  //     expect(savedsindicancia).toMatchObject(mockRegistry);
  //     expect(mockRepository.create).toBeCalledWith(sindicancia);
  //     expect(mockRepository.create).toBeCalledTimes(1);
  //     expect(mockRepository.save).toBeCalledTimes(1);
  //   });
  // });

  describe('when search all Sindicancia', () => {
    it('should list all Sindicancia', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const Sindicancia = await service.findAll();

      expect(Sindicancia).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  // describe('when search one Sindicancia', () => {
  //   it('should list one Sindicancia', async () => {
  //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  //     const SindicanciaUpdate: UpdateSindicanciaDto = mockRegistry;
  //     const Sindicancia = await service.search(SindicanciaUpdate);

  //     expect(Sindicancia).toMatchObject(mockRegistry);
  //     expect(mockRepository.find).toBeCalledTimes(1);
  //   });
  // });

  describe('when search sindicancia by id', () => {
    it('should find a existing sindicancia', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const sindicancia = await service.findById('1');

      expect(sindicancia).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a sindicancia', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a sindicancia', () => {
    it('should update a existing sindicancia', async () => {
      const sindicanciaUpdate: UpdateSindicanciaDto = mockRegistry;
      sindicanciaUpdate.sintese_txt = 'Update sindicancia '

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...sindicanciaUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...sindicanciaUpdate,
      });

      const updatedsindicancia = await service.update(
        '1',
        sindicanciaUpdate,
      );

      expect(updatedsindicancia).toMatchObject(sindicanciaUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', sindicanciaUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...sindicanciaUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a sindicancia', () => {
    it('should delete a existing sindicancia', async () => {
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