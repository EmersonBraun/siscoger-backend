import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreatePresoTipoDto, UpdatePresoTipoDto } from '../dtos';
import PresoTipo from '../entity/presotipo.entity';
import { fakerRegistry } from '../factory/presotipo.factory';
import { PresoTipoService } from './presotipo.service';

describe('PresoTipoService', () => {
  let service: PresoTipoService;
  let mockRegistry: CreatePresoTipoDto;

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
        PresoTipoService,
        { provide: getRepositoryToken(PresoTipo), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<PresoTipoService>(PresoTipoService);
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
  describe('when create PresoTipo', () => {
    it('should create a PresoTipo', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const presotipo: CreatePresoTipoDto = mockRegistry;

      const savedPresoTipo = await service.create(presotipo);

      expect(savedPresoTipo).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(presotipo);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all PresoTipo', () => {
    it('should list all PresoTipo', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const presotipo = await service.findAll();

      expect(presotipo).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  // describe('when search one PresoTipo', () => {
  //   it('should list one PresoTipo', async () => {
  //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  //     const PresoTipoUpdate: UpdatePresoTipoDto = mockRegistry;
  //     const PresoTipo = await service.search(PresoTipoUpdate);

  //     expect(PresoTipo).toMatchObject(mockRegistry);
  //     expect(mockRepository.find).toBeCalledTimes(1);
  //   });
  // });

  describe('when search PresoTipo by id', () => {
    it('should find a existing PresoTipo', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const presotipo = await service.findById('1');

      expect(presotipo).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a PresoTipo', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a PresoTipo', () => {
    it('should update a existing PresoTipo', async () => {
      const PresoTipoUpdate: UpdatePresoTipoDto = mockRegistry;
      PresoTipoUpdate.presotipo = 'Update PresoTipo ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...PresoTipoUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...PresoTipoUpdate,
      });

      const updatedPresoTipo = await service.update('1', PresoTipoUpdate);

      expect(updatedPresoTipo).toMatchObject(PresoTipoUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', PresoTipoUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...PresoTipoUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a PresoTipo', () => {
    it('should delete a existing PresoTipo', async () => {
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
