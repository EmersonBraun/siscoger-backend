import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, IsNull, Like, Not, Repository } from 'typeorm';
import codeBase from '../../../common/services/opm.service';
import { CreatePresoDto, UpdatePresoDto } from '../dtos';
import Preso from '../entity/preso.entity';

@Injectable()
export class PresoService {
  constructor(
    @InjectRepository(Preso) private repository: Repository<Preso>,
    @Inject('CONNECTION') private connection: Connection,
  ) {}

  async findAll(cdopm = null): Promise<Preso[]> {
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
    });
  }

  async listDeleted(cdopm = null): Promise<Preso[]> {
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
    });
  }

  async findByYear({
    year,
    cdopm,
  }: {
    year: string;
    cdopm: string;
  }): Promise<Preso[]> {
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
    });
  }

  async findAndamento(cdopm = null): Promise<any[]> {
    if (cdopm) {
      return await this.connection.query(
        `
      SELECT presos.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM presos
      LEFT JOIN andamentos ON
        presos.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        presos.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=presos.id
      WHERE presos.cdopm like "$1%"
      ORDER BY presos.id DESC
      `,
        [cdopm],
      );
    }

    return await this.connection.query(`
      SELECT presos.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM presos
      LEFT JOIN andamentos ON
        presos.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        presos.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=presos.id
      ORDER BY presos.id DESC
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
      SELECT presos.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM presos
      LEFT JOIN andamentos ON
        presos.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        presos.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=presos.id
      WHERE 
        presos.cdopm like "$1%"
      AND
        presos.sjd_ref_ano = "$2%"
      ORDER BY presos.id DESC
      `,
        [cdopm, year],
      );
    }

    return await this.connection.query(
      `
      SELECT presos.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM presos
      LEFT JOIN andamentos ON
        presos.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        presos.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=presos.id
      WHERE
        presos.sjd_ref_ano = "$1%"
      ORDER BY presos.id DESC
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
        SELECT presos.*, andamentos.*, envolvidos.*
        FROM presos
        LEFT JOIN andamentos ON
          presos.id_andamento = andamentos.id
        INNER JOIN envolvidos ON
          envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=presos.id
        WHERE 
          envolvidos.situacao= $1
        AND
          presos.cdopm LIKE "$2%"
        ORDER BY presos.id DESC
        `,
        [situation, cdopm],
      );
    }

    return await this.connection.query(
      `
      SELECT presos.*, andamentos.*, envolvidos.*
      FROM presos
      LEFT JOIN andamentos ON
        presos.id_andamento = andamentos.id
      INNER JOIN envolvidos ON
        envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=presos.id
      WHERE  envolvidos.situacao= $1
      ORDER BY presos.id DESC
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
        SELECT presos.*, andamentos.*, envolvidos.*
        FROM presos
        LEFT JOIN andamentos ON
          presos.id_andamento = andamentos.id
        INNER JOIN envolvidos ON
          envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=presos.id
        WHERE 
          envolvidos.situacao= $1
        AND
          presos.cdopm LIKE "$2%"
        AND
          presos.sjd_ref_ano = $3
        ORDER BY presos.id DESC
        `,
        [situation, cdopm, year],
      );
    }

    return await this.connection.query(
      `
      SELECT presos.*, andamentos.*, envolvidos.*
      FROM presos
      LEFT JOIN andamentos ON
        presos.id_andamento = andamentos.id
      INNER JOIN envolvidos ON
        envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=presos.id
      WHERE 
        envolvidos.situacao= $1
      AND
        presos.sjd_ref_ano = $2
      ORDER BY presos.id DESC
      `,
      [situation, year],
    );
  }

  // async findPortaria(params: SearchPortariaDto): Promise<any> {
  //   const { cdopm, portaria_numero } = params;
  //   return await this.repository.findOne({ cdopm, portaria_numero });
  // }

  async create(data: CreatePresoDto): Promise<Preso> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Preso> {
    const registry = await this.repository.findOne(id, { withDeleted: true });

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdatePresoDto): Promise<Preso> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<Preso> {
    const registry = await this.findById(id);
    await this.repository.update(id, { deletedAt: new Date() });

    return this.repository.create({ ...registry, deletedAt: new Date() });
  }

  async restore(id: string): Promise<Preso> {
    const registry = await this.findById(id);
    await this.repository.update(id, { deletedAt: null });

    return this.repository.create({ ...registry, deletedAt: null });
  }

  async forceDelete(id: string): Promise<Preso> {
    const data = await this.findById(id);
    await this.repository.delete(id);
    return data;
  }
}
