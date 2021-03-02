import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, IsNull, Like, Not, Repository } from 'typeorm';
import codeBase from '../../../common/services/opm.service';
import { CreateIsoDto } from '../dtos/create.dto';
import { SearchPortariaDto } from '../dtos/search-portaria.dto';
import { UpdateIsoDto } from '../dtos/update.dto';
import Iso from '../entity/iso.entity';

@Injectable()
export class IsoService {
  constructor(
    @InjectRepository(Iso) private repository: Repository<Iso>,
    @Inject('CONNECTION') private connection: Connection,
  ) {}

  getNextRefYear(data: CreateIsoDto): number {
    return data.sjd_ref_ano || new Date().getFullYear();
  }

  async getNextRef(data: CreateIsoDto): Promise<number> {
    const year = this.getNextRefYear(data);
    const registry = await this.repository
      .createQueryBuilder()
      .select('MAX(sjd_ref)', 'max')
      .where('sjd_ref_ano = :year', { year })
      .getRawOne();
    return registry?.max ? ++registry.max : 1;
  }

  async search(data: CreateIsoDto): Promise<Iso[]> {
    return await this.repository.find({
      where: { ...data },
      order: { sjd_ref: 'DESC' },
    });
  }

  async findAll(cdopm = null): Promise<Iso[]> {
    const query = cdopm
      ? {
          cdopm: Like(`${codeBase(cdopm)}%`),
          completo: true,
        }
      : {
          completo: true,
        };

    return await this.repository.find({
      where: { ...query },
      order: { sjd_ref: 'DESC' },
    });
  }

  async listDeleted(cdopm = null): Promise<Iso[]> {
    const query = cdopm
      ? {
          cdopm: Like(`${codeBase(cdopm)}%`),
          completo: true,
          deletedAt: Not(IsNull()),
        }
      : {
          completo: true,
          deletedAt: Not(IsNull()),
        };

    return await this.repository.find({
      where: { ...query },
      withDeleted: true,
      order: { sjd_ref: 'DESC' },
    });
  }

  async findByYear({
    year,
    cdopm,
  }: {
    year: string;
    cdopm?: string;
  }): Promise<Iso[]> {
    year ?? new Date().getFullYear();
    const query = cdopm
      ? {
          cdopm: Like(`${codeBase(cdopm)}%`),
          sjd_ref_ano: year,
          completo: true,
        }
      : {
          sjd_ref_ano: year,
          completo: true,
        };

    return await this.repository.find({
      where: { ...query },
      order: { sjd_ref: 'DESC' },
    });
  }

  async findAndamento(cdopm = null): Promise<any[]> {
    if (cdopm) {
      return await this.connection.query(
        `
      SELECT isos.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM isos
      LEFT JOIN andamentos ON
        isos.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        isos.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_iso=isos.id
      WHERE isos.cdopm like "$1%"
      ORDER BY isos.id DESC
      `,
        [cdopm],
      );
    }

    return await this.connection.query(`
      SELECT isos.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM isos
      LEFT JOIN andamentos ON
        isos.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        isos.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_iso=isos.id
      ORDER BY isos.id DESC
      `);
  }

  async findAndamentoYear({
    cdopm,
    year,
  }: {
    year: string;
    cdopm?: string;
  }): Promise<any[]> {
    year ?? new Date().getFullYear();
    if (cdopm) {
      return await this.connection.query(
        `
      SELECT isos.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM isos
      LEFT JOIN andamentos ON
        isos.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        isos.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_iso=isos.id
      WHERE 
        isos.cdopm like "$1%"
      AND
        isos.sjd_ref_ano = "$2%"
      ORDER BY isos.id DESC
      `,
        [cdopm, year],
      );
    }

    return await this.connection.query(
      `
      SELECT isos.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM isos
      LEFT JOIN andamentos ON
        isos.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        isos.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_iso=isos.id
      WHERE
        isos.sjd_ref_ano = "$1%"
      ORDER BY isos.id DESC
      `,
      [year],
    );
  }

  async resultado({
    situation,
    cdopm,
  }: {
    situation?: string;
    cdopm?: string;
  }) {
    situation ?? 'Sindicado';

    if (cdopm) {
      return await this.connection.query(
        `
        SELECT isos.*, andamentos.*, envolvidos.*
        FROM isos
        LEFT JOIN andamentos ON
          isos.id_andamento = andamentos.id
        INNER JOIN envolvidos ON
          envolvidos.id_iso!=0 AND envolvidos.id_iso=isos.id
        WHERE 
          envolvidos.situacao= $1
        AND
          isos.cdopm LIKE "$2%"
        ORDER BY isos.id DESC
        `,
        [situation, cdopm],
      );
    }

    return await this.connection.query(
      `
      SELECT isos.*, andamentos.*, envolvidos.*
      FROM isos
      LEFT JOIN andamentos ON
        isos.id_andamento = andamentos.id
      INNER JOIN envolvidos ON
        envolvidos.id_iso!=0 AND envolvidos.id_iso=isos.id
      WHERE  envolvidos.situacao= $1
      ORDER BY isos.id DESC
      `,
      [situation],
    );
  }

  async resultadoYear({
    situation,
    cdopm,
    year,
  }: {
    situation: string;
    cdopm?: string;
    year: string;
  }) {
    situation ?? 'Sindicado';
    year ?? new Date().getFullYear();

    if (cdopm) {
      return await this.connection.query(
        `
        SELECT isos.*, andamentos.*, envolvidos.*
        FROM isos
        LEFT JOIN andamentos ON
          isos.id_andamento = andamentos.id
        INNER JOIN envolvidos ON
          envolvidos.id_iso!=0 AND envolvidos.id_iso=isos.id
        WHERE 
          envolvidos.situacao= $1
        AND
          isos.cdopm LIKE "$2%"
        AND
          isos.sjd_ref_ano = $3
        ORDER BY isos.id DESC
        `,
        [situation, cdopm, year],
      );
    }

    return await this.connection.query(
      `
      SELECT isos.*, andamentos.*, envolvidos.*
      FROM isos
      LEFT JOIN andamentos ON
        isos.id_andamento = andamentos.id
      INNER JOIN envolvidos ON
        envolvidos.id_iso!=0 AND envolvidos.id_iso=isos.id
      WHERE 
        envolvidos.situacao= $1
      AND
        isos.sjd_ref_ano = $2
      ORDER BY isos.id DESC
      `,
      [situation, year],
    );
  }

  async findPortaria(params: SearchPortariaDto): Promise<any> {
    const { cdopm, portaria_numero } = params;
    return await this.repository.findOne({ cdopm, portaria_numero });
  }

  async create(data: CreateIsoDto): Promise<Iso> {
    const registry = this.repository.create(data);
    registry.sjd_ref_ano = this.getNextRefYear(data);
    registry.sjd_ref = await this.getNextRef(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Iso> {
    const registry = await this.repository.findOne(id, { withDeleted: true });

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateIsoDto): Promise<Iso> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<Iso> {
    const registry = await this.findById(id);
    await this.repository.update(id, { deletedAt: new Date() });

    return this.repository.create({ ...registry, deletedAt: new Date() });
  }

  async restore(id: string): Promise<Iso> {
    const registry = await this.findById(id);
    await this.repository.update(id, { deletedAt: null });

    return this.repository.create({ ...registry, deletedAt: null });
  }

  async forceDelete(id: string): Promise<Iso> {
    const data = await this.findById(id);
    await this.repository.delete(id);
    return data;
  }
}
