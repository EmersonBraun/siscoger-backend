import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class andamentocoger1602766107618 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'andamentoscoger',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'andamentocoger', type: 'varchar', isNullable: true },
          { name: 'procedimento', type: 'varchar', isNullable: true },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('andamentoscoger');
  }
}
