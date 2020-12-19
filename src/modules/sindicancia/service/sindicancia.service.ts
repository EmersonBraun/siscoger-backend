import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Like, Repository } from 'typeorm';
import { CreateSindicanciaDto } from '../dtos/create.dto';
import { SearchPortariaDto } from '../dtos/search-portaria.dto';
import { UpdateSindicanciaDto } from '../dtos/update.dto';
import { Sindicancia } from '../entity/sindicancia.entity';

@Injectable()
export class SindicanciaService {
  constructor(
    @InjectRepository(Sindicancia)
    private repository: Repository<Sindicancia>,
    private connection: Connection
  ) {}

  getNextRefYear(data: CreateSindicanciaDto): number {
    return data.sjd_ref_ano || new Date().getFullYear()
  }

  async getNextRef(data: CreateSindicanciaDto): Promise<number> {
    const year = this.getNextRefYear(data)
    const registry = await this.repository
    .createQueryBuilder()
    .select("MAX(sjd_ref)", "max")
    .where('sjd_ref_ano = :year', { year })
    .getRawOne()
    return registry?.max ? ++registry.max : 1

  }

  async findAll(): Promise<Sindicancia[]> {
    // if (canSeeAllOpm()) {
      return await this.repository.find({where: { completo: true }, order: {sjd_ref: 'DESC'}});
    // }
    // return await this.repository.find({where: { cdopm: Like(`${codeBase(user.cdopm)}%`), completo: true }});
  }

  async findByYear(year = new Date().getFullYear()): Promise<Sindicancia[]> {
    // if (canSeeAllOpm()) {
      return await this.repository.find({where: { sjd_ref_ano: year, completo: true }, order: {sjd_ref: 'DESC'}});
    // }
    // return await this.repository.find({where: { sjd_ref_ano: year, cdopm: Like(`${codeBase(user.cdopm)}%`), completo: true }});
  }

  async findAndamento()/*: Promise<Sindicancia[]>*/ {
    // if (canSeeAllOpm()) {
    return await this.connection.query(`
    SELECT * 
      FROM sindicancias
      LEFT JOIN envolvidos ON envolvido.id_sindicancia = sindicancia.id
        AND envolvido.situacao = 'Presidente'
        AND envolvido.rg_substituto = ''
      ORDER BY sindicancia.id DESC
    `)
    // }
    // return await this.connection.query(`
    // SELECT * 
    //   FROM sindicancias
    //   LEFT JOIN envolvidos ON envolvido.id_sindicancia = sindicancia.id
    //     AND envolvido.situacao = 'Presidente'
    //     AND envolvido.rg_substituto = ''
    //   WHERE sindicancia.cdopm = ?
    //   ORDER BY sindicancia.id DESC
    // `,[cdopm])
  }

  async findAndamentoYear(year = new Date().getFullYear())/*: Promise<Sindicancia[]>*/ {
    // if (canSeeAllOpm()) {
    return await this.connection.query(`
    SELECT * 
      FROM sindicancias
      LEFT JOIN envolvidos ON envolvido.id_sindicancia = sindicancia.id
        AND envolvido.situacao = 'Presidente'
        AND envolvido.rg_substituto = ''
      WHERE sindicancias.sjd_ref_ano = ?
      ORDER BY sindicancia.id DESC
    `,[year])
    // }
    // return await this.connection.query(`
    // SELECT * 
    //   FROM sindicancias
    //   LEFT JOIN envolvidos ON envolvido.id_sindicancia = sindicancia.id
    //     AND envolvido.situacao = 'Presidente'
    //     AND envolvido.rg_substituto = ''
    //   WHERE sindicancia.cdopm = ?
    //   AND sindicancia.sjd_ref_ano = ?
    //   ORDER BY sindicancia.id DESC
    // `,[cdopm, year])
  }

  async julgamento() {
    // if (canSeeAllOpm()) {
      return await this.connection.query(`
      SELECT * 
        FROM sindicancias
        LEFT JOIN envolvidos ON envolvido.id_sindicancia = sindicancia.id
        LEFT JOIN punicoes ON punicoes.id_sindicancia = sindicancia.id
        WHERE envolvido.situacao = ?
        ORDER BY sindicancia.id DESC
      `,['sindicado'])
      // }
      // return await this.connection.query(`
      // SELECT * 
      //   FROM sindicancias
      //   LEFT JOIN envolvidos ON envolvido.id_sindicancia = sindicancia.id
      //     AND envolvido.situacao = 'Presidente'
      //     AND envolvido.rg_substituto = ''
      //   WHERE sindicancia.cdopm = ?
      //   ORDER BY sindicancia.id DESC
      // `,[cdopm,'sindicado'])
  }

  async julgamentoYear(year = new Date().getFullYear()) {
    // if (canSeeAllOpm()) {
      return await this.connection.query(`
      SELECT * 
        FROM sindicancias
        LEFT JOIN envolvidos ON envolvido.id_sindicancia = sindicancia.id
        LEFT JOIN punicoes ON punicoes.id_sindicancia = sindicancia.id
        WHERE envolvido.situacao = ?
        AND sindicancias.sjd_ref_ano = ?
        ORDER BY sindicancia.id DESC
      `,['sindicado',year])
      // }
      // return await this.connection.query(`
      // SELECT * 
      //   FROM sindicancias
      //   LEFT JOIN envolvidos ON envolvido.id_sindicancia = sindicancia.id
      //     AND envolvido.situacao = 'Presidente'
      //     AND envolvido.rg_substituto = ''
      //   WHERE sindicancia.cdopm = ?
      //   AND envolvido.situacao = ?
      //   AND sindicancias.sjd_ref_ano = ?
      //   ORDER BY sindicancia.id DESC
      // `,[cdopm,'sindicado'])
  }

