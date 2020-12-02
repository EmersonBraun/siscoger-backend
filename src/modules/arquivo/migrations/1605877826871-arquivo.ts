import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class arquivo1605877826871 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "arquivos",
            columns: [
                { name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: 'local_atual', type: 'varchar', isNullable: true, },
                { name: 'obs', type: 'varchar', isNullable: true, },
                { name: 'numero', type: 'varchar', isNullable: true, },
                { name: 'letra', type: 'varchar', isNullable: true, },
                { name: 'id_ipm', type: 'integer', isNullable: true, },
                { name: 'id_cj', type: 'integer', isNullable: true, },
                { name: 'id_cd', type: 'integer', isNullable: true, },
                { name: 'id_adl', type: 'integer', isNullable: true, },
                { name: 'id_sindicancia', type: 'integer', isNullable: true, },
                { name: 'id_fatd', type: 'integer', isNullable: true, },
                { name: 'id_desercao', type: 'integer', isNullable: true, },
                { name: 'id_apfd', type: 'integer', isNullable: true, },
                { name: 'id_iso', type: 'integer', isNullable: true, },
                { name: 'id_it', type: 'integer', isNullable: true, },
                { name: 'id_sai', type: 'integer', isNullable: true, },
                { name: 'id_pad', type: 'integer', isNullable: true, },
                { name: 'id_proc_outros', type: 'integer', isNullable: true, },
                { name: 'id_punicao', type: 'integer', isNullable: true, },
                { name: 'rg', type: 'varchar', isNullable: true, },
                { name: 'nome', type: 'varchar', isNullable: true, },
                { name: 'opm', type: 'varchar', isNullable: true, },
                { name: 'arquivo_data', type: 'date', isNullable: true, },
                { name: 'retorno_data', type: 'date', isNullable: true, },
                { name: 'procedimento', type: 'varchar', isNullable: true, },
                { name: 'sjd_ref', type: 'varchar', isNullable: true, },
                { name: 'sjd_ref_ano', type: 'varchar', isNullable: true, },
                { name: "created_at", type: "timestamp", default: 'now()'},
                { name: "updated_at", type: "timestamp", isNullable: true },
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("arquivos");
    }

}
