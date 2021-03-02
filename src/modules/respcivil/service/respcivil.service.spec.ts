import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateRespCivilDto, UpdateRespCivilDto } from '../dtos';
import RespCivil from '../entity/respcivil.entity';
import { fakerRegistry } from '../factory/respcivil.factory';
import { RespCivilService } from './respcivil.service';

describe('RespCivilService', () => {
  let service: RespCivilService;
  let mockRegistry: CreateRespCivilDto;

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
        RespCivilService,
        { provide: getRepositoryToken(RespCivil), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<RespCivilService>(RespCivilService);
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
  describe('when create RespCivil', () => {
    it('should create a RespCivil', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const respCivil: CreateRespCivilDto = mockRegistry;

      const savedRespCivil = await service.create(respCivil);

      expect(savedRespCivil).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(respCivil);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all RespCivil', () => {
    it('should list all RespCivil', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const respCivil = await service.findAll();

      expect(respCivil).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  // describe('when search one RespCivil', () => {
  //   it('should list one RespCivil', async () => {
  //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  //     const RespCivilUpdate: UpdateRespCivilDto = mockRegistry;
  //     const RespCivil = await service.search(RespCivilUpdate);

  //     expect(RespCivil).toMatchObject(mockRegistry);
  //     expect(mockRepository.find).toBeCalledTimes(1);
  //   });
  // });

  describe('when search RespCivil by id', () => {
    it('should find a existing RespCivil', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const respCivil = await service.findById('1');

      expect(respCivil).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a RespCivil', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3', {
          withDeleted: true,
        });
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a RespCivil', () => {
    it('should update a existing RespCivil', async () => {
      const RespCivilUpdate: UpdateRespCivilDto = mockRegistry;
      RespCivilUpdate.resp_civil = 'Update RespCivil ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...RespCivilUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...RespCivilUpdate,
      });

      const updatedRespCivil = await service.update('1', RespCivilUpdate);

      expect(updatedRespCivil).toMatchObject(RespCivilUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', RespCivilUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...RespCivilUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a RespCivil', () => {
    it('should delete a existing RespCivil', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.delete.mockReturnValue(mockRegistry);

      await service.delete('1');

      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.delete).toBeCalledWith('1');
      expect(mockRepository.delete).toBeCalledTimes(1);
    });
  });
});
