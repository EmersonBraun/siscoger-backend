import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class iso1614696318578 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'isos',
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
          { name: 'sjd_ref', type: 'integer', default: null, isNullable: true },
          {
            name: 'sjd_ref_ano',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          { name: 'cdopm', type: 'varchar', default: null, isNullable: true },
          {
            name: 'fato_data',
            type: 'timestamp',
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
            name: 'sintese_txt',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'tipo_penal',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'doc_tipo',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'doc_numero',
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
            name: 'portaria_data',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
          {
            name: 'exclusao_txt',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'opm_meta4',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relatoriomedico_file',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relatoriomedico_data',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
          {
            name: 'solucaoautoridade_file',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'solucaoautoridade_data',
            type: 'timestamp',
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
    await queryRunner.dropTable('isos');
  }
}
