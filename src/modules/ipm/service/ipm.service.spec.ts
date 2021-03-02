import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CreateIpmDto, UpdateIpmDto } from '../dtos/index';
import Ipm from '../entity/ipm.entity';
import { fakerRegistry } from '../factory/ipm.factory';
import { IpmService } from './ipm.service';

describe('IpmService', () => {
  let db: Connection;

  let service: IpmService;
  // let repository: any;
  let mockRegistry: CreateIpmDto;

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
    // db = await rootTypeormTestModule([Ipm]);
    // repository = await db.getRepository(Ipm);
    // service = new IpmService(repository, db);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IpmService,
        {
          provide: getRepositoryToken(Ipm),
          useValue: mockRepository,
        },
        {
          provide: 'CONNECTION',
          useValue: Connection,
        },
      ],
    }).compile();

    service = module.get<IpmService>(IpmService);
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

  it('should getNextRefYear from a Ipm', async () => {
    mockRepository.getNextRefYear.mockReturnValueOnce(1);

    const saved = await mockRepository.getNextRefYear(mockRegistry);

    expect(saved).toBe(1);
    expect(mockRepository.getNextRefYear).toBeCalledWith(mockRegistry);
    expect(mockRepository.getNextRefYear).toBeCalledTimes(1);
  });

  it('should getNextRef from a Ipm', async () => {
    mockRepository.getNextRef.mockReturnValueOnce(1);

    const saved = await mockRepository.getNextRef(mockRegistry);

    expect(saved).toBe(1);
    expect(mockRepository.getNextRef).toBeCalledWith(mockRegistry);
    expect(mockRepository.getNextRef).toBeCalledTimes(1);
  });

  describe('when findAll Ipm', () => {
    it('should findAll Ipm', async () => {
      mockRepository.findAll.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findAll();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAll).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findAll Ipm passed cdopm', async () => {
      mockRepository.findAll.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findAll(mockRegistry.cdopm);

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAll).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when findByYear Ipm', () => {
    it('should findByYear Ipm', async () => {
      mockRepository.findByYear.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findByYear();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findByYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findByYear Ipm pass year', async () => {
      mockRepository.findByYear.mockReturnValueOnce([mockRegistry]);
      const { sjd_ref_ano: year } = mockRegistry;
      const registry = await mockRepository.findByYear({ year });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findByYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findByYear Ipm passed year and cdopm', async () => {
      mockRepository.findByYear.mockReturnValueOnce([mockRegistry]);
      const { sjd_ref_ano: year, cdopm } = mockRegistry;
      const registry = await mockRepository.findByYear({ year, cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findByYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when findAndamento Ipm', () => {
    it('should findAndamento Ipm', async () => {
      mockRepository.findAndamento.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findAndamento();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamento).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findAndamento Ipm passes cdopm', async () => {
      mockRepository.findAndamento.mockReturnValueOnce([mockRegistry]);
      const { cdopm } = mockRegistry;
      const registry = await mockRepository.findAndamento({ cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamento).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when findAndamentoYear Ipm', () => {
    it('should findAndamentoYear Ipm', async () => {
      mockRepository.findAndamentoYear.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findAndamentoYear();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamentoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findAndamentoYear Ipm passes cdopm', async () => {
      mockRepository.findAndamentoYear.mockReturnValueOnce([mockRegistry]);
      const { cdopm } = mockRegistry;
      const registry = await mockRepository.findAndamentoYear({ cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamentoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findAndamentoYear Ipm passes year and cdopm', async () => {
      mockRepository.findAndamentoYear.mockReturnValueOnce([mockRegistry]);
      const { sjd_ref_ano: year, cdopm } = mockRegistry;
      const registry = await mockRepository.findAndamentoYear({ year, cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamentoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when resultado Ipm', () => {
    it('should resultado Ipm', async () => {
      mockRepository.resultado.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.resultado();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultado).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should resultado Ipm passes cdopm', async () => {
      mockRepository.resultado.mockReturnValueOnce([mockRegistry]);
      const { cdopm } = mockRegistry;
      const registry = await mockRepository.resultado({ cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultado).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when resultadoYear Ipm', () => {
    it('should resultadoYear Ipm', async () => {
      mockRepository.resultadoYear.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.resultadoYear();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultadoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should resultadoYear Ipm passes cdopm', async () => {
      mockRepository.resultadoYear.mockReturnValueOnce([mockRegistry]);
      const { cdopm } = mockRegistry;
      const registry = await mockRepository.resultadoYear({ cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultadoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should resultadoYear Ipm passes year and cdopm', async () => {
      mockRepository.resultadoYear.mockReturnValueOnce([mockRegistry]);
      const { sjd_ref_ano: year, cdopm } = mockRegistry;
      const registry = await mockRepository.resultadoYear({ year, cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultadoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when create Ipm', () => {
    it('should create a Ipm', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      const data: CreateIpmDto = mockRegistry;
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

  describe('when update a Ipm', () => {
    it('should update a existing Ipm', async () => {
      const IpmUpdate: UpdateIpmDto = mockRegistry;
      IpmUpdate.cdopm = 'Update Ipm ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...IpmUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...IpmUpdate,
      });

      const updatedIpm = await service.update('1', IpmUpdate);

      expect(updatedIpm).toMatchObject(IpmUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', IpmUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...IpmUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when softdelete a Ipm', () => {
    it('should delete a existing Ipm', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);
      const deleted = {
        ...mockRegistry,
        deletedAt: new Date(),
      };
      mockRepository.update.mockReturnValue(deleted);
      mockRepository.create.mockReturnValue(deleted);

      const ipmDeleted = await service.delete('1');

      expect(ipmDeleted).toMatchObject(deleted);
      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', {
        deletedAt: deleted.deletedAt,
      });
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith(deleted);
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when restore a Ipm', () => {
    it('should restore a existing Ipm', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);
      const deleted = {
        ...mockRegistry,
        deletedAt: null,
      };
      mockRepository.update.mockReturnValue(deleted);
      mockRepository.create.mockReturnValue(deleted);

      const ipmDeleted = await service.delete('1');

      expect(ipmDeleted).toMatchObject(deleted);
      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when forceDelete a Ipm', () => {
    it('should delete a existing Ipm', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.delete.mockReturnValue(mockRegistry);

      await service.delete('1');

      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });
  });
});
