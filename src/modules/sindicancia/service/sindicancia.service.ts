import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSindicanciaDto } from '../dtos/create.dto';
import { SearchPortariaDto } from '../dtos/search-portaria.dto';
import { UpdateSindicanciaDto } from '../dtos/update.dto';
import { Sindicancia } from '../entity/sindicancia.entity';

@Injectable()
export class SindicanciaService {
  constructor(
    @InjectRepository(Sindicancia) private repository: Repository<Sindicancia>,
  ) {}

  getNextRefYear(data: CreateSindicanciaDto): number {
    return data.sjd_ref_ano || new Date().getFullYear();
  }

  async getNextRef(data: CreateSindicanciaDto): Promise<number> {
    const year = this.getNextRefYear(data);
    const registry = await this.repository
      .createQueryBuilder()
      .select('MAX(sjd_ref)', 'max')
      .where('sjd_ref_ano = :year', { year })
      .getRawOne();
    return registry?.max ? ++registry.max : 1;
  }

  async findAll(): Promise<Sindicancia[] | any> {
    // if (canSeeAllOpm()) {
    await this.repository.find({
      where: { completo: true },
      order: { sjd_ref: 'DESC' },
    });
    // }
    // return await this.repository.find({where: { cdopm: Like(`${codeBase(user.cdopm)}%`), completo: true }});
  }

  async findByYear(year = new Date().getFullYear()): Promise<void> {
    // if (canSeeAllOpm()) {
    await this.repository.find({
      where: { sjd_ref_ano: year, completo: true },
      order: { sjd_ref: 'DESC' },
    });
    // }
    // return await this.repository.find({where: { sjd_ref_ano: year, cdopm: Like(`${codeBase(user.cdopm)}%`), completo: true }});
  }

  async findAndamento() /*: Promise<Sindicancia[]> */ {
    // if (canSeeAllOpm()) {
    // return await this.connection.query(`
    //   SELECT sindicancias.*, andamentos.*, envolvidos.nome, envolvidos.cargo, andamentoscoger.andamentocoger
    //     FROM sindicancias
    //   LEFT JOIN andamentos ON
    //     sindicancias.id_andamento = andamentos.id
    //   LEFT JOIN andamentoscoger ON
    //     sindicancias.id_andamentocoger = andamentoscoger.id
    //   LEFT JOIN envolvidos ON
    //     envolvidos.id_sindicancia=sindicancias.id
    //   ORDER BY sindicancias.id DESC
    //   `)
    return { TODO: 'TODO' };
    // }
    // return await this.connection.query(`
    //   SELECT sindicancia.*, andamento, encarregado.nome, encarregado.cargo, andamentocoger.andamentocoger
    //     FROM sindicancia
    //   LEFT JOIN andamento ON
    //     sindicancia.id_andamento = andamento.id_andamento
    //   LEFT JOIN andamentocoger ON
    //     sindicancia.id_andamentocoger = andamentocoger.id_andamentocoger
    //   INNER JOIN encarregado_sindicancia AS encarregado ON
    //     encarregado.id_sindicancia=sindicancia.id
    //   WHERE sindicancia.cdopm = ?
    //   ORDER BY sindicancia.id DESC
    //   `,[cdopm])
  }

