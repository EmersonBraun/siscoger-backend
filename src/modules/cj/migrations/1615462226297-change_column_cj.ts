import { MigrationInterface, QueryRunner } from 'typeorm';

export class changeColumnCj1615462226297 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('cj', 'exclusao_txt', 'exclusao_text');
    await queryRunner.renameColumn('cj', 'sintese_text', 'sintese_txt');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('cj', 'exclusao_text', 'exclusao_txt');
    await queryRunner.renameColumn('cj', 'sintese_txt', 'sintese_text');
  }
}
