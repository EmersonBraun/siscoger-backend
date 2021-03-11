import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addColumnsPad1615467037890 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'pads',
      new TableColumn({ name: 'completo', type: 'boolean', isNullable: true }),
    );

    await queryRunner.addColumn(
      'pads',
      new TableColumn({
        name: 'diasuteis_sobrestado',
        type: 'integer',
        default: null,
        isNullable: true,
      }),
    );
    await queryRunner.addColumn(
      'pads',
      new TableColumn({
        name: 'motivo_sobrestado',
        type: 'varchar',
        default: null,
        isNullable: true,
      }),
    );
    await queryRunner.addColumn(
      'pads',
      new TableColumn({
        name: 'prazo_decorrido',
        type: 'integer',
        default: null,
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('pads', 'completo');
    await queryRunner.dropColumn('pads', 'diasuteis_sobrestado');
    await queryRunner.dropColumn('pads', 'motivo_sobrestado');
    await queryRunner.dropColumn('pads', 'prazo_decorrido');
  }
}
