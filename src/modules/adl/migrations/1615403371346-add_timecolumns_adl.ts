import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addTimecolumnsAdl1615403371346 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'adls',
      new TableColumn({
        name: 'diasuteis_sobrestado',
        type: 'integer',
        default: null,
        isNullable: true,
      }),
    );
    await queryRunner.addColumn(
      'adls',
      new TableColumn({
        name: 'motivo_sobrestado',
        type: 'varchar',
        default: null,
        isNullable: true,
      }),
    );
    await queryRunner.addColumn(
      'adls',
      new TableColumn({
        name: 'prazo_decorrido',
        type: 'integer',
        default: null,
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('adls', 'diasuteis_sobrestado');
    await queryRunner.dropColumn('adls', 'motivo_sobrestado');
    await queryRunner.dropColumn('adls', 'prazo_decorrido');
  }
}
