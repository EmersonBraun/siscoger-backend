import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class saidiligencias1614779101626 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'saidiligencias',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'sai', type: 'integer', default: null, isNullable: true },
          {
            name: 'rg_cadastro',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          { name: 'data', type: 'Date', default: null, isNullable: true },
          { name: 'cdopm', type: 'varchar', default: null, isNullable: true },
          {
            name: 'opm_abreviatura',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'diligencias_txt',
            type: 'text',
            default: null,
            isNullable: true,
          },
          {
            name: 'digitador',
            type: 'varchar',
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
    await queryRunner.dropTable('saidiligencias');
  }
}
