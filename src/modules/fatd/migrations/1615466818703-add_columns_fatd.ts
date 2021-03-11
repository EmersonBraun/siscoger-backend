import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addColumnsFatd1615466818703 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'fatds',
      new TableColumn({ name: 'completo', type: 'boolean', isNullable: true }),
    );

    await queryRunner.addColumn(
      'fatds',
      new TableColumn({
        name: 'diasuteis_sobrestado',
        type: 'integer',
        default: null,
        isNullable: true,
      }),
    );
    await queryRunner.addColumn(
      'fatds',
      new TableColumn({
        name: 'motivo_sobrestado',
        type: 'varchar',
        default: null,
        isNullable: true,
      }),
    );
    await queryRunner.addColumn(
      'fatds',
      new TableColumn({
        name: 'prazo_decorrido',
        type: 'integer',
        default: null,
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('fatds', 'completo');
    await queryRunner.dropColumn('fatds', 'diasuteis_sobrestado');
    await queryRunner.dropColumn('fatds', 'motivo_sobrestado');
    await queryRunner.dropColumn('fatds', 'prazo_decorrido');
  }
}
