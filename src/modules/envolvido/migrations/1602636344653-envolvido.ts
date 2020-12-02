import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class envolvido1602636344653 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "envolvidos",
            columns: [
                { name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: 'rg_substituto', type: 'varchar', isNullable: true, },
                { name: 'nome', type: 'varchar', isNullable: true, },
                { name: 'rg', type: 'varchar', isNullable: true, },
                { name: 'situacao', type: 'varchar', isNullable: true, },
                { name: 'cargo', type: 'varchar', isNullable: true, },
                { name: 'resultado', type: 'varchar', isNullable: true, },
                { name: 'inclusao_ano', type: 'integer', isNullable: true, },
                { name: 'ipm_julgamento', type: 'varchar', isNullable: true, },
                { name: 'ipm_processocrime', type: 'varchar', isNullable: true, },
                { name: 'ipm_pena_anos', type: 'integer', isNullable: true, },
                { name: 'ipm_pena_meses', type: 'integer', isNullable: true, },
                { name: 'ipm_pena_dias', type: 'integer', isNullable: true, },
                { name: 'ipm_tipodapena', type: 'varchar', isNullable: true, },
                { name: 'ipm_transitojulgado_bl', type: 'varchar', isNullable: true, },
                { name: 'ipm_restritiva_bl', type: 'varchar', isNullable: true, },
                { name: 'obs_txt', type: 'text', isNullable: true,},
                { name: 'exclusaoportaria_data', type: 'timestamp', isNullable: true, },
                { name: 'exclusaoportaria_numero', type: 'varchar', isNullable: true, },
                { name: 'exclusaoboletim', type: 'varchar', isNullable: true, },
                { name: 'exclusaobg_numero', type: 'integer', isNullable: true, },
                { name: 'exclusaobg_ano', type: 'integer', isNullable: true, },
                { name: 'exclusaobg_data', type: 'timestamp', isNullable: true, },
                { name: 'exclusaoopm', type: 'varchar', isNullable: true, },
                { name: 'id_ipm', type: 'integer',isNullable: true, },
                { name: 'id_cj', type: 'integer',isNullable: true, },
                { name: 'id_cd', type: 'integer',isNullable: true, },
                { name: 'id_adl', type: 'integer',isNullable: true, },
                { name: 'id_sindicancia', type: 'integer',isNullable: true, },
                { name: 'id_fatd', type: 'integer',isNullable: true, },
                { name: 'id_desercao', type: 'integer',isNullable: true, },
                { name: 'id_apfd', type: 'integer',isNullable: true, },
                { name: 'id_iso', type: 'integer',isNullable: true, },
                { name: 'id_it', type: 'integer',isNullable: true, },
                { name: 'id_pad', type: 'integer',isNullable: true, },
                { name: 'id_sai', type: 'integer',isNullable: true, },
                { name: 'id_punicao', type: 'integer',isNullable: true, },
                { name: 'id_proc_outros', type: 'integer',isNullable: true, },
                { name: "created_at", type: "timestamp", default: 'now()'},
                { name: "updated_at", type: "timestamp", isNullable: true },
                { name: "deleted_at", type: "timestamp", default: null, isNullable: true},
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("envolvidos");
    }

}
