import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class sai1614777210417 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sais',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'rg', type: 'varchar', default: null, isNullable: true },
          { name: 'cargo', type: 'varchar', default: null, isNullable: true },
          { name: 'nome', type: 'varchar', default: null, isNullable: true },
          {
            name: 'rg_cadastro',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          { name: 'data', type: 'timestamp', default: null, isNullable: true },
          {
            name: 'docorigem',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          { name: 'cdopm', type: 'varchar', default: null, isNullable: true },
          {
            name: 'cdopm_fato',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'cdopm_controle',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'opm_abreviatura',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'sintese_txt',
            type: 'text',
            default: null,
            isNullable: true,
          },
          {
            name: 'digitador',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'arquivopasta',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'bou_ano1',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'bou_numero1',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'id_municipio',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          { name: 'bairro', type: 'varchar', default: null, isNullable: true },
          {
            name: 'logradouro',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'numerodoc',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'motivo_principal',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'motivo_secundario',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'desc_outros',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'id_andamento',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          {
            name: 'id_andamentocoger',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          { name: 'sjd_ref', type: 'integer', default: null, isNullable: true },
          {
            name: 'abertura_data',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
          {
            name: 'sjd_ref_ano',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          {
            name: 'vtr1_placa',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'vtr1_prefixo',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'vtr2_placa',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'vtr2_prefixo',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relatorio1',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relatorio1_data',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
          {
            name: 'relatorio1_file',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relatorio2',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relatorio2_data',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
          {
            name: 'relatorio2_file',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relatorio3',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'relatorio3_data',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
          {
            name: 'relatorio3_file',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'bou_ano2',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'bou_ano3',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'bou_numero2',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'bou_numero3',
            type: 'varchar',
            default: null,
            isNullable: true,
          },

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
    await queryRunner.dropTable('sais');
  }
}
