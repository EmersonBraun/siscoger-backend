import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class cd1610017579556 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cd',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'id_andamento',
            type: 'int',
            default: 0,
            isNullable: true,
          },
          {
            name: 'id_andamentocoger',
            type: 'int',
            default: 0,
            isNullable: true,
          },
          {
            name: 'id_motivoconselho',
            type: 'int',
            default: 0,
            isNullable: true,
          },
          {
            name: 'id_decorrenciaconselho',
            type: 'int',
            default: 0,
            isNullable: true,
          },
          {
            name: 'id_situacaoconselho',
            type: 'int',
            default: 0,
            isNullable: true,
          },
          {
            name: 'motivo_outros',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'abertura_data',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'sintese_text',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'libelo_file',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'doc_tipo',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'doc_numero',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'portaria_numero',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'fato_data',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'portaria_data',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'parecer_file',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'decisao_file',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'doc_prorrogacao',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'sjd_ref',
            type: 'int',
            default: 0,
          },
          {
            name: 'sjd_ref_ano',
            type: 'int',
            default: 0,
          },
          {
            name: 'prescricao_data',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'prescricao_comissao',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'parecer_cmtgeral',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'exclusao_txt',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'rec_ato_file',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'rec_gov_file',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'cdopm',
            type: 'varchar',
            default: 0,
          },
          {
            name: 'ac_desempenho_bl',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'ac_conduta_bl',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'ac_honra_bl',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'tjpr_file',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },
          {
            name: 'stj_file',
            type: 'varchar',
            default: 0,
            isNullable: true,
          },

          { name: 'prioridade', type: 'boolean', default: false },
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
    await queryRunner.dropTable('sindicancias');
  }
}
