import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class reintegrado1614773365243 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'fatds',
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
          { name: 'motivo', type: 'varchar', default: null, isNullable: true },
          {
            name: 'procedimento',
            type: 'varchar',
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
            name: 'retorno_data',
            type: 'timestamp',
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
    await queryRunner.dropTable('fatds');
  }
}