  async prazos() {
    // if (canSeeAllOpm()) {
      // return await this.connection.query(`
      // SELECT * 
      //   FROM sindicancias
      //   LEFT JOIN envolvidos ON envolvido.id_sindicancia = sindicancia.id
      //   LEFT JOIN punicoes ON punicoes.id_sindicancia = sindicancia.id
      //   WHERE envolvido.situacao = ?
      //   AND sindicancias.sjd_ref_ano = ?
      //   ORDER BY sindicancia.id DESC
      // `,['sindicado',year])
      // }
      // return await this.connection.query(`
      // SELECT * 
      //   FROM sindicancias
      //   LEFT JOIN envolvidos ON envolvido.id_sindicancia = sindicancia.id
      //     AND envolvido.situacao = 'Presidente'
      //     AND envolvido.rg_substituto = ''
      //   WHERE sindicancia.cdopm = ?
      //   AND envolvido.situacao = ?
      //   AND sindicancias.sjd_ref_ano = ?
      //   ORDER BY sindicancia.id DESC
      // `,[cdopm,'sindicado'])
  }

  async prazosYear(/*year = new Date().getFullYear()*/) {
    // if (canSeeAllOpm()) {
      // return await this.connection.query(`
      // SELECT * 
      //   FROM sindicancias
      //   LEFT JOIN envolvidos ON envolvido.id_sindicancia = sindicancia.id
      //   LEFT JOIN punicoes ON punicoes.id_sindicancia = sindicancia.id
      //   WHERE envolvido.situacao = ?
      //   AND sindicancias.sjd_ref_ano = ?
      //   ORDER BY sindicancia.id DESC
      // `,['sindicado',year])
      // }
      // return await this.connection.query(`
      // SELECT * 
      //   FROM sindicancias
      //   LEFT JOIN envolvidos ON envolvido.id_sindicancia = sindicancia.id
      //     AND envolvido.situacao = 'Presidente'
      //     AND envolvido.rg_substituto = ''
      //   WHERE sindicancia.cdopm = ?
      //   AND envolvido.situacao = ?
      //   AND sindicancias.sjd_ref_ano = ?
      //   ORDER BY sindicancia.id DESC
      // `,[cdopm,'sindicado'])
  }

  async outOfDateOPM(opm) {
    return await this.connection.query(
    `SELECT * FROM (
      SELECT sindicancia.id_sindicancia, andamento, envolvido.cargo, 
      envolvido.nome, sindicancia.cdopm, sjd_ref, sjd_ref_ano, abertura_data, 
      DIASUTEIS(abertura_data,DATE(NOW())) AS dutotal,
      b.dusobrestado,
      (DIASUTEIS(abertura_data,DATE(NOW()))-IFNULL(b.dusobrestado,0)) AS diasuteis 
      FROM sindicancia
      LEFT JOIN
      (SELECT id_sindicancia, SUM(DIASUTEIS(inicio_data, termino_data)+1) AS dusobrestado 
      FROM sobrestamento
      WHERE termino_data != ? AND id_sindicancia!= ?
      GROUP BY id_sindicancia) b
      ON b.id_sindicancia = sindicancia.id_sindicancia
      LEFT JOIN envolvido ON
      envolvido.id_sindicancia=sindicancia.id_sindicancia 
      AND envolvido.situacao= ? AND rg_substituto=:rg_substituto
      LEFT JOIN andamento ON
      andamento.id_andamento=sindicancia.id_andamento
      WHERE sindicancia.id_andamento= ?
      ) dt
      WHERE cdopm LIKE :opm AND dt.diasuteis > ?`,
    ['0000-00-00','','Encarregado','','6',Like(`${opm}%`),'30'])
  }
	

  async QtdOMAnos(opm='', year = ''){
   
    if (!year) {
      return await this.connection.query(
        `SELECT count(sjd_ref) AS qtd 
          FROM sindicancias
          WHERE sjd_ref_ano = ?
          AND cdopm LIKE ?
          GROUP BY sjd_ref_ano`,
        [year,opm])
    }
    const currentYear = new Date().getFullYear()
    for (let index = 2008; index < currentYear; index++) {
      const count = []
      count[String(index)] =  await this.connection.query(
        `SELECT count(sjd_ref) AS qtd 
          FROM sindicancias
          WHERE sjd_ref_ano = ?
          AND cdopm LIKE ?
          GROUP BY sjd_ref_ano`,
        [year,opm])
      return count
    }
  }

  async findPortaria(params: SearchPortariaDto): Promise<Sindicancia> {
    const { cdopm, portaria_numero } = params
    return await this.repository.findOne({cdopm, portaria_numero});
  }

  async create(data: CreateSindicanciaDto): Promise<Sindicancia> {
    const registry = this.repository.create(data);
    registry.sjd_ref_ano = this.getNextRefYear(data)
    registry.sjd_ref = await this.getNextRef(data)
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
    await this.findById(id);
    await this.repository.delete(id);
  }
}