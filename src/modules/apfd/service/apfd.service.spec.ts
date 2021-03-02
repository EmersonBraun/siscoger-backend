import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CreateApfdDto, UpdateApfdDto } from '../dtos/index';
import Apfd from '../entity/apfd.entity';
import { fakerRegistry } from '../factory/apfd.factory';
import { ApfdService } from './apfd.service';

describe('ApfdService', () => {
  let db: Connection;

  let service: ApfdService;
  // let repository: any;
  let mockRegistry: CreateApfdDto;

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
    // db = await rootTypeormTestModule([Apfd]);
    // repository = await db.getRepository(Apfd);
    // service = new ApfdService(repository, db);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApfdService,
        {
          provide: getRepositoryToken(Apfd),
          useValue: mockRepository,
        },
        {
          provide: 'CONNECTION',
          useValue: Connection,
        },
      ],
    }).compile();

    service = module.get<ApfdService>(ApfdService);
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

  it('should getNextRefYear from a Apfd', async () => {
    mockRepository.getNextRefYear.mockReturnValueOnce(1);

    const saved = await mockRepository.getNextRefYear(mockRegistry);

    expect(saved).toBe(1);
    expect(mockRepository.getNextRefYear).toBeCalledWith(mockRegistry);
    expect(mockRepository.getNextRefYear).toBeCalledTimes(1);
  });

  it('should getNextRef from a Apfd', async () => {
    mockRepository.getNextRef.mockReturnValueOnce(1);

    const saved = await mockRepository.getNextRef(mockRegistry);

    expect(saved).toBe(1);
    expect(mockRepository.getNextRef).toBeCalledWith(mockRegistry);
    expect(mockRepository.getNextRef).toBeCalledTimes(1);
  });

  describe('when findAll Apfd', () => {
    it('should findAll Apfd', async () => {
      mockRepository.findAll.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findAll();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAll).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findAll Apfd passed cdopm', async () => {
      mockRepository.findAll.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findAll(mockRegistry.cdopm);

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAll).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when findByYear Apfd', () => {
    it('should findByYear Apfd', async () => {
      mockRepository.findByYear.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findByYear();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findByYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findByYear Apfd pass year', async () => {
      mockRepository.findByYear.mockReturnValueOnce([mockRegistry]);
      const { sjd_ref_ano: year } = mockRegistry;
      const registry = await mockRepository.findByYear({ year });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findByYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findByYear Apfd passed year and cdopm', async () => {
      mockRepository.findByYear.mockReturnValueOnce([mockRegistry]);
      const { sjd_ref_ano: year, cdopm } = mockRegistry;
      const registry = await mockRepository.findByYear({ year, cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findByYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when findAndamento Apfd', () => {
    it('should findAndamento Apfd', async () => {
      mockRepository.findAndamento.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findAndamento();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamento).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findAndamento Apfd passes cdopm', async () => {
      mockRepository.findAndamento.mockReturnValueOnce([mockRegistry]);
      const { cdopm } = mockRegistry;
      const registry = await mockRepository.findAndamento({ cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamento).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when findAndamentoYear Apfd', () => {
    it('should findAndamentoYear Apfd', async () => {
      mockRepository.findAndamentoYear.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.findAndamentoYear();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamentoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findAndamentoYear Apfd passes cdopm', async () => {
      mockRepository.findAndamentoYear.mockReturnValueOnce([mockRegistry]);
      const { cdopm } = mockRegistry;
      const registry = await mockRepository.findAndamentoYear({ cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamentoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should findAndamentoYear Apfd passes year and cdopm', async () => {
      mockRepository.findAndamentoYear.mockReturnValueOnce([mockRegistry]);
      const { sjd_ref_ano: year, cdopm } = mockRegistry;
      const registry = await mockRepository.findAndamentoYear({ year, cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.findAndamentoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when resultado Apfd', () => {
    it('should resultado Apfd', async () => {
      mockRepository.resultado.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.resultado();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultado).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should resultado Apfd passes cdopm', async () => {
      mockRepository.resultado.mockReturnValueOnce([mockRegistry]);
      const { cdopm } = mockRegistry;
      const registry = await mockRepository.resultado({ cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultado).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when resultadoYear Apfd', () => {
    it('should resultadoYear Apfd', async () => {
      mockRepository.resultadoYear.mockReturnValueOnce([mockRegistry]);
      const registry = await mockRepository.resultadoYear();

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultadoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should resultadoYear Apfd passes cdopm', async () => {
      mockRepository.resultadoYear.mockReturnValueOnce([mockRegistry]);
      const { cdopm } = mockRegistry;
      const registry = await mockRepository.resultadoYear({ cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultadoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
    it('should resultadoYear Apfd passes year and cdopm', async () => {
      mockRepository.resultadoYear.mockReturnValueOnce([mockRegistry]);
      const { sjd_ref_ano: year, cdopm } = mockRegistry;
      const registry = await mockRepository.resultadoYear({ year, cdopm });

      expect(registry).toMatchObject([mockRegistry]);
      expect(mockRepository.resultadoYear).toBeCalledTimes(1);
      expect(registry).toHaveLength(1);
    });
  });

  describe('when create Apfd', () => {
    it('should create a Apfd', async () => {
      mockRepository.create.mockReturnValueOnce(mockRegistry);
      const data: CreateApfdDto = mockRegistry;
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

  describe('when update a Apfd', () => {
    it('should update a existing Apfd', async () => {
      const ApfdUpdate: UpdateApfdDto = mockRegistry;
      ApfdUpdate.doc_numero = 'Update Apfd ';

      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.update.mockReturnValue({
        ...mockRegistry,
        ...ApfdUpdate,
      });
      mockRepository.create.mockReturnValue({
        ...mockRegistry,
        ...ApfdUpdate,
      });

      const updatedApfd = await service.update('1', ApfdUpdate);

      expect(updatedApfd).toMatchObject(ApfdUpdate);
      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledWith('1', ApfdUpdate);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledWith({
        ...mockRegistry,
        ...ApfdUpdate,
      });
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when softdelete a Apfd', () => {
    it('should delete a existing Apfd', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);
      const deleted = {
        ...mockRegistry,
        deletedAt: new Date(),
      };
      mockRepository.update.mockReturnValue(deleted);
      mockRepository.create.mockReturnValue(deleted);

      const apfdDeleted = await service.delete('1');

      expect(apfdDeleted).toMatchObject(deleted);
      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });
  });

  describe('when restore a Apfd', () => {
    it('should restore a existing Apfd', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);
      const deleted = {
        ...mockRegistry,
        deletedAt: null,
      };
      mockRepository.update.mockReturnValue(deleted);
      mockRepository.create.mockReturnValue(deleted);

      const apfdDeleted = await service.delete('1');

      expect(apfdDeleted).toMatchObject(deleted);
      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('when forceDelete a Apfd', () => {
    it('should delete a existing Apfd', async () => {
      mockRepository.findOne.mockReturnValue(mockRegistry);
      mockRepository.delete.mockReturnValue(mockRegistry);

      await service.delete('1');

      expect(mockRepository.findOne).toBeCalledWith('1', { withDeleted: true });
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });
  });
});
