import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addColumnsIso1615467446535 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'isos',
      new TableColumn({ name: 'completo', type: 'boolean', isNullable: true }),
    );
    await queryRunner.addColumn(
      'isos',
      new TableColumn({
        name: 'diasuteis_sobrestado',
        type: 'integer',
        default: null,
        isNullable: true,
      }),
    );
    await queryRunner.addColumn(
      'isos',
      new TableColumn({
        name: 'motivo_sobrestado',
        type: 'varchar',
        default: null,
        isNullable: true,
      }),
    );
    await queryRunner.addColumn(
      'isos',
      new TableColumn({
        name: 'prazo_decorrido',
        type: 'integer',
        default: null,
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('isos', 'completo');
    await queryRunner.dropColumn('isos', 'diasuteis_sobrestado');
    await queryRunner.dropColumn('isos', 'motivo_sobrestado');
    await queryRunner.dropColumn('isos', 'prazo_decorrido');
  }
}
