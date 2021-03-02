import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, IsNull, Like, Not, Repository } from 'typeorm';
import codeBase from '../../../common/services/opm.service';
import { CreateIpmDto } from '../dtos/create.dto';
import { SearchPortariaDto } from '../dtos/search-portaria.dto';
import { UpdateIpmDto } from '../dtos/update.dto';
import Ipm from '../entity/ipm.entity';

@Injectable()
export class IpmService {
  constructor(
    @InjectRepository(Ipm) private repository: Repository<Ipm>,
    @Inject('CONNECTION') private connection: Connection,
  ) {}

  getNextRefYear(data: CreateIpmDto): number {
    return data.sjd_ref_ano || new Date().getFullYear();
  }

  async getNextRef(data: CreateIpmDto): Promise<number> {
    const year = this.getNextRefYear(data);
    const registry = await this.repository
      .createQueryBuilder()
      .select('MAX(sjd_ref)', 'max')
      .where('sjd_ref_ano = :year', { year })
      .getRawOne();
    return registry?.max ? ++registry.max : 1;
  }

  async search(data: CreateIpmDto): Promise<Ipm[]> {
    return await this.repository.find({
      where: { ...data },
      order: { sjd_ref: 'DESC' },
    });
  }

  async findAll(cdopm = null): Promise<Ipm[]> {
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

  async listDeleted(cdopm = null): Promise<Ipm[]> {
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
  }): Promise<Ipm[]> {
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
      SELECT ipms.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM ipms
      LEFT JOIN andamentos ON
        ipms.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        ipms.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_ipm=ipms.id
      WHERE ipms.cdopm like "$1%"
      ORDER BY ipms.id DESC
      `,
        [cdopm],
      );
    }

    return await this.connection.query(`
      SELECT ipms.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM ipms
      LEFT JOIN andamentos ON
        ipms.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        ipms.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_ipm=ipms.id
      ORDER BY ipms.id DESC
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
      SELECT ipms.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM ipms
      LEFT JOIN andamentos ON
        ipms.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        ipms.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_ipm=ipms.id
      WHERE 
        ipms.cdopm like "$1%"
      AND
        ipms.sjd_ref_ano = "$2%"
      ORDER BY ipms.id DESC
      `,
        [cdopm, year],
      );
    }

    return await this.connection.query(
      `
      SELECT ipms.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM ipms
      LEFT JOIN andamentos ON
        ipms.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        ipms.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_ipm=ipms.id
      WHERE
        ipms.sjd_ref_ano = "$1%"
      ORDER BY ipms.id DESC
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
        SELECT ipms.*, andamentos.*, envolvidos.*
        FROM ipms
        LEFT JOIN andamentos ON
          ipms.id_andamento = andamentos.id
        INNER JOIN envolvidos ON
          envolvidos.id_ipm!=0 AND envolvidos.id_ipm=ipms.id
        WHERE 
          envolvidos.situacao= $1
        AND
          ipms.cdopm LIKE "$2%"
        ORDER BY ipms.id DESC
        `,
        [situation, cdopm],
      );
    }

    return await this.connection.query(
      `
      SELECT ipms.*, andamentos.*, envolvidos.*
      FROM ipms
      LEFT JOIN andamentos ON
        ipms.id_andamento = andamentos.id
      INNER JOIN envolvidos ON
        envolvidos.id_ipm!=0 AND envolvidos.id_ipm=ipms.id
      WHERE  envolvidos.situacao= $1
      ORDER BY ipms.id DESC
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
        SELECT ipms.*, andamentos.*, envolvidos.*
        FROM ipms
        LEFT JOIN andamentos ON
          ipms.id_andamento = andamentos.id
        INNER JOIN envolvidos ON
          envolvidos.id_ipm!=0 AND envolvidos.id_ipm=ipms.id
        WHERE 
          envolvidos.situacao= $1
        AND
          ipms.cdopm LIKE "$2%"
        AND
          ipms.sjd_ref_ano = $3
        ORDER BY ipms.id DESC
        `,
        [situation, cdopm, year],
      );
    }

    return await this.connection.query(
      `
      SELECT ipms.*, andamentos.*, envolvidos.*
      FROM ipms
      LEFT JOIN andamentos ON
        ipms.id_andamento = andamentos.id
      INNER JOIN envolvidos ON
        envolvidos.id_ipm!=0 AND envolvidos.id_ipm=ipms.id
      WHERE 
        envolvidos.situacao= $1
      AND
        ipms.sjd_ref_ano = $2
      ORDER BY ipms.id DESC
      `,
      [situation, year],
    );
  }

  async findPortaria(params: SearchPortariaDto): Promise<any> {
    const { cdopm, portaria_numero } = params;
    return await this.repository.findOne({ cdopm, portaria_numero });
  }

  async create(data: CreateIpmDto): Promise<Ipm> {
    const registry = this.repository.create(data);
    registry.sjd_ref_ano = this.getNextRefYear(data);
    registry.sjd_ref = await this.getNextRef(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Ipm> {
    const registry = await this.repository.findOne(id, { withDeleted: true });

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateIpmDto): Promise<Ipm> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<Ipm> {
    const registry = await this.findById(id);
    await this.repository.update(id, { deletedAt: new Date() });

    return this.repository.create({ ...registry, deletedAt: new Date() });
  }

  async restore(id: string): Promise<Ipm> {
    const registry = await this.findById(id);
    await this.repository.update(id, { deletedAt: null });

    return this.repository.create({ ...registry, deletedAt: null });
  }

  async forceDelete(id: string): Promise<Ipm> {
    const data = await this.findById(id);
    await this.repository.delete(id);
    return data;
  }
}
