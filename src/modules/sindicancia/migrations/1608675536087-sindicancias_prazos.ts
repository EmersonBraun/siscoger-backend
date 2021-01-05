import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class sindicanciasPrazos1608675536087 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('sindicancias', [
      new TableColumn({
        name: 'diasuteis_sobrestado',
        type: 'int',
        isNullable: true,
      }),
      new TableColumn({
        name: 'motivo_sobrestado',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'prazo_decorrido',
        type: 'int',
        isNullable: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('sindicancias', 'diasuteis_sobrestado');
    await queryRunner.dropColumn('sindicancias', 'motivo_sobrestado');
    await queryRunner.dropColumn('sindicancias', 'prazo_decorrido');
  }
}
