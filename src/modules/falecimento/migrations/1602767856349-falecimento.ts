import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class falecimento1602767856349 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'falecimentos',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'rg', type: 'varchar', isNullable: true },
          { name: 'cargo', type: 'varchar', isNullable: true },
          { name: 'nome', type: 'varchar', isNullable: true },
          { name: 'data', type: 'timestamp', isNullable: true },
          { name: 'id_municipio', type: 'integer', isNullable: true },
          { name: 'endereco', type: 'varchar', isNullable: true },
          { name: 'endereco_numero', type: 'varchar', isNullable: true },
          { name: 'cdopm', type: 'varchar', isNullable: true },
          { name: 'bou_ano', type: 'integer', isNullable: true },
          { name: 'bou_numero', type: 'varchar', isNullable: true },
          { name: 'id_situacao', type: 'integer', isNullable: true },
          { name: 'resultado', type: 'varchar', isNullable: true },
          { name: 'descricao_txt', type: 'text', isNullable: true },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('falecimentos');
  }
}
