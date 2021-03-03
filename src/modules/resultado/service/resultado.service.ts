import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Like, Repository } from 'typeorm';
import { CreateResultadoDto, UpdateResultadoDto } from '../dtos';
import Resultado from '../entity/resultado.entity';

@Injectable()
export class ResultadoService {
  constructor(
    @InjectRepository(Resultado) private repository: Repository<Resultado>,
    @Inject('CONNECTION') private connection: Connection,
  ) {}

  async findAll(): Promise<Resultado[]> {
    return await this.repository.find();
  }

  async listDeleted(): Promise<Resultado[]> {
    return await this.repository.find({
      withDeleted: true,
    });
  }

  async findByYear({ year }: { year: string }): Promise<Resultado[]> {
    year ?? new Date().getFullYear();
    return await this.repository.find({
      where: { createdAt: Like(`${year}%`) },
    });
  }

  async findAndamento(): Promise<any[]> {
    return await this.connection.query(`
      SELECT resultados.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM resultados
      LEFT JOIN andamentos ON
        resultados.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        resultados.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=resultados.id
      ORDER BY resultados.id DESC
      `);
  }

  async findAndamentoYear({ year }: { year: string }): Promise<any[]> {
    year ?? new Date().getFullYear();
    return await this.connection.query(
      `
      SELECT resultados.*, andamentos.*, envolvidos.nome, envolvidos.rg, envolvidos.cargo, andamentoscoger.andamentocoger
        FROM resultados
      LEFT JOIN andamentos ON
        resultados.id_andamento = andamentos.id
      LEFT JOIN andamentoscoger ON
        resultados.id_andamentocoger = andamentoscoger.id
      LEFT JOIN envolvidos ON
        envolvidos.id_sindicancia=resultados.id
      WHERE
        resultados.sjd_ref_ano = "$1%"
      ORDER BY resultados.id DESC
      `,
      [year],
    );
  }

  async resultado({ situation }: { situation?: string }) {
    situation ?? 'Sindicado';

    return await this.connection.query(
      `
      SELECT resultados.*, andamentos.*, envolvidos.*
      FROM resultados
      LEFT JOIN andamentos ON
        resultados.id_andamento = andamentos.id
      INNER JOIN envolvidos ON
        envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=resultados.id
      WHERE  envolvidos.situacao= $1
      ORDER BY resultados.id DESC
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
      SELECT resultados.*, andamentos.*, envolvidos.*
      FROM resultados
      LEFT JOIN andamentos ON
        resultados.id_andamento = andamentos.id
      INNER JOIN envolvidos ON
        envolvidos.id_sindicancia!=0 AND envolvidos.id_sindicancia=resultados.id
      WHERE 
        envolvidos.situacao= $1
      AND
        resultados.sjd_ref_ano = $2
      ORDER BY resultados.id DESC
      `,
      [situation, year],
    );
  }

  // async findPortaria(params: SearchPortariaDto): Promise<any> {
  //   const { cdopm, portaria_numero } = params;
  //   return await this.repository.findOne({ cdopm, portaria_numero });
  // }

  async create(data: CreateResultadoDto): Promise<Resultado> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Resultado> {
    const registry = await this.repository.findOne(id, { withDeleted: true });

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateResultadoDto): Promise<Resultado> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<Resultado> {
    const registry = await this.findById(id);
    await this.repository.update(id, { deletedAt: new Date() });

    return this.repository.create({ ...registry, deletedAt: new Date() });
  }

  async restore(id: string): Promise<Resultado> {
    const registry = await this.findById(id);
    await this.repository.update(id, { deletedAt: null });

    return this.repository.create({ ...registry, deletedAt: null });
  }

  async forceDelete(id: string): Promise<Resultado> {
    const data = await this.findById(id);
    await this.repository.delete(id);
    return data;
  }
}
