import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class exclusaojudicial1614683641573 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'exclusoesjudicias',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'rg', type: 'varchar', default: null, isNullable: true },
          { name: 'cargo', type: 'varchar', default: null, isNullable: true },
          { name: 'nome', type: 'varchar', default: null, isNullable: true },
          {
            name: 'cdopm_quandoexcluido',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'origem_proc',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'origem_sjd_ref',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          {
            name: 'origem_sjd_ref_ano',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          {
            name: 'origem_opm',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'processo',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'complemento',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          { name: 'vara', type: 'varchar', default: null, isNullable: true },
          {
            name: 'numerounico',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          { name: 'data', type: 'Date', default: null, isNullable: true },
          {
            name: 'exclusao_data',
            type: 'Date',
            default: null,
            isNullable: true,
          },
          { name: 'obs_txt', type: 'varchar', default: null, isNullable: true }, // text
          {
            name: 'portaria_numero',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          {
            name: 'bg_numero',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          { name: 'bg_ano', type: 'integer', default: null, isNullable: true },
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
    await queryRunner.dropTable('exclusoesjudicias');
  }
}
