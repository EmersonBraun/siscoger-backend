import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addColumnsExclusaojudicial1615467303402
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'exclusoesjudicias',
      new TableColumn({
        name: 'prazo_decorrido',
        type: 'integer',
        default: null,
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('exclusoesjudicias', 'prazo_decorrido');
  }
}
