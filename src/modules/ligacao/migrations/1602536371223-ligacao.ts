import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class ligacao1602536371223 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ligacoes',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'origem_opm', type: 'varchar', isNullable: true },
          { name: 'origem_sjd_ref', type: 'integer', isNullable: true },
          { name: 'origem_sjd_ref_ano', type: 'integer', isNullable: true },
          { name: 'origem_proc', type: 'varchar', isNullable: true },
          { name: 'destino_sjd_ref', type: 'integer', isNullable: true },
          { name: 'destino_sjd_ref_ano', type: 'integer', isNullable: true },
          { name: 'destino_proc', type: 'varchar', isNullable: true },
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
    await queryRunner.dropTable('ligacoes');
  }
}
