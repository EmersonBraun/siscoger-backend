import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class ofendido1602542171447 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ofendidos',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },

          { name: 'nome', type: 'varchar', isNullable: true },
          { name: 'rg', type: 'varchar', isNullable: true },
          { name: 'situacao', type: 'varchar', isNullable: true },
          { name: 'resultado', type: 'varchar', isNullable: true },
          { name: 'sexo', type: 'varchar', isNullable: true },
          { name: 'idade', type: 'varchar', isNullable: true },
          { name: 'fone', type: 'varchar', isNullable: true },
          { name: 'email', type: 'varchar', isNullable: true },

          { name: 'id_adl', type: 'integer', isNullable: true },
          { name: 'id_apfd', type: 'integer', isNullable: true },
          { name: 'id_cd', type: 'integer', isNullable: true },
          { name: 'id_cj', type: 'integer', isNullable: true },
          { name: 'id_desercao', type: 'integer', isNullable: true },
          { name: 'id_fatd', type: 'integer', isNullable: true },
          { name: 'id_ipm', type: 'integer', isNullable: true },
          { name: 'id_iso', type: 'integer', isNullable: true },
          { name: 'id_it', type: 'integer', isNullable: true },
          { name: 'id_sindicancia', type: 'integer', isNullable: true },
          { name: 'id_preso', type: 'integer', isNullable: true },
          { name: 'id_falecimento', type: 'integer', isNullable: true },
          { name: 'id_sai', type: 'integer', isNullable: true },
          { name: 'id_proc_outros', type: 'integer', isNullable: true },
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
    await queryRunner.dropTable('ofendidos');
  }
}
