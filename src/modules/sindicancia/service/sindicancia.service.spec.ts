import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CreateSindicanciaDto, UpdateSindicanciaDto } from '../dtos/index';
import Sindicancia from '../entity/sindicancia.entity';
import { fakerRegistry } from '../factory/sindicancia.factory';
import { SindicanciaService } from './sindicancia.service';

describe('SindicanciaService', () => {
  let db: Connection;

  let service: SindicanciaService;
  // let repository: any;
  let mockRegistry: CreateSindicanciaDto;

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
    // db = await rootTypeormTestModule([Sindicancia]);
    // repository = await db.getRepository(Sindicancia);
    // service = new SindicanciaService(repository, db);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SindicanciaService,
        {
          provide: getRepositoryToken(Sindicancia),
          useValue: mockRepository,
        },
        {
          provide: 'CONNECTION',
          useValue: Connection,
        },
      ],
    }).compile();

    service = module.get<SindicanciaService>(SindicanciaService);
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

  it('should getNextRefYear from a Sindicancia', async () => {
    mockRepository.getNextRefYear.mockReturnValueOnce(1);

    const saved = await mockRepository.getNextRefYear(mockRegistry);

    expect(saved).toBe(1);
    expect(mockRepository.getNextRefYear).toBeCalledWith(mockRegistry);
    expect(mockRepository.getNextRefYear).toBeCalledTimes(1);
  });

  it('should getNextRef from a Sindicancia', async () => {
    mockRepository.getNextRef.mockReturnValueOnce(1);

    const saved = await mockRepository.getNextRef(mockRegistry);

    expect(saved).toBe(1);
    expect(mockRepository.getNextRef).toBeCalledWith(mockRegistry);
    expect(mockRepository.getNextRef).toBeCalledTimes(1);
  });

  describe('when findAll Sindicancia', () => {
    it('should findAll Sindicancia', async () => {
      mockRepository.findAll.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findAll();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAll).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findAll Sindicancia passed cdopm', async () => {
      mockRepository.findAll.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findAll(mockRegistry.cdopm);

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAll).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when findByYear Sindicancia', () => {
    it('should findByYear Sindicancia', async () => {
      mockRepository.findByYear.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findByYear();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findByYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findByYear Sindicancia pass year', async () => {
      mockRepository.findByYear.mockReturnValueOnce([mockRegistry]);
      const { sjd_ref_ano: year } = mockRegistry;
      const registry = await mockRepository.findByYear({ year });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findByYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findByYear Sindicancia passed year and cdopm', async () => {
      mockRepository.findByYear.mockReturnValueOnce([mockRegistry]);
      const { sjd_ref_ano: year, cdopm } = mockRegistry;
      const registry = await mockRepository.findByYear({ year, cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findByYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when findAndamento Sindicancia', () => {
    it('should findAndamento Sindicancia', async () => {
      mockRepository.findAndamento.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findAndamento();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamento).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findAndamento Sindicancia passes cdopm', async () => {
      mockRepository.findAndamento.mockReturnValueOnce([mockRegistry]);
      const { cdopm } = mockRegistry;
      const registry = await mockRepository.findAndamento({ cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamento).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when findAndamentoYear Sindicancia', () => {
    it('should findAndamentoYear Sindicancia', async () => {
      mockRepository.findAndamentoYear.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findAndamentoYear();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamentoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findAndamentoYear Sindicancia passes cdopm', async () => {
      mockRepository.findAndamentoYear.mockReturnValueOnce([mockRegistry]);
      const { cdopm } = mockRegistry;
      const registry = await mockRepository.findAndamentoYear({ cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamentoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findAndamentoYear Sindicancia passes year and cdopm', async () => {
      mockRepository.findAndamentoYear.mockReturnValueOnce([mockRegistry]);
      const { sjd_ref_ano: year, cdopm } = mockRegistry;
      const registry = await mockRepository.findAndamentoYear({ year, cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamentoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when resultado Sindicancia', () => {
    it('should resultado Sindicancia', async () => {
      mockRepository.resultado.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.resultado();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultado).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should resultado Sindicancia passes cdopm', async () => {
      mockRepository.resultado.mockReturnValueOnce([mockRegistry]);
      const { cdopm } = mockRegistry;
      const registry = await mockRepository.resultado({ cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultado).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when resultadoYear Sindicancia', () => {
    it('should resultadoYear Sindicancia', async () => {
      mockRepository.resultadoYear.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.resultadoYear();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultadoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should resultadoYear Sindicancia passes cdopm', async () => {
      mockRepository.resultadoYear.mockReturnValueOnce([mockRegistry]);
      const { cdopm } = mockRegistry;
      const registry = await mockRepository.resultadoYear({ cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultadoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should resultadoYear Sindicancia passes year and cdopm', async () => {
      mockRepository.resultadoYear.mockReturnValueOnce([mockRegistry]);
      const { sjd_ref_ano: year, cdopm } = mockRegistry;
      const registry = await mockRepository.resultadoYear({ year, cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultadoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when create Sindicancia', () => {
    it('should create a Sindicancia', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      const data: CreateSindicanciaDto = mockRegistry;
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

  describe('when update a Sindicancia', () => {
    it('should update a existing Sindicancia', async () => {
      const SindicanciaUpdate: UpdateSindicanciaDto = mockRegistry;
      SindicanciaUpdate.doc_numero = 'Update Sindicancia ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...SindicanciaUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...SindicanciaUpdate,
      });

      const updatedSindicancia = await service.update('1', SindicanciaUpdate);

      expect(updatedSindicancia).toMatchObject(SindicanciaUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', SindicanciaUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...SindicanciaUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when softdelete a Sindicancia', () => {
    it('should delete a existing Sindicancia', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);
      const deleted = {
        ...mockRegistry,
        deletedAt: new Date(),
      };
      mockRepository.update.mockReturnValue(deleted);
      mockRepository.create.mockReturnValue(deleted);

      const sindicanciaDeleted = await service.delete('1');

      expect(sindicanciaDeleted).toMatchObject(deleted);
      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });
  });

  describe('when restore a Sindicancia', () => {
    it('should restore a existing Sindicancia', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);
      const deleted = {
        ...mockRegistry,
        deletedAt: null,
      };
      mockRepository.update.mockReturnValue(deleted);
      mockRepository.create.mockReturnValue(deleted);

      const sindicanciaDeleted = await service.delete('1');

      expect(sindicanciaDeleted).toMatchObject(deleted);
      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when forceDelete a Sindicancia', () => {
    it('should delete a existing Sindicancia', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.delete.mockReturnValue(mockRegistry);

      await service.delete('1');

      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });
  });
});
