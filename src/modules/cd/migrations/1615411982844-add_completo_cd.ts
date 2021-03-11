import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addCompletoCd1615411982844 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'cd',
      new TableColumn({ name: 'completo', type: 'boolean', isNullable: true }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('cd', 'completo');
  }
}
