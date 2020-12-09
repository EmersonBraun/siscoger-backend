import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class apfd1606828006066 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "apfd",
            columns: [
                { name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: 'id_andamento', type: 'integer', isNullable: true, }, 
                { name: 'id_andamentocoger', type: 'integer', isNullable: true, },
                { name: 'sjd_ref', type: 'integer', isNullable: true, },                
                { name: 'sjd_ref_ano', type: 'integer', isNullable: true, },                
                { name: 'tipo', type: 'varchar', isNullable: true, }, 
                { name: 'cdopm', type: 'varchar', isNullable: true, },
                { name: 'fato_data', type: 'date', isNullable: true},
                { name: 'sintese_txt', type: 'varchar', isNullable: true},
                { name: 'tipo_penal', type: 'varchar', isNullable: true},
                { name: 'tipo_penal_novo', type: 'varchar', isNullable: true},
                { name: 'especificar', type: 'varchar', isNullable: true},
                { name: 'doc_tipo', type: 'varchar', isNullable: true},
                { name: 'doc_numero', type: 'varchar', isNullable: true},
                { name: 'exclusao_txt', type: 'varchar', isNullable: true},
                { name: 'opm_meta4', type: 'varchar', isNullable: true},
                { name: 'referenciavajme', type: 'varchar', isNullable: true},
                { name: 'prioridade', type: 'integer', isNullable: true},                            
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("apfd");
    }

}
