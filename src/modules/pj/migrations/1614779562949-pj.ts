import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class pj1614779562949 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pjs',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'id_pad', type: 'integer', default: null, isNullable: true },
          { name: 'cnpj', type: 'varchar', default: null, isNullable: true },
          {
            name: 'razaosocial',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          { name: 'contato', type: 'varchar', default: null, isNullable: true },
          {
            name: 'telefone',
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
    await queryRunner.dropTable('pjs');
  }
}
