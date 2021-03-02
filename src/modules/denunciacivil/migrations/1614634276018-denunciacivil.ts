import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class denunciacivil1614634276018 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'denunciacivis',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'rg', type: 'varchar', default: null, isNullable: true },
          {
            name: 'rg_cadastro',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          { name: 'cargo', type: 'varchar', default: null, isNullable: true },
          { name: 'nome', type: 'varchar', default: null, isNullable: true },
          {
            name: 'processo',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'infracao',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'processocrime',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'julgamento',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'tipodapena',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'pena_anos',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          {
            name: 'pena_meses',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          {
            name: 'pena_dias',
            type: 'integer',
            default: null,
            isNullable: true,
          },
          {
            name: 'transitojulgado_bl',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'restritiva_bl',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          { name: 'obs_txt', type: 'varchar', default: null, isNullable: true },
          {
            name: 'decorrenciaconselho',
            type: 'varchar',
            default: 0,
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
    await queryRunner.dropTable('denunciacivis');
  }
}
