import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateSaiDiligenciasDto, UpdateSaiDiligenciasDto } from '../dtos';
import SaiDiligencias from '../entity/saidiligencias.entity';

@Injectable()
export class SaiDiligenciasService {
  constructor(
    @InjectRepository(SaiDiligencias)
    private repository: Repository<SaiDiligencias>,
    @Inject('CONNECTION') private connection: Connection,
  ) {}

  async findAll(): Promise<SaiDiligencias[]> {
    return await this.repository.find();
  }

  async listDeleted(): Promise<SaiDiligencias[]> {
    return await this.repository.find({
      withDeleted: true,
    });
  }

  async findByYear(): Promise<SaiDiligencias[]> {
    return await this.repository.find();
  }

  async findAndamento(cdopm = null): Promise<any[]> {
    if (cdopm) {
      return await this.connection.query(
        `
      SELECT saidiligencias.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM saidiligencias
      LEFT JOIN andamentos ON
        saidiligencias.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        saidiligencias.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=saidiligencias.id
      WHERE saidiligencias.cdopm like "$1%"
      ORDER BY saidiligencias.id DESC
      `,
        [cdopm],
      );
    }

    return await this.connection.query(`
      SELECT saidiligencias.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM saidiligencias
      LEFT JOIN andamentos ON
        saidiligencias.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        saidiligencias.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=saidiligencias.id
      ORDER BY saidiligencias.id DESC
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
      SELECT saidiligencias.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM saidiligencias
      LEFT JOIN andamentos ON
        saidiligencias.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        saidiligencias.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=saidiligencias.id
      WHERE 
        saidiligencias.cdopm like "$1%"
      AND
        saidiligencias.sjd_ref_ano = "$2%"
      ORDER BY saidiligencias.id DESC
      `,
        [cdopm, year],
      );
    }

    return await this.connection.query(
      `
      SELECT saidiligencias.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM saidiligencias
      LEFT JOIN andamentos ON
        saidiligencias.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        saidiligencias.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=saidiligencias.id
      WHERE
        saidiligencias.sjd_ref_ano = "$1%"
      ORDER BY saidiligencias.id DESC
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
        SELECT saidiligencias.*, andamentos.*, envolvidos.*
        FROM saidiligencias
        LEFT JOIN andamentos ON
          saidiligencias.id_andamento = andamentos.id
        INNER JOIN envolvidos ON
          envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=saidiligencias.id
        WHERE 
          envolvidos.situacao= $1
        AND
          saidiligencias.cdopm LIKE "$2%"
        ORDER BY saidiligencias.id DESC
        `,
        [situation, cdopm],
      );
    }

    return await this.connection.query(
      `
      SELECT saidiligencias.*, andamentos.*, envolvidos.*
      FROM saidiligencias
      LEFT JOIN andamentos ON
        saidiligencias.id_andamento = andamentos.id
      INNER JOIN envolvidos ON
        envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=saidiligencias.id
      WHERE  envolvidos.situacao= $1
      ORDER BY saidiligencias.id DESC
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
        SELECT saidiligencias.*, andamentos.*, envolvidos.*
        FROM saidiligencias
        LEFT JOIN andamentos ON
          saidiligencias.id_andamento = andamentos.id
        INNER JOIN envolvidos ON
          envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=saidiligencias.id
        WHERE 
          envolvidos.situacao= $1
        AND
          saidiligencias.cdopm LIKE "$2%"
        AND
          saidiligencias.sjd_ref_ano = $3
        ORDER BY saidiligencias.id DESC
        `,
        [situation, cdopm, year],
      );
    }

    return await this.connection.query(
      `
      SELECT saidiligencias.*, andamentos.*, envolvidos.*
      FROM saidiligencias
      LEFT JOIN andamentos ON
        saidiligencias.id_andamento = andamentos.id
      INNER JOIN envolvidos ON
        envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=saidiligencias.id
      WHERE 
        envolvidos.situacao= $1
      AND
        saidiligencias.sjd_ref_ano = $2
      ORDER BY saidiligencias.id DESC
      `,
      [situation, year],
    );
  }

  // async findPortaria(params: SearchPortariaDto): Promise<any> {
  //   const { cdopm, portaria_numero } = params;
  //   return await this.repository.findOne({ cdopm, portaria_numero });
  // }

  async create(data: CreateSaiDiligenciasDto): Promise<SaiDiligencias> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<SaiDiligencias> {
    const registry = await this.repository.findOne(id, { withDeleted: true });

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(
    id: string,
    data: UpdateSaiDiligenciasDto,
  ): Promise<SaiDiligencias> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<SaiDiligencias> {
    const registry = await this.findById(id);
    await this.repository.update(id, { deletedAt: new Date() });

    return this.repository.create({ ...registry, deletedAt: new Date() });
  }

  async restore(id: string): Promise<SaiDiligencias> {
    const registry = await this.findById(id);
    await this.repository.update(id, { deletedAt: null });

    return this.repository.create({ ...registry, deletedAt: null });
  }

  async forceDelete(id: string): Promise<SaiDiligencias> {
    const data = await this.findById(id);
    await this.repository.delete(id);
    return data;
  }
}
