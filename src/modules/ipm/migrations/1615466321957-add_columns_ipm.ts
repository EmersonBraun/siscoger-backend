import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addColumnsIpm1615466321957 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'ipms',
      new TableColumn({ name: 'completo', type: 'boolean', isNullable: true }),
    );

    await queryRunner.addColumn(
      'ipms',
      new TableColumn({
        name: 'prazo_decorrido',
        type: 'integer',
        default: null,
        isNullable: true,
      }),
    );
    await queryRunner.addColumn(
      'ipms',
      new TableColumn({
        name: 'n_eproc',
        type: 'varchar',
        default: null,
        isNullable: true,
      }),
    );
    await queryRunner.addColumn(
      'ipms',
      new TableColumn({
        name: 'ano_eproc',
        type: 'varchar',
        default: null,
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('ipms', 'completo');
    await queryRunner.dropColumn('ipms', 'prazo_decorrido');
    await queryRunner.dropColumn('ipms', 'n_eproc');
    await queryRunner.dropColumn('ipms', 'ano_eproc');
  }
}
