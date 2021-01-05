import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class gradacao1602771158885 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'gradacoes',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'gradacao', type: 'varchar', isNullable: true },
          { name: 'rel', type: 'varchar', isNullable: true },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('gradacoes');
  }
}
