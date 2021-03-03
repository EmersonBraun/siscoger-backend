import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, IsNull, Like, Not, Repository } from 'typeorm';
import codeBase from '../../../common/services/opm.service';
import { CreatePadDto, UpdatePadDto } from '../dtos';
import Pad from '../entity/pad.entity';

@Injectable()
export class PadService {
  constructor(
    @InjectRepository(Pad) private repository: Repository<Pad>,
    @Inject('CONNECTION') private connection: Connection,
  ) {}

  getNextRefYear(data: CreatePadDto): number {
    return data.sjd_ref_ano || new Date().getFullYear();
  }

  async getNextRef(data: CreatePadDto): Promise<number> {
    const year = this.getNextRefYear(data);
    const registry = await this.repository
      .createQueryBuilder()
      .select('MAX(sjd_ref)', 'max')
      .where('sjd_ref_ano = :year', { year })
      .getRawOne();
    return registry?.max ? ++registry.max : 1;
  }

  async findAll(cdopm = null): Promise<Pad[]> {
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

  async listDeleted(cdopm = null): Promise<Pad[]> {
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
    cdopm: string;
  }): Promise<Pad[]> {
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
      SELECT pads.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM pads
      LEFT JOIN andamentos ON
        pads.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        pads.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=pads.id
      WHERE pads.cdopm like "$1%"
      ORDER BY pads.id DESC
      `,
        [cdopm],
      );
    }

    return await this.connection.query(`
      SELECT pads.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM pads
      LEFT JOIN andamentos ON
        pads.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        pads.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=pads.id
      ORDER BY pads.id DESC
      `);
  }

  async findAndamentoYear({
    cdopm,
    year,
  }: {
    year: string;
    cdopm: string;
  }): Promise<any[]> {
    year ?? new Date().getFullYear();
    if (cdopm) {
      return await this.connection.query(
        `
      SELECT pads.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM pads
      LEFT JOIN andamentos ON
        pads.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        pads.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=pads.id
      WHERE 
        pads.cdopm like "$1%"
      AND
        pads.sjd_ref_ano = "$2%"
      ORDER BY pads.id DESC
      `,
        [cdopm, year],
      );
    }

    return await this.connection.query(
      `
      SELECT pads.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM pads
      LEFT JOIN andamentos ON
        pads.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        pads.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=pads.id
      WHERE
        pads.sjd_ref_ano = "$1%"
      ORDER BY pads.id DESC
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
        SELECT pads.*, andamentos.*, envolvidos.*
        FROM pads
        LEFT JOIN andamentos ON
          pads.id_andamento = andamentos.id
        INNER JOIN envolvidos ON
          envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=pads.id
        WHERE 
          envolvidos.situacao= $1
        AND
          pads.cdopm LIKE "$2%"
        ORDER BY pads.id DESC
        `,
        [situation, cdopm],
      );
    }

    return await this.connection.query(
      `
      SELECT pads.*, andamentos.*, envolvidos.*
      FROM pads
      LEFT JOIN andamentos ON
        pads.id_andamento = andamentos.id
      INNER JOIN envolvidos ON
        envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=pads.id
      WHERE  envolvidos.situacao= $1
      ORDER BY pads.id DESC
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
    cdopm: string;
    year: string;
  }) {
    situation ?? 'Sindicado';
    year ?? new Date().getFullYear();

    if (cdopm) {
      return await this.connection.query(
        `
        SELECT pads.*, andamentos.*, envolvidos.*
        FROM pads
        LEFT JOIN andamentos ON
          pads.id_andamento = andamentos.id
        INNER JOIN envolvidos ON
          envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=pads.id
        WHERE 
          envolvidos.situacao= $1
        AND
          pads.cdopm LIKE "$2%"
        AND
          pads.sjd_ref_ano = $3
        ORDER BY pads.id DESC
        `,
        [situation, cdopm, year],
      );
    }

    return await this.connection.query(
      `
      SELECT pads.*, andamentos.*, envolvidos.*
      FROM pads
      LEFT JOIN andamentos ON
        pads.id_andamento = andamentos.id
      INNER JOIN envolvidos ON
        envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=pads.id
      WHERE 
        envolvidos.situacao= $1
      AND
        pads.sjd_ref_ano = $2
      ORDER BY pads.id DESC
      `,
      [situation, year],
    );
  }

  // async findPortaria(params: SearchPortariaDto): Promise<any> {
  //   const { cdopm, portaria_numero } = params;
  //   return await this.repository.findOne({ cdopm, portaria_numero });
  // }

  async create(data: CreatePadDto): Promise<Pad> {
    const registry = this.repository.create(data);
    registry.sjd_ref_ano = this.getNextRefYear(data);
    registry.sjd_ref = await this.getNextRef(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Pad> {
    const registry = await this.repository.findOne(id, { withDeleted: true });

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdatePadDto): Promise<Pad> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<Pad> {
    const registry = await this.findById(id);
    await this.repository.update(id, { deletedAt: new Date() });

    return this.repository.create({ ...registry, deletedAt: new Date() });
  }

  async restore(id: string): Promise<Pad> {
    const registry = await this.findById(id);
    await this.repository.update(id, { deletedAt: null });

    return this.repository.create({ ...registry, deletedAt: null });
  }

  async forceDelete(id: string): Promise<Pad> {
    const data = await this.findById(id);
    await this.repository.delete(id);
    return data;
  }
}