  async findAndamentoYear(
    year = new Date().getFullYear(),
  ) /*: Promise<Sindicancia[]> */ {
    // if (canSeeAllOpm()) {
    // return await this.connection.query(`
    //   SELECT sindicancia.*, andamento, encarregado.nome, encarregado.cargo, andamentocoger.andamentocoger
    //     FROM sindicancia
    //   LEFT JOIN andamento ON
    //     sindicancia.id_andamento = andamento.id_andamento
    //   LEFT JOIN andamentocoger ON
    //     sindicancia.id_andamentocoger = andamentocoger.id_andamentocoger
    //   INNER JOIN encarregado_sindicancia AS encarregado ON
    //     encarregado.id_sindicancia=sindicancia.id
    //   WHERE  sjd_ref_ano = ?
    //   ORDER BY sindicancia.id DESC
    //   `,[year])
    return { TODO: 'TODO', year };
    // }
    // return await this.connection.query(`
    //   SELECT sindicancia.*, andamento, encarregado.nome, encarregado.cargo, andamentocoger.andamentocoger
    //     FROM sindicancia
    //   LEFT JOIN andamento ON
    //     sindicancia.id_andamento = andamento.id_andamento
    //   LEFT JOIN andamentocoger ON
    //     sindicancia.id_andamentocoger = andamentocoger.id_andamentocoger
    //   INNER JOIN encarregado_sindicancia AS encarregado ON
    //     encarregado.id_sindicancia=sindicancia.id
    //   WHERE  sjd_ref_ano  = ?
    //   AND sindicancia.cdopm = ?
    //   ORDER BY sindicancia.id DESC
    //   `,[year, cdopm])
  }

  // async resultado() {
  //   // if (canSeeAllOpm()) {
  //     return await this.connection.query(`
  //     SELECT sindicancia.*, andamento, envolvido.rg, envolvido.nome, envolvido.cargo, envolvido.resultado
  //     FROM sindicancia
  //     LEFT JOIN andamento ON
  //       sindicancia.id_andamento = andamento.id_andamento
  //     INNER JOIN envolvido ON
  //       envolvido.id_sindicancia!=0 AND envolvido.id_sindicancia=sindicancia.id
  //     WHERE  envolvido.situacao=?
  //     ORDER BY sindicancia.id DESC
  //     `,['Sindicado'])
  //     // }
  //     // return await this.connection.query(`
  //     //   SELECT sindicancia.*, andamento, envolvido.rg, envolvido.nome, envolvido.cargo, envolvido.resultado
  //     //   FROM sindicancia
  //     //   LEFT JOIN andamento ON
  //     //     sindicancia.id_andamento = andamento.id_andamento
  //     //   INNER JOIN envolvido ON
  //     //     envolvido.id_sindicancia!=0 AND envolvido.id_sindicancia=sindicancia.id
  //     //   WHERE  envolvido.situacao=?
  //     //   AND  sindicancia.cdopm = ?
  //     //   ORDER BY sindicancia.id DESC
  //     //   `,['Sindicado', cdopm])
  // }

  // async resultadoYear(year = new Date().getFullYear()) {
  //   // if (canSeeAllOpm()) {
  //     return await this.connection.query(`
  //     SELECT sindicancia.*, andamento, envolvido.rg, envolvido.nome, envolvido.cargo, envolvido.resultado
  //     FROM sindicancia
  //     LEFT JOIN andamento ON
  //       sindicancia.id_andamento = andamento.id_andamento
  //     INNER JOIN envolvido ON
  //       envolvido.id_sindicancia!=0 AND envolvido.id_sindicancia=sindicancia.id
  //     WHERE  sjd_ref_ano  = ?
  //     AND  envolvido.situacao=?
  //     ORDER BY sindicancia.id DESC
  //     `,[year,'Sindicado'])
  //     // }
  //     // return await this.connection.query(`
  //     // SELECT sindicancia.*, andamento, envolvido.rg, envolvido.nome, envolvido.cargo, envolvido.resultado
  //     // FROM sindicancia
  //     // LEFT JOIN andamento ON
  //     //   sindicancia.id_andamento = andamento.id_andamento
  //     // INNER JOIN envolvido ON
  //     //   envolvido.id_sindicancia!=0 AND envolvido.id_sindicancia=sindicancia.id
  //     // WHERE  sjd_ref_ano  = ?
  //     // AND  envolvido.situacao='Sindicado'
  //     // AND  sindicancia.cdopm = ?
  //     // ORDER BY sindicancia.id DESC
  //     // `,[year, 'Sindicado', cdopm])
  // }

