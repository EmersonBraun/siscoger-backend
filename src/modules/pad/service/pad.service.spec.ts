import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CreatePadDto, UpdatePadDto } from '../dtos/index';
import Pad from '../entity/pad.entity';
import { fakerRegistry } from '../factory/pad.factory';
import { PadService } from './pad.service';

describe('PadService', () => {
  let db: Connection;

  let service: PadService;
  // let repository: any;
  let mockRegistry: CreatePadDto;

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
    // db = await rootTypeormTestModule([Pad]);
    // repository = await db.getRepository(Pad);
    // service = new PadService(repository, db);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PadService,
        {
          provide: getRepositoryToken(Pad),
          useValue: mockRepository,
        },
        {
          provide: 'CONNECTION',
          useValue: Connection,
        },
      ],
    }).compile();

    service = module.get<PadService>(PadService);
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

  it('should getNextRefYear from a Pad', async () => {
    mockRepository.getNextRefYear.mockReturnValueOnce(1);

    const saved = await mockRepository.getNextRefYear(mockRegistry);

    expect(saved).toBe(1);
    expect(mockRepository.getNextRefYear).toBeCalledWith(mockRegistry);
    expect(mockRepository.getNextRefYear).toBeCalledTimes(1);
  });

  it('should getNextRef from a Pad', async () => {
    mockRepository.getNextRef.mockReturnValueOnce(1);

    const saved = await mockRepository.getNextRef(mockRegistry);

    expect(saved).toBe(1);
    expect(mockRepository.getNextRef).toBeCalledWith(mockRegistry);
    expect(mockRepository.getNextRef).toBeCalledTimes(1);
  });

  describe('when findAll Pad', () => {
    it('should findAll Pad', async () => {
      mockRepository.findAll.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findAll();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAll).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findAll Pad passed cdopm', async () => {
      mockRepository.findAll.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findAll(mockRegistry.cdopm);

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAll).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when findByYear Pad', () => {
    it('should findByYear Pad', async () => {
      mockRepository.findByYear.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findByYear();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findByYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findByYear Pad pass year', async () => {
      mockRepository.findByYear.mockReturnValueOnce([mockRegistry]);
      const { sjd_ref_ano: year } = mockRegistry;
      const registry = await mockRepository.findByYear({ year });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findByYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findByYear Pad passed year and cdopm', async () => {
      mockRepository.findByYear.mockReturnValueOnce([mockRegistry]);
      const { sjd_ref_ano: year, cdopm } = mockRegistry;
      const registry = await mockRepository.findByYear({ year, cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findByYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when findAndamento Pad', () => {
    it('should findAndamento Pad', async () => {
      mockRepository.findAndamento.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findAndamento();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamento).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findAndamento Pad passes cdopm', async () => {
      mockRepository.findAndamento.mockReturnValueOnce([mockRegistry]);
      const { cdopm } = mockRegistry;
      const registry = await mockRepository.findAndamento({ cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamento).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when findAndamentoYear Pad', () => {
    it('should findAndamentoYear Pad', async () => {
      mockRepository.findAndamentoYear.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findAndamentoYear();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamentoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findAndamentoYear Pad passes cdopm', async () => {
      mockRepository.findAndamentoYear.mockReturnValueOnce([mockRegistry]);
      const { cdopm } = mockRegistry;
      const registry = await mockRepository.findAndamentoYear({ cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamentoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findAndamentoYear Pad passes year and cdopm', async () => {
      mockRepository.findAndamentoYear.mockReturnValueOnce([mockRegistry]);
      const { sjd_ref_ano: year, cdopm } = mockRegistry;
      const registry = await mockRepository.findAndamentoYear({ year, cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamentoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when resultado Pad', () => {
    it('should resultado Pad', async () => {
      mockRepository.resultado.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.resultado();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultado).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should resultado Pad passes cdopm', async () => {
      mockRepository.resultado.mockReturnValueOnce([mockRegistry]);
      const { cdopm } = mockRegistry;
      const registry = await mockRepository.resultado({ cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultado).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when resultadoYear Pad', () => {
    it('should resultadoYear Pad', async () => {
      mockRepository.resultadoYear.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.resultadoYear();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultadoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should resultadoYear Pad passes cdopm', async () => {
      mockRepository.resultadoYear.mockReturnValueOnce([mockRegistry]);
      const { cdopm } = mockRegistry;
      const registry = await mockRepository.resultadoYear({ cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultadoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should resultadoYear Pad passes year and cdopm', async () => {
      mockRepository.resultadoYear.mockReturnValueOnce([mockRegistry]);
      const { sjd_ref_ano: year, cdopm } = mockRegistry;
      const registry = await mockRepository.resultadoYear({ year, cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultadoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when create Pad', () => {
    it('should create a Pad', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      const data: CreatePadDto = mockRegistry;
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

  describe('when update a Pad', () => {
    it('should update a existing Pad', async () => {
      const PadUpdate: UpdatePadDto = mockRegistry;
      PadUpdate.cdopm = 'Update Pad ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...PadUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...PadUpdate,
      });

      const updatedPad = await service.update('1', PadUpdate);

      expect(updatedPad).toMatchObject(PadUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', PadUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...PadUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when softdelete a Pad', () => {
    it('should delete a existing Pad', async () => {
      const deletedAt = new Date().toISOString().slice(0, 10);
      mockRepository.findOne.mockReturnValue(mockRegistry);
      const deleted = {
        ...mockRegistry,
        deletedAt,
      };
      mockRepository.update.mockReturnValue(deleted);
      mockRepository.create.mockReturnValue(deleted);

      const padDeleted = await service.delete('1');

      expect(padDeleted).toMatchObject(deleted);
      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });
  });

  describe('when restore a Pad', () => {
    it('should restore a existing Pad', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);
      const deleted = {
        ...mockRegistry,
        deletedAt: null,
      };
      mockRepository.update.mockReturnValue(deleted);
      mockRepository.create.mockReturnValue(deleted);

      const padDeleted = await service.delete('1');

      expect(padDeleted).toMatchObject(deleted);
      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when forceDelete a Pad', () => {
    it('should delete a existing Pad', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.delete.mockReturnValue(mockRegistry);

      await service.delete('1');

      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });
  });
});
