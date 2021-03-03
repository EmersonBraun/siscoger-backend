import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class procoutros1614779610442 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'procoutros',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'sjd_ref', type: 'integer', default: null, isNullable: true },
          {
            name: 'sjd_ref_ano',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          {
            name: 'rg_cadastro',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          { name: 'cdopm', type: 'varchar', default: null, isNullable: true },
          {
            name: 'opm_abreviatura',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'cdopm_apuracao',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'abertura_data',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
          { name: 'data', type: 'timestamp', default: null, isNullable: true },
          { name: 'bou_ano', type: 'varchar', default: null, isNullable: true },
          {
            name: 'bou_numero',
            type: 'varchar',
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
            name: 'doc_origem',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'num_doc_origem',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'motivo_abertura',
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
            name: 'relatorio1',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relatorio1_file',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relatorio1_data',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
          {
            name: 'relatorio2',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relatorio2_file',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relatorio2_data',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
          {
            name: 'relatorio3',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relatorio3_file',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relatorio3_data',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
          {
            name: 'desc_outros',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'andamento',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'andamentocoger',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'vtr1_placa',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'vtr1_prefixo',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'vtr2_placa',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'vtr2_prefixo',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'digitador',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          { name: 'num_pid', type: 'varchar', default: null, isNullable: true },
          {
            name: 'limite_data',
            type: 'timestamp',
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
    await queryRunner.dropTable('procoutros');
  }
}
