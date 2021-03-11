import { MigrationInterface, QueryRunner } from 'typeorm';

export class changeColumnCd1615465570448 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('cd', 'exclusao_text', 'exclusao_txt');
    await queryRunner.renameColumn('cd', 'sintese_text', 'sintese_txt');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('cd', 'exclusao_txt', 'exclusao_text');
    await queryRunner.renameColumn('cd', 'sintese_txt', 'sintese_text');
  }
}
