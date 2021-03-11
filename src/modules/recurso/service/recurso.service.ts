import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, IsNull, Like, Not, Repository } from 'typeorm';
import codeBase from '../../../common/services/opm.service';
import { CreateRecursoDto, UpdateRecursoDto } from '../dtos';
import Recurso from '../entity/recurso.entity';

@Injectable()
export class RecursoService {
  constructor(
    @InjectRepository(Recurso) private repository: Repository<Recurso>,
    @Inject('CONNECTION') private connection: Connection,
  ) {}

  async findAll(cdopm = null): Promise<Recurso[]> {
    const query = cdopm
      ? {
          cdopm: Like(`${codeBase(cdopm)}%`),
        }
      : {};

    return await this.repository.find({
      where: { ...query },
    });
  }

  async listDeleted(cdopm = null): Promise<Recurso[]> {
    const query = cdopm
      ? {
          cdopm: Like(`${codeBase(cdopm)}%`),

          deletedAt: Not(IsNull()),
        }
      : {
          deletedAt: Not(IsNull()),
        };

    return await this.repository.find({
      where: { ...query },
      withDeleted: true,
    });
  }

  async findByYear({
    year,
    cdopm,
  }: {
    year: string;
    cdopm: string;
  }): Promise<Recurso[]> {
    year ?? new Date().getFullYear();
    const query = cdopm
      ? {
          cdopm: Like(`${codeBase(cdopm)}%`),
          sjd_ref_ano: year,
        }
      : {
          sjd_ref_ano: year,
        };

    return await this.repository.find({
      where: { ...query },
    });
  }

  async findAndamento(cdopm = null): Promise<any[]> {
    if (cdopm) {
      return await this.connection.query(
        `
      SELECT recursos.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM recursos
      LEFT JOIN andamentos ON
        recursos.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        recursos.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=recursos.id
      WHERE recursos.cdopm like "$1%"
      ORDER BY recursos.id DESC
      `,
        [cdopm],
      );
    }

    return await this.connection.query(`
      SELECT recursos.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM recursos
      LEFT JOIN andamentos ON
        recursos.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        recursos.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=recursos.id
      ORDER BY recursos.id DESC
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
      SELECT recursos.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM recursos
      LEFT JOIN andamentos ON
        recursos.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        recursos.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=recursos.id
      WHERE 
        recursos.cdopm like "$1%"
      AND
        recursos.sjd_ref_ano = "$2%"
      ORDER BY recursos.id DESC
      `,
        [cdopm, year],
      );
    }

    return await this.connection.query(
      `
      SELECT recursos.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM recursos
      LEFT JOIN andamentos ON
        recursos.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        recursos.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=recursos.id
      WHERE
        recursos.sjd_ref_ano = "$1%"
      ORDER BY recursos.id DESC
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
        SELECT recursos.*, andamentos.*, envolvidos.*
        FROM recursos
        LEFT JOIN andamentos ON
          recursos.id_andamento = andamentos.id
        INNER JOIN envolvidos ON
          envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=recursos.id
        WHERE 
          envolvidos.situacao= $1
        AND
          recursos.cdopm LIKE "$2%"
        ORDER BY recursos.id DESC
        `,
        [situation, cdopm],
      );
    }

    return await this.connection.query(
      `
      SELECT recursos.*, andamentos.*, envolvidos.*
      FROM recursos
      LEFT JOIN andamentos ON
        recursos.id_andamento = andamentos.id
      INNER JOIN envolvidos ON
        envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=recursos.id
      WHERE  envolvidos.situacao= $1
      ORDER BY recursos.id DESC
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
        SELECT recursos.*, andamentos.*, envolvidos.*
        FROM recursos
        LEFT JOIN andamentos ON
          recursos.id_andamento = andamentos.id
        INNER JOIN envolvidos ON
          envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=recursos.id
        WHERE 
          envolvidos.situacao= $1
        AND
          recursos.cdopm LIKE "$2%"
        AND
          recursos.sjd_ref_ano = $3
        ORDER BY recursos.id DESC
        `,
        [situation, cdopm, year],
      );
    }

    return await this.connection.query(
      `
      SELECT recursos.*, andamentos.*, envolvidos.*
      FROM recursos
      LEFT JOIN andamentos ON
        recursos.id_andamento = andamentos.id
      INNER JOIN envolvidos ON
        envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=recursos.id
      WHERE 
        envolvidos.situacao= $1
      AND
        recursos.sjd_ref_ano = $2
      ORDER BY recursos.id DESC
      `,
      [situation, year],
    );
  }

  // async findPortaria(params: SearchPortariaDto): Promise<any> {
  //   const { cdopm, portaria_numero } = params;
  //   return await this.repository.findOne({ cdopm, portaria_numero });
  // }

  async create(data: CreateRecursoDto): Promise<Recurso> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Recurso> {
    const registry = await this.repository.findOne(id, { withDeleted: true });

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateRecursoDto): Promise<Recurso> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<Recurso> {
    const registry = await this.findById(id);
    await this.repository.update(id, { deletedAt: new Date() });

    return this.repository.create({ ...registry, deletedAt: new Date() });
  }

  async restore(id: string): Promise<Recurso> {
    const registry = await this.findById(id);
    await this.repository.update(id, { deletedAt: null });

    return this.repository.create({ ...registry, deletedAt: null });
  }

  async forceDelete(id: string): Promise<Recurso> {
    const data = await this.findById(id);
    await this.repository.delete(id);
    return data;
  }
}
