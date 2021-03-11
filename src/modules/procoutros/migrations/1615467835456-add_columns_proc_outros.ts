import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addColumnsProcOutros1615467835456 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'procoutros',
      new TableColumn({ name: 'completo', type: 'boolean', isNullable: true }),
    );
    await queryRunner.addColumn(
      'procoutros',
      new TableColumn({
        name: 'prazo_decorrido',
        type: 'integer',
        default: null,
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('procoutros', 'completo');
    await queryRunner.dropColumn('procoutros', 'prazo_decorrido');
  }
}
