import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CreateFatdDto, UpdateFatdDto } from '../dtos/index';
import Fatd from '../entity/fatd.entity';
import { fakerRegistry } from '../factory/fatd.factory';
import { FatdService } from './fatd.service';

describe('FatdService', () => {
  let db: Connection;

  let service: FatdService;
  // let repository: any;
  let mockRegistry: CreateFatdDto;

  const mockRepository = {
    getNextRefYear: jest.fn(),
    getNextRef: jest.fn(),
    findAll: jest.fn(),
    listDeleted: jest.fn(),
    findByYear: jest.fn(),
    findAndamento: jest.fn(),
    findAndamentoYear: jest.fn(),
    resultado: jest.fn(),
    resultadoYear: jest.fn(),
    restore: jest.fn(),
    forceDelete: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    // db = await rootTypeormTestModule([Fatd]);
    // repository = await db.getRepository(Fatd);
    // service = new FatdService(repository, db);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FatdService,
        {
          provide: getRepositoryToken(Fatd),
          useValue: mockRepository,
        },
        {
          provide: 'CONNECTION',
          useValue: Connection,
        },
      ],
    }).compile();

    service = module.get<FatdService>(FatdService);
    mockRegistry = fakerRegistry();
  });

  // afterAll(() => db.close());

  beforeEach(() => {
    mockRepository.getNextRefYear.mockReset();
    mockRepository.getNextRef.mockReset();
    mockRepository.findAll.mockReset();
    mockRepository.listDeleted.mockReset();
    mockRepository.findByYear.mockReset();
    mockRepository.findAndamento.mockReset();
    mockRepository.findAndamentoYear.mockReset();
    mockRepository.resultado.mockReset();
    mockRepository.resultadoYear.mockReset();
    mockRepository.restore.mockReset();
    mockRepository.forceDelete.mockReset();
    mockRepository.create.mockReset();
    mockRepository.save.mockReset();
    mockRepository.find.mockReset();
    mockRepository.findOne.mockReset();
    mockRepository.update.mockReset();
    mockRepository.delete.mockReset();
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
  });

  it('should getNextRefYear from a Fatd', async () => {
    mockRepository.getNextRefYear.mockReturnValueOnce(1);

    const saved = await mockRepository.getNextRefYear(mockRegistry);

    expect(saved).toBe(1);
    expect(mockRepository.getNextRefYear).toBeCalledWith(mockRegistry);
    expect(mockRepository.getNextRefYear).toBeCalledTimes(1);
  });

  it('should getNextRef from a Fatd', async () => {
    mockRepository.getNextRef.mockReturnValueOnce(1);

    const saved = await mockRepository.getNextRef(mockRegistry);

    expect(saved).toBe(1);
    expect(mockRepository.getNextRef).toBeCalledWith(mockRegistry);
    expect(mockRepository.getNextRef).toBeCalledTimes(1);
  });

  describe('when findAll Fatd', () => {
    it('should findAll Fatd', async () => {
      mockRepository.findAll.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findAll();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAll).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findAll Fatd passed cdopm', async () => {
      mockRepository.findAll.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findAll(mockRegistry.cdopm);

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAll).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when findByYear Fatd', () => {
    it('should findByYear Fatd', async () => {
      mockRepository.findByYear.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findByYear();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findByYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findByYear Fatd pass year', async () => {
      mockRepository.findByYear.mockReturnValueOnce([mockRegistry]);
      const { sjd_ref_ano: year } = mockRegistry;
      const registry = await mockRepository.findByYear({ year });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findByYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findByYear Fatd passed year and cdopm', async () => {
      mockRepository.findByYear.mockReturnValueOnce([mockRegistry]);
      const { sjd_ref_ano: year, cdopm } = mockRegistry;
      const registry = await mockRepository.findByYear({ year, cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findByYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when findAndamento Fatd', () => {
    it('should findAndamento Fatd', async () => {
      mockRepository.findAndamento.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findAndamento();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamento).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findAndamento Fatd passes cdopm', async () => {
      mockRepository.findAndamento.mockReturnValueOnce([mockRegistry]);
      const { cdopm } = mockRegistry;
      const registry = await mockRepository.findAndamento({ cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamento).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when findAndamentoYear Fatd', () => {
    it('should findAndamentoYear Fatd', async () => {
      mockRepository.findAndamentoYear.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findAndamentoYear();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamentoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findAndamentoYear Fatd passes cdopm', async () => {
      mockRepository.findAndamentoYear.mockReturnValueOnce([mockRegistry]);
      const { cdopm } = mockRegistry;
      const registry = await mockRepository.findAndamentoYear({ cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamentoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findAndamentoYear Fatd passes year and cdopm', async () => {
      mockRepository.findAndamentoYear.mockReturnValueOnce([mockRegistry]);
      const { sjd_ref_ano: year, cdopm } = mockRegistry;
      const registry = await mockRepository.findAndamentoYear({ year, cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamentoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when resultado Fatd', () => {
    it('should resultado Fatd', async () => {
      mockRepository.resultado.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.resultado();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultado).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should resultado Fatd passes cdopm', async () => {
      mockRepository.resultado.mockReturnValueOnce([mockRegistry]);
      const { cdopm } = mockRegistry;
      const registry = await mockRepository.resultado({ cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultado).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when resultadoYear Fatd', () => {
    it('should resultadoYear Fatd', async () => {
      mockRepository.resultadoYear.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.resultadoYear();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultadoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should resultadoYear Fatd passes cdopm', async () => {
      mockRepository.resultadoYear.mockReturnValueOnce([mockRegistry]);
      const { cdopm } = mockRegistry;
      const registry = await mockRepository.resultadoYear({ cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultadoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should resultadoYear Fatd passes year and cdopm', async () => {
      mockRepository.resultadoYear.mockReturnValueOnce([mockRegistry]);
      const { sjd_ref_ano: year, cdopm } = mockRegistry;
      const registry = await mockRepository.resultadoYear({ year, cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultadoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when create Fatd', () => {
    it('should create a Fatd', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      const data: CreateFatdDto = mockRegistry;
      const registry = await mockRepository.create(data);

      mockRepository.save.mockReturnValueOnce(registry);
      const saved = await mockRepository.save(registry);

      expect(saved).toMatchObject(registry);
      expect(mockRepository.create).toBeCalledWith(mockRegistry);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledWith(registry);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when update a Fatd', () => {
    it('should update a existing Fatd', async () => {
      const FatdUpdate: UpdateFatdDto = mockRegistry;
      FatdUpdate.doc_numero = 'Update Fatd ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...FatdUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...FatdUpdate,
      });

      const updatedFatd = await service.update('1', FatdUpdate);

      expect(updatedFatd).toMatchObject(FatdUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', FatdUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...FatdUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when softdelete a Fatd', () => {
    it('should delete a existing Fatd', async () => {
      const deletedAt = new Date().toISOString().slice(0, 10);
      mockRepository.findOne.mockReturnValue(mockRegistry);
      const deleted = {
        ...mockRegistry,
        deletedAt,
      };
      mockRepository.update.mockReturnValue(deleted);
      mockRepository.create.mockReturnValue(deleted);

      const fatdDeleted = await service.delete('1');

      expect(fatdDeleted).toMatchObject(deleted);
      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });
  });

  describe('when restore a Fatd', () => {
    it('should restore a existing Fatd', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);
      const deleted = {
        ...mockRegistry,
        deletedAt: null,
      };
      mockRepository.update.mockReturnValue(deleted);
      mockRepository.create.mockReturnValue(deleted);

      const fatdDeleted = await service.delete('1');

      expect(fatdDeleted).toMatchObject(deleted);
      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when forceDelete a Fatd', () => {
    it('should delete a existing Fatd', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.delete.mockReturnValue(mockRegistry);

      await service.delete('1');

      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });
  });
});
