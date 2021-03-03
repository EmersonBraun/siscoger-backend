import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class preso1614779587125 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'presos',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'rg', type: 'varchar', default: null, isNullable: true },
          { name: 'nome', type: 'varchar', default: null, isNullable: true },
          { name: 'cargo', type: 'varchar', default: null, isNullable: true },
          {
            name: 'cdopm_quandopreso',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'cdopm_prisao',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'localreclusao',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          { name: 'local', type: 'varchar', default: null, isNullable: true },
          {
            name: 'processo',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'natureza',
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
          {
            name: 'numeromandado',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'id_presotipo',
            type: 'integer',
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
            name: 'inicio_data',
            type: ' timestamp',
            default: null,
            isNullable: true,
          },
          {
            name: 'fim_data',
            type: ' timestamp',
            default: null,
            isNullable: true,
          },
          { name: 'vara', type: 'varchar', default: null, isNullable: true },
          { name: 'comarca', type: 'varchar', default: null, isNullable: true },
          { name: 'obs_txt', type: 'text', default: null, isNullable: true },
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
    await queryRunner.dropTable('presos');
  }
}
