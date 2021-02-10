import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class feriado1602770074418 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'feriados',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'data', type: 'timestamp', isNullable: true },
          { name: 'feriado', type: 'varchar', isNullable: true },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('feriados');
  }
}
