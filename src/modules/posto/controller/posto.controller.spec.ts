import { Test, TestingModule } from '@nestjs/testing';
import { CreatePostoDto, UpdatePostoDto } from '../dtos';
import { fakerRegistry } from '../factory/posto.factory';
import { PostoService } from '../service/posto.service';
import { PostoController } from './posto.controller';

describe('PostoController', () => {
  let controller: PostoController;
  let mockRegistry: CreatePostoDto;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    search: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostoController],
      providers: [{ provide: PostoService, useValue: mockService }],
    }).compile();

    controller = module.get<PostoController>(PostoController);
    mockRegistry = fakerRegistry();
  });

  beforeEach(() => {
    mockService.create.mockReset();
    mockService.findAll.mockReset();
    mockService.search.mockReset();
    mockService.findById.mockReset();
    mockService.update.mockReset();
    mockService.delete.mockReset();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('when create Posto', () => {
    it('should create a Posto and return it', async () => {
      mockService.create.mockReturnValue(mockRegistry);

      const Posto: CreatePostoDto = mockRegistry;

      const createdPosto = await controller.create(Posto);

      expect(createdPosto).toMatchObject(mockRegistry);
      expect(mockService.create).toBeCalledWith(Posto);
      expect(mockService.create).toBeCalledTimes(1);
    });
  });

  describe('when search all Posto', () => {
    it('should search all Posto and return them', async () => {
      mockService.findAll.mockReturnValue([mockRegistry]);

      const Posto = await controller.findAll();

      expect(Posto).toHaveLength(1);
      expect(Posto).toMatchObject([mockRegistry]);
      expect(mockService.findAll).toBeCalledTimes(1);
    });
  });

  describe('when search Posto by id', () => {
    it('should find a existing Posto and return it', async () => {
      mockService.findById.mockReturnValue(mockRegistry);

      const Posto = await controller.findById('1');

      expect(Posto).toMatchObject(mockRegistry);
      expect(mockService.findById).toBeCalledWith('1');
      expect(mockService.findById).toBeCalledTimes(1);
    });
  });

  describe('when update a Posto', () => {
    it('should update a existing Posto and return it', async () => {
      const PostoUpdate: UpdatePostoDto = mockRegistry;
      PostoUpdate.posto = 'Update Posto ';

      mockService.update.mockReturnValue({
        ...mockRegistry,
        ...PostoUpdate,
      });

      const updatedPosto = await controller.update('1', PostoUpdate);

      expect(updatedPosto).toMatchObject(PostoUpdate);
      expect(mockService.update).toBeCalledWith('1', PostoUpdate);
      expect(mockService.update).toBeCalledTimes(1);
    });
  });

  describe('when delete a Posto', () => {
    it('should delete a existing Posto', async () => {
      await controller.delete('1');

      expect(mockService.delete).toBeCalledWith('1');
      expect(mockService.delete).toBeCalledTimes(1);
    });
  });
});
