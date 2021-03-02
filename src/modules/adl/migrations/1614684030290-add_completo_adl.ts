import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addCompletoAdl1614684030290 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'adls',
      new TableColumn({ name: 'completo', type: 'boolean', isNullable: true }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('adls', 'completo');
  }
}
