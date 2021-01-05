import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addInRole1609353116922 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('roles', [
      new TableColumn({
        name: 'description',
        type: 'varchar',
        isNullable: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('roles', 'description');
  }
}
