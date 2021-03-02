import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreatePostoDto, UpdatePostoDto } from '../dtos';
import Posto from '../entity/posto.entity';
import { fakerRegistry } from '../factory/posto.factory';
import { PostoService } from './posto.service';

describe('PostoService', () => {
  let service: PostoService;
  let mockRegistry: CreatePostoDto;

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
        PostoService,
        { provide: getRepositoryToken(Posto), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<PostoService>(PostoService);
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
  describe('when create Posto', () => {
    it('should create a Posto', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      mockRepository.save.mockReturnValueOnce(mockRegistry);

      const posto: CreatePostoDto = mockRegistry;

      const savedPosto = await service.create(posto);

      expect(savedPosto).toMatchObject(mockRegistry);
      expect(mockRepository.create).toBeCalledWith(posto);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all Posto', () => {
    it('should list all Posto', async () => {
      mockRepository.find.mockReturnValue([mockRegistry]);

      const posto = await service.findAll();

      expect(posto).toHaveLength(1);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });

  // describe('when search one Posto', () => {
  //   it('should list one Posto', async () => {
  //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  //     const PostoUpdate: UpdatePostoDto = mockRegistry;
  //     const Posto = await service.search(PostoUpdate);

  //     expect(Posto).toMatchObject(mockRegistry);
  //     expect(mockRepository.find).toBeCalledTimes(1);
  //   });
  // });

  describe('when search Posto by id', () => {
    it('should find a existing Posto', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);

      const posto = await service.findById('1');

      expect(posto).toMatchObject(mockRegistry);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a Posto', async () => {
      mockRepository.findOne.mockReturnValue(null);

      await service.findById('3').catch(error => {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error).toMatchObject({ message: 'Registry not found' });
        expect(mockRepository.findOne).toBeCalledWith('3');
        expect(mockRepository.findOne).toBeCalledTimes(1);
      });
    });
  });

  describe('when update a Posto', () => {
    it('should update a existing Posto', async () => {
      const PostoUpdate: UpdatePostoDto = mockRegistry;
      PostoUpdate.posto = 'Update Posto ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...PostoUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...PostoUpdate,
      });

      const updatedPosto = await service.update('1', PostoUpdate);

      expect(updatedPosto).toMatchObject(PostoUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1');
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', PostoUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...PostoUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when delete a Posto', () => {
    it('should delete a existing Posto', async () => {
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
