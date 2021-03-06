import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addCompletoApfd1615466139912 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'apfds',
      new TableColumn({ name: 'completo', type: 'boolean', isNullable: true }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('apfds', 'completo');
  }
}
