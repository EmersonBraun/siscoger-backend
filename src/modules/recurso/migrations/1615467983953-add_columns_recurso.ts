import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addColumnsRecurso1615467983953 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'recursos',
      new TableColumn({
        name: 'prazo_decorrido',
        type: 'integer',
        default: null,
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('recursos', 'prazo_decorrido');
  }
}
