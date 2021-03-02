import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addTimestampsApfd1614685001741 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'apfds',
      new TableColumn({
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
      }),
    );
    await queryRunner.addColumn(
      'apfds',
      new TableColumn({
        name: 'updated_at',
        type: 'timestamp',
        isNullable: true,
      }),
    );
    await queryRunner.addColumn(
      'apfds',
      new TableColumn({
        name: 'deleted_at',
        type: 'timestamp',
        default: null,
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('apfds', 'created_at');
    await queryRunner.dropColumn('apfds', 'updated_at');
    await queryRunner.dropColumn('apfds', 'deleted_at');
  }
}
