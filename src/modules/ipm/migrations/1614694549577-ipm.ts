import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class ipm1614694549577 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ipms',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'id_andamento',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          {
            name: 'id_andamentocoger',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          {
            name: 'id_municipio',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          {
            name: 'id_situacao',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          { name: 'cdopm', type: 'varchar', default: null, isNullable: true },
          {
            name: 'opm_sigla',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          { name: 'opm_ref', type: 'integer', default: null, isNullable: true },
          {
            name: 'opm_ref_ano',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          { name: 'sjd_ref', type: 'integer', default: null, isNullable: true },
          {
            name: 'sjd_ref_ano',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          {
            name: 'abertura_data',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
          {
            name: 'fato_data',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
          {
            name: 'autuacao_data',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
          { name: 'crime', type: 'varchar', default: null, isNullable: true },
          { name: 'tentado', type: 'varchar', default: null, isNullable: true },
          {
            name: 'crime_especificar',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'sintese_txt',
            type: 'text',
            default: null,
            isNullable: true,
          },
          {
            name: 'relato_enc',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relato_enc_data',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
          {
            name: 'relato_cmtopm',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relato_cmtopm_data',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
          {
            name: 'relato_cmtgeral',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relato_cmtgeral_data',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
          {
            name: 'vajme_ref',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'justicacomum_ref',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          { name: 'vitima', type: 'varchar', default: null, isNullable: true },
          {
            name: 'confronto_armado_bl',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'vitima_qtdd',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          {
            name: 'julgamento',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'portaria_numero',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'exclusao_txt',
            type: 'text',
            default: null,
            isNullable: true,
          },
          {
            name: 'relato_enc_file',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relato_cmtopm_file',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relato_cmtgeral_file',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'defensor_oab',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'defensor_nome',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relcomplementar_file',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relcomplementar_data',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
          {
            name: 'opm_meta4',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          { name: 'bou_ano', type: 'integer', default: null, isNullable: true },
          {
            name: 'bou_numero',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          {
            name: 'prioridade',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
          { name: 'updated_at', type: 'timestamp', isNullable: true },
          {
            name: 'deleted_at',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ipms');
  }
}
