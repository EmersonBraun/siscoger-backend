import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, IsNull, Not, Repository } from 'typeorm';
import { CreateRestricaoDto, UpdateRestricaoDto } from '../dtos';
import Restricao from '../entity/restricao.entity';

@Injectable()
export class RestricaoService {
  constructor(
    @InjectRepository(Restricao) private repository: Repository<Restricao>,
    @Inject('CONNECTION') private connection: Connection,
  ) {}

  getNextRefYear(data: CreateRestricaoDto): number {
    return data.sjd_ref_ano || new Date().getFullYear();
  }

  async getNextRef(data: CreateRestricaoDto): Promise<number> {
    const year = this.getNextRefYear(data);
    const registry = await this.repository
      .createQueryBuilder()
      .select('MAX(sjd_ref)', 'max')
      .where('sjd_ref_ano = :year', { year })
      .getRawOne();
    return registry?.max ? ++registry.max : 1;
  }

  async findAll(): Promise<Restricao[]> {
    return await this.repository.find({
      order: { sjd_ref: 'DESC' },
    });
  }

  async listDeleted(cdopm = null): Promise<Restricao[]> {
    return await this.repository.find({
      where: { deletedAt: Not(IsNull()) },
      withDeleted: true,
      order: { sjd_ref: 'DESC' },
    });
  }

  async findByYear({
    year,
  }: {
    year: string;
    cdopm: string;
  }): Promise<Restricao[]> {
    year ?? new Date().getFullYear();
    return await this.repository.find({
      where: { sjd_ref_ano: year },
      order: { sjd_ref: 'DESC' },
    });
  }

  async findAndamento(): Promise<any[]> {
    return await this.connection.query(`
      SELECT restricaos.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM Restricaos
      LEFT JOIN andamentos ON
        restricaos.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        restricaos.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=restricaos.id
      ORDER BY restricaos.id DESC
      `);
  }

  async findAndamentoYear({
    year,
  }: {
    year: string;
    cdopm: string;
  }): Promise<any[]> {
    year ?? new Date().getFullYear();
    return await this.connection.query(
      `
      SELECT restricaos.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM Restricaos
      LEFT JOIN andamentos ON
        restricaos.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        restricaos.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=restricaos.id
      WHERE
        restricaos.sjd_ref_ano = "$1%"
      ORDER BY restricaos.id DESC
      `,
      [year],
    );
  }

  async resultado({ situation }: { situation?: string }) {
    situation ?? 'Sindicado';
    return await this.connection.query(
      `
      SELECT restricaos.*, andamentos.*, envolvidos.*
      FROM Restricaos
      LEFT JOIN andamentos ON
        restricaos.id_andamento = andamentos.id
      INNER JOIN envolvidos ON
        envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=restricaos.id
      WHERE  envolvidos.situacao= $1
      ORDER BY restricaos.id DESC
      `,
      [situation],
    );
  }

  async resultadoYear({
    situation,
    year,
  }: {
    situation: string;
    year: string;
  }) {
    situation ?? 'Sindicado';
    year ?? new Date().getFullYear();

    return await this.connection.query(
      `
      SELECT restricaos.*, andamentos.*, envolvidos.*
      FROM Restricaos
      LEFT JOIN andamentos ON
        restricaos.id_andamento = andamentos.id
      INNER JOIN envolvidos ON
        envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=restricaos.id
      WHERE 
        envolvidos.situacao= $1
      AND
        restricaos.sjd_ref_ano = $2
      ORDER BY restricaos.id DESC
      `,
      [situation, year],
    );
  }

  // async findPortaria(params: SearchPortariaDto): Promise<any> {
  //   const { cdopm, portaria_numero } = params;
  //   return await this.repository.findOne({ cdopm, portaria_numero });
  // }

  async create(data: CreateRestricaoDto): Promise<Restricao> {
    const registry = this.repository.create(data);
    registry.sjd_ref_ano = this.getNextRefYear(data);
    registry.sjd_ref = await this.getNextRef(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Restricao> {
    const registry = await this.repository.findOne(id, { withDeleted: true });

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateRestricaoDto): Promise<Restricao> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<Restricao> {
    const registry = await this.findById(id);
    await this.repository.update(id, { deletedAt: new Date() });

    return this.repository.create({ ...registry, deletedAt: new Date() });
  }

  async restore(id: string): Promise<Restricao> {
    const registry = await this.findById(id);
    await this.repository.update(id, { deletedAt: null });

    return this.repository.create({ ...registry, deletedAt: null });
  }

  async forceDelete(id: string): Promise<Restricao> {
    const data = await this.findById(id);
    await this.repository.delete(id);
    return data;
  }
}
