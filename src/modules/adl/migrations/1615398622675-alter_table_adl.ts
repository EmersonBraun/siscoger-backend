import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class alterTableAdl1615398622675 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'adls',
      new TableColumn({
        name: 'id_decorrenciaconselho',
        type: 'boolean',
        isNullable: true,
      }),
      new TableColumn({
        name: 'id_decorrenciaconselho',
        type: 'integer',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'adls',
      new TableColumn({
        name: 'id_decorrenciaconselho',
        type: 'integer',
        isNullable: true,
      }),
      new TableColumn({
        name: 'id_decorrenciaconselho',
        type: 'boolean',
        isNullable: true,
      }),
    );
  }
}
