import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class adl1605226790946 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'adls',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'id_andamento', type: 'integer', isNullable: true },
          { name: 'id_andamentocoger', type: 'integer', isNullable: true },
          { name: 'id_motivoconselho', type: 'integer', isNullable: true },
          { name: 'id_decorrenciaconselho', type: 'boolean', isNullable: true },
          { name: 'id_situacaoconselho', type: 'integer', isNullable: true },
          { name: 'outromotivo', type: 'varchar', isNullable: true },
          { name: 'cdopm', type: 'varchar', isNullable: true },
          { name: 'fato_data', type: 'date', isNullable: true },
          { name: 'abertura_data', type: 'date', isNullable: true },
          { name: 'sintese_txt', type: 'varchar', isNullable: true },
          { name: 'libelo_file', type: 'varchar', isNullable: true },
          { name: 'doc_tipo', type: 'varchar', isNullable: true },
          { name: 'doc_numero', type: 'varchar', isNullable: true },
          { name: 'portaria_numero', type: 'varchar', isNullable: true },
          { name: 'portaria_data', type: 'date', isNullable: true },
          { name: 'parecer_file', type: 'varchar', isNullable: true },
          { name: 'decisao_file', type: 'varchar', isNullable: true },
          { name: 'doc_prorrogacao', type: 'varchar', isNullable: true },
          { name: 'sjd_ref', type: 'integer', isNullable: true },
          { name: 'sjd_ref_ano', type: 'integer', isNullable: true },
          { name: 'prescricao_data', type: 'date', isNullable: true },
          { name: 'parecer_comissao', type: 'varchar', isNullable: true },
          { name: 'parecer_cmtgeral', type: 'varchar', isNullable: true },
          { name: 'exclusao_txt', type: 'varchar', isNullable: true },
          { name: 'rec_ato_file', type: 'varchar', isNullable: true },
          { name: 'rec_gov_file', type: 'varchar', isNullable: true },
          { name: 'ac_desempenho_bl', type: 'varchar', isNullable: true },
          { name: 'ac_conduta_bl', type: 'varchar', isNullable: true },
          { name: 'ac_honra_bl', type: 'varchar', isNullable: true },
          { name: 'tjpr_file', type: 'varchar', isNullable: true },
          { name: 'stj_file', type: 'varchar', isNullable: true },
          { name: 'prioridade', type: 'integer', isNullable: true },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('adls');
  }
}
