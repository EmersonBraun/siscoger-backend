import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class desercao1614634510972 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'desercoes',
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
            name: 'termo_exclusao',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'termo_exclusao_pub',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'termo_captura',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'termo_captura_pub',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          { name: 'pericia', type: 'varchar', default: null, isNullable: true },
          {
            name: 'pericia_pub',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'termo_inclusao',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'termo_inclusao_pub',
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
            name: 'referenciavajme',
            type: 'varchar',
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
    await queryRunner.dropTable('desercoes');
  }
}
