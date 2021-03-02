import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addTimestampsAdl1614685862269 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'adls',
      new TableColumn({
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
      }),
    );
    await queryRunner.addColumn(
      'adls',
      new TableColumn({
        name: 'updated_at',
        type: 'timestamp',
        isNullable: true,
      }),
    );
    await queryRunner.addColumn(
      'adls',
      new TableColumn({
        name: 'deleted_at',
        type: 'timestamp',
        default: null,
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('adls', 'created_at');
    await queryRunner.dropColumn('adls', 'updated_at');
    await queryRunner.dropColumn('adls', 'deleted_at');
  }
}