  // async prazos() {
  //   // if (canSeeAllOpm()) {
  //     return await this.connection.query(`
  //       SELECT sindicancia.id_sindicancia, andamento.andamento, andamentocoger.andamentocoger,
  //       ( SELECT motivo FROM sobrestamento WHERE sobrestamento.id_sindicancia=sindicancia.id_sindicancia ORDER BY sobrestamento.id_sobrestamento DESC LIMIT 1 ) AS motivo,
  //       ( SELECT motivo_outros FROM sobrestamento WHERE sobrestamento.id_sindicancia=sindicancia.id_sindicancia ORDER BY sobrestamento.id_sobrestamento DESC LIMIT 1 ) AS motivo_outros,
  //       envolvido.cargo, envolvido.nome, cdopm, sjd_ref, sjd_ref_ano, abertura_data,
  //       DIASUTEIS(abertura_data,DATE(NOW())) AS dutotal, b.dusobrestado,
  //       (DIASUTEIS(abertura_data,DATE(NOW()))-IFNULL(b.dusobrestado,0)) AS diasuteis
  //       FROM sindicancia
  //       LEFT JOIN (SELECT id_sindicancia, SUM(DIASUTEIS(inicio_data, termino_data)+1) AS dusobrestado FROM sobrestamento
  //       WHERE termino_data !='0000-00-00' AND id_sindicancia!=''
  //       GROUP BY id_sindicancia) b ON b.id_sindicancia = sindicancia.id_sindicancia
  //       LEFT JOIN envolvido ON envolvido.id_sindicancia=sindicancia.id_sindicancia AND envolvido.situacao=? AND rg_substituto=''
  //       LEFT JOIN andamento ON andamento.id_andamento=sindicancia.id_andamento LEFT JOIN andamentocoger ON andamentocoger.id_andamentocoger=sindicancia.id_andamentocoger
  //       ORDER BY sindicancia.id DESC
  //     `,['Encarregado'])
  //     // }
  //     // return await this.connection.query(`
  //     // SELECT sindicancia.id_sindicancia, andamento.andamento, andamentocoger.andamentocoger,
  //     //   ( SELECT motivo FROM sobrestamento WHERE sobrestamento.id_sindicancia=sindicancia.id_sindicancia ORDER BY sobrestamento.id_sobrestamento DESC LIMIT 1 ) AS motivo,
  //     //   ( SELECT motivo_outros FROM sobrestamento WHERE sobrestamento.id_sindicancia=sindicancia.id_sindicancia ORDER BY sobrestamento.id_sobrestamento DESC LIMIT 1 ) AS motivo_outros,
  //     //   envolvido.cargo, envolvido.nome, cdopm, opm.ABREVIATURA, sjd_ref, sjd_ref_ano, abertura_data,
  //     //   DIASUTEIS(abertura_data,DATE(NOW())) AS dutotal, b.dusobrestado,
  //     //   (DIASUTEIS(abertura_data,DATE(NOW()))-IFNULL(b.dusobrestado,0)) AS diasuteis
  //     //   FROM sindicancia
  //     //   LEFT JOIN (SELECT id_sindicancia, SUM(DIASUTEIS(inicio_data, termino_data)+1) AS dusobrestado FROM sobrestamento
  //     //   WHERE termino_data !='0000-00-00' AND id_sindicancia!=''
  //     //   GROUP BY id_sindicancia) b ON b.id_sindicancia = sindicancia.id_sindicancia
  //     //   LEFT JOIN RHPARANA.opmPMPR opm ON opm.CODIGOBASE=sindicancia.cdopm
  //     //   LEFT JOIN envolvido ON envolvido.id_sindicancia=sindicancia.id_sindicancia AND envolvido.situacao=? AND rg_substituto=''
  //     //   LEFT JOIN andamento ON andamento.id_andamento=sindicancia.id_andamento LEFT JOIN andamentocoger ON andamentocoger.id_andamentocoger=sindicancia.id_andamentocoger
  //     //   WHERE sindicancia.cdopm = ?
  //     //   ORDER BY sindicancia.id_sindicancia DESC
  //     // `,['Encarregado',cdopm])
  // }

