import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class restricao1614773691925 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'restricoes',
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
            name: 'fardamento_bl',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          { name: 'arma_bl', type: 'varchar', default: null, isNullable: true },
          { name: 'origem', type: 'varchar', default: null, isNullable: true },
          {
            name: 'cadastro_data',
            type: 'timestamp',
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
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
          {
            name: 'retirada_data',
            type: ' timestamp',
            default: null,
            isNullable: true,
          },
          { name: 'proc', type: 'varchar', default: null, isNullable: true },
          { name: 'sjd_ref', type: 'integer', default: null, isNullable: true },
          {
            name: 'sjd_ref_ano',
            type: 'integer',
            default: null,
            isNullable: true,
          },
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
    await queryRunner.dropTable('restricoes');
  }
}
