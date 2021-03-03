import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, IsNull, Not, Repository } from 'typeorm';
import { CreateReintegradoDto, UpdateReintegradoDto } from '../dtos';
import Reintegrado from '../entity/reintegrado.entity';

@Injectable()
export class ReintegradoService {
  constructor(
    @InjectRepository(Reintegrado) private repository: Repository<Reintegrado>,
    @Inject('CONNECTION') private connection: Connection,
  ) {}

  getNextRefYear(data: CreateReintegradoDto): number {
    return data.sjd_ref_ano || new Date().getFullYear();
  }

  async getNextRef(data: CreateReintegradoDto): Promise<number> {
    const year = this.getNextRefYear(data);
    const registry = await this.repository
      .createQueryBuilder()
      .select('MAX(sjd_ref)', 'max')
      .where('sjd_ref_ano = :year', { year })
      .getRawOne();
    return registry?.max ? ++registry.max : 1;
  }

  async findAll(): Promise<Reintegrado[]> {
    return await this.repository.find({
      order: { sjd_ref: 'DESC' },
    });
  }

  async listDeleted(cdopm = null): Promise<Reintegrado[]> {
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
  }): Promise<Reintegrado[]> {
    year ?? new Date().getFullYear();
    return await this.repository.find({
      where: { sjd_ref_ano: year },
      order: { sjd_ref: 'DESC' },
    });
  }

  async findAndamento(): Promise<any[]> {
    return await this.connection.query(`
      SELECT reintegrados.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM Reintegrados
      LEFT JOIN andamentos ON
        reintegrados.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        reintegrados.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=reintegrados.id
      ORDER BY reintegrados.id DESC
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
      SELECT reintegrados.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM Reintegrados
      LEFT JOIN andamentos ON
        reintegrados.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        reintegrados.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=reintegrados.id
      WHERE
        reintegrados.sjd_ref_ano = "$1%"
      ORDER BY reintegrados.id DESC
      `,
      [year],
    );
  }

  async resultado({ situation }: { situation?: string }) {
    situation ?? 'Sindicado';
    return await this.connection.query(
      `
      SELECT reintegrados.*, andamentos.*, envolvidos.*
      FROM Reintegrados
      LEFT JOIN andamentos ON
        reintegrados.id_andamento = andamentos.id
      INNER JOIN envolvidos ON
        envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=reintegrados.id
      WHERE  envolvidos.situacao= $1
      ORDER BY reintegrados.id DESC
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
      SELECT reintegrados.*, andamentos.*, envolvidos.*
      FROM Reintegrados
      LEFT JOIN andamentos ON
        reintegrados.id_andamento = andamentos.id
      INNER JOIN envolvidos ON
        envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=reintegrados.id
      WHERE 
        envolvidos.situacao= $1
      AND
        reintegrados.sjd_ref_ano = $2
      ORDER BY reintegrados.id DESC
      `,
      [situation, year],
    );
  }

  // async findPortaria(params: SearchPortariaDto): Promise<any> {
  //   const { cdopm, portaria_numero } = params;
  //   return await this.repository.findOne({ cdopm, portaria_numero });
  // }

  async create(data: CreateReintegradoDto): Promise<Reintegrado> {
    const registry = this.repository.create(data);
    registry.sjd_ref_ano = this.getNextRefYear(data);
    registry.sjd_ref = await this.getNextRef(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Reintegrado> {
    const registry = await this.repository.findOne(id, { withDeleted: true });

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateReintegradoDto): Promise<Reintegrado> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<Reintegrado> {
    const registry = await this.findById(id);
    await this.repository.update(id, { deletedAt: new Date() });

    return this.repository.create({ ...registry, deletedAt: new Date() });
  }

  async restore(id: string): Promise<Reintegrado> {
    const registry = await this.findById(id);
    await this.repository.update(id, { deletedAt: null });

    return this.repository.create({ ...registry, deletedAt: null });
  }

  async forceDelete(id: string): Promise<Reintegrado> {
    const data = await this.findById(id);
    await this.repository.delete(id);
    return data;
  }
}
