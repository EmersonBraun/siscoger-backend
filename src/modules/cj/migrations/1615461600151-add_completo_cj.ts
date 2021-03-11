import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addCompletoCj1615461600151 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'cj',
      new TableColumn({ name: 'completo', type: 'boolean', isNullable: true }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('cj', 'completo');
  }
}