  // async prazosYear(year = new Date().getFullYear()) {
  //   // if (canSeeAllOpm()) {
  //     return await this.connection.query(`
  //       SELECT sindicancia.id_sindicancia, andamento.andamento, andamentocoger.andamentocoger,
  //       ( SELECT motivo FROM sobrestamento WHERE sobrestamento.id_sindicancia=sindicancia.id_sindicancia ORDER BY sobrestamento.id_sobrestamento DESC LIMIT 1 ) AS motivo,
  //       ( SELECT motivo_outros FROM sobrestamento WHERE sobrestamento.id_sindicancia=sindicancia.id_sindicancia ORDER BY sobrestamento.id_sobrestamento DESC LIMIT 1 ) AS motivo_outros,
  //       envolvido.cargo, envolvido.nome, cdopm, opm.ABREVIATURA, sjd_ref, sjd_ref_ano, abertura_data,
  //       DIASUTEIS(abertura_data,DATE(NOW())) AS dutotal, b.dusobrestado,
  //       (DIASUTEIS(abertura_data,DATE(NOW()))-IFNULL(b.dusobrestado,0)) AS diasuteis
  //       FROM sindicancia
  //       LEFT JOIN (SELECT id_sindicancia, SUM(DIASUTEIS(inicio_data, termino_data)+1) AS dusobrestado FROM sobrestamento
  //       WHERE termino_data !='0000-00-00' AND id_sindicancia!=''
  //       GROUP BY id_sindicancia) b ON b.id_sindicancia = sindicancia.id_sindicancia
  //       LEFT JOIN RHPARANA.opmPMPR opm ON opm.CODIGOBASE=sindicancia.cdopm
  //       LEFT JOIN envolvido ON envolvido.id_sindicancia=sindicancia.id_sindicancia AND envolvido.situacao=? AND rg_substituto=''
  //       LEFT JOIN andamento ON andamento.id_andamento=sindicancia.id_andamento LEFT JOIN andamentocoger ON andamentocoger.id_andamentocoger=sindicancia.id_andamentocoger
  //       WHERE sjd_ref_ano = '2020'
  //       ORDER BY sindicancia.id_sindicancia DESC
  //     `,['Encarregado',year])
  //     // }
  //     // return await this.connection.query(`
  //     // SELECT sindicancia.id_sindicancia, andamento.andamento, andamentocoger.andamentocoger,
  //     //   ( SELECT motivo FROM sobrestamento WHERE sobrestamento.id_sindicancia=sindicancia.id_sindicancia ORDER BY sobrestamento.id_sobrestamento DESC LIMIT 1 ) AS motivo,
  //     //   ( SELECT motivo_outros FROM sobrestamento WHERE sobrestamento.id_sindicancia=sindicancia.id_sindicancia ORDER BY sobrestamento.id_sobrestamento DESC LIMIT 1 ) AS motivo_outros,
  //     //   envolvido.cargo, envolvido.nome, cdopm, opm.ABREVIATURA, sjd_ref, sjd_ref_ano, abertura_data,
  //     //   DIASUTEIS(abertura_data,DATE(NOW())) AS dutotal, b.dusobrestado,
  //     //   (DIASUTEIS(abertura_data,DATE(NOW()))-IFNULL(b.dusobrestado,0)) AS diasuteis
  //     //   FROM sindicancia
  //     //   LEFT JOIN (SELECT id_sindicancia, SUM(DIASUTEIS(inicio_data, termino_data)+1) AS dusobrestado FROM sobrestamento
  //     //   WHERE termino_data !='0000-00-00' AND id_sindicancia!=''
  //     //   GROUP BY id_sindicancia) b ON b.id_sindicancia = sindicancia.id_sindicancia
  //     //   LEFT JOIN RHPARANA.opmPMPR opm ON opm.CODIGOBASE=sindicancia.cdopm
  //     //   LEFT JOIN envolvido ON envolvido.id_sindicancia=sindicancia.id_sindicancia AND envolvido.situacao=? AND rg_substituto=''
  //     //   LEFT JOIN andamento ON andamento.id_andamento=sindicancia.id_andamento LEFT JOIN andamentocoger ON andamentocoger.id_andamentocoger=sindicancia.id_andamentocoger
  //     //   WHERE sjd_ref_ano = ?
  //     //   AND sindicancia.cdopm = ?
  //     //   ORDER BY sindicancia.id_sindicancia DESC
  //     // `,['Encarregado', year, cdopm])
  // }

