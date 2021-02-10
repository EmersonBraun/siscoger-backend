import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class sobrestamento1602543307395 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sobrestamentos',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },

          { name: 'rg', type: 'text', isNullable: true },
          { name: 'inicio_data', type: 'date', isNullable: true },
          { name: 'publicacao_inicio', type: 'varchar', isNullable: true },
          { name: 'termino_data', type: 'date', isNullable: true },
          { name: 'publicacao_termino', type: 'varchar', isNullable: true },
          { name: 'motivo', type: 'varchar', isNullable: true },

          { name: 'id_cd', type: 'integer', isNullable: true },
          { name: 'id_cj', type: 'integer', isNullable: true },
          { name: 'id_sindicancia', type: 'integer', isNullable: true },
          { name: 'id_fatd', type: 'integer', isNullable: true },
          { name: 'id_iso', type: 'integer', isNullable: true },
          { name: 'id_it', type: 'integer', isNullable: true },
          { name: 'id_adl', type: 'integer', isNullable: true },

          { name: 'doc_controle_inicio', type: 'varchar', isNullable: true },
          { name: 'doc_controle_termino', type: 'varchar', isNullable: true },

          { name: 'created_at', type: 'timestamp', default: 'now()' },
          { name: 'updated_at', type: 'timestamp', isNullable: true },
          {
            name: 'deleted_at',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sobrestamentos');
  }
}
