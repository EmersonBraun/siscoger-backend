import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addCompletoDesercao1615466248749 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'desercoes',
      new TableColumn({ name: 'completo', type: 'boolean', isNullable: true }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('desercoes', 'completo');
  }
}