  // async outOfDateOPM(opm) {
  //   return await this.connection.query(
  //   `SELECT * FROM (
  //     SELECT sindicancia.id_sindicancia, andamento, envolvido.cargo,
  //     envolvido.nome, sindicancia.cdopm, sjd_ref, sjd_ref_ano, abertura_data,
  //     DIASUTEIS(abertura_data,DATE(NOW())) AS dutotal,
  //     b.dusobrestado,
  //     (DIASUTEIS(abertura_data,DATE(NOW()))-IFNULL(b.dusobrestado,0)) AS diasuteis
  //     FROM sindicancia
  //     LEFT JOIN
  //     (SELECT id_sindicancia, SUM(DIASUTEIS(inicio_data, termino_data)+1) AS dusobrestado
  //     FROM sobrestamento
  //     WHERE termino_data != ? AND id_sindicancia!= ?
  //     GROUP BY id_sindicancia) b
  //     ON b.id_sindicancia = sindicancia.id_sindicancia
  //     LEFT JOIN envolvido ON
  //     envolvido.id_sindicancia=sindicancia.id_sindicancia
  //     AND envolvido.situacao= ? AND rg_substituto=:rg_substituto
  //     LEFT JOIN andamento ON
  //     andamento.id_andamento=sindicancia.id_andamento
  //     WHERE sindicancia.id_andamento= ?
  //     ) dt
  //     WHERE cdopm LIKE :opm AND dt.diasuteis > ?`,
  //   ['0000-00-00','','Encarregado','','6',Like(`${opm}%`),'30'])
  // }

  // async QtdOMAnos(opm='', year = ''){

  //   if (!year) {
  //     return await this.connection.query(
  //       `SELECT count(sjd_ref) AS qtd
  //         FROM sindicancias
  //         WHERE sjd_ref_ano = ?
  //         AND cdopm LIKE ?
  //         GROUP BY sjd_ref_ano`,
  //       [year,opm])
  //   }
  //   const currentYear = new Date().getFullYear()
  //   for (let index = 2008; index < currentYear; index++) {
  //     const count = []
  //     count[String(index)] =  await this.connection.query(
  //       `SELECT count(sjd_ref) AS qtd
  //         FROM sindicancias
  //         WHERE sjd_ref_ano = ?
  //         AND cdopm LIKE ?
  //         GROUP BY sjd_ref_ano`,
  //       [year,opm])
  //     return count
  //   }
  // }

  async findPortaria(params: SearchPortariaDto): Promise<void> {
    const { cdopm, portaria_numero } = params;
    await this.repository.findOne({ cdopm, portaria_numero });
  }

  async create(data: CreateSindicanciaDto): Promise<Sindicancia> {
    const registry = this.repository.create(data);
    registry.sjd_ref_ano = this.getNextRefYear(data);
    registry.sjd_ref = await this.getNextRef(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Sindicancia> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateSindicanciaDto): Promise<Sindicancia> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
