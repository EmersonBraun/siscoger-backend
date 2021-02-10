import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class sindicancias1601833822166 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "sindicancias",
            columns: [
                { name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: "id_andamentocoger", type: "int", default: 0, isNullable: true},
                { name: "id_andamento", type: "int", default: 6},
                { name: "sjd_ref", type: "int", default: 0},
                { name: "sjd_ref_ano", type: "int", default: 0},
                { name: "fato_data", type: "varchar", default: null, isNullable: true },
                { name: "abertura_data", type: "varchar", default: null, isNullable: true },
                { name: "sintese_txt", type: "varchar", },
                { name: "cdopm", type: "varchar", },
                { name: "doc_tipo", type: "varchar", default: null, isNullable: true },
                { name: "doc_numero", type: "varchar", default: null, isNullable: true },
                { name: "doc_origem_txt", type: "varchar", default: null, isNullable: true },
                { name: "portaria_numero", type: "varchar", },
                { name: "portaria_data", type: "varchar", },
                { name: "sol_cmt_file", type: "varchar", default: null, isNullable: true },
                { name: "sol_cmt_data", type: "varchar", default: null, isNullable: true },
                { name: "sol_cmtgeral_file", type: "varchar", default: null, isNullable: true },
                { name: "sol_cmtgeral_data", type: "varchar", default: null, isNullable: true },
                { name: "opm_meta4", type: "varchar", default: null, isNullable: true },
                { name: "relatorio_file", type: "varchar", default: null, isNullable: true },
                { name: "relatorio_data", type: "varchar", default: null, isNullable: true },
                { name: "prioridade", type: "boolean", default: false},
                { name: "created_at", type: "timestamp", default: 'now()'},
                { name: "updated_at", type: "timestamp", isNullable: true },
                { name: "deleted_at", type: "timestamp", default: null, isNullable: true},
                { name: "motivo_cancelamento", type: "varchar", default: null, isNullable: true },
                { name: "motivo_abertura", type: "varchar", default: null, isNullable: true },
                { name: "motivo_outros", type: "varchar", default: null, isNullable: true },
                { name: "prorogacao", type: "boolean", default: false, isNullable: true},
                { name: "prorogacao_dias", type: "int", default: 0},
                { name: "completo", type: "boolean", default: false, isNullable: true},
                { name: 'diasuteis_sobrestado', type: 'number', isNullable: true },
                { name: 'motivo_sobrestado', type: 'varchar', isNullable: true },
                { name: 'prazo_decorrido', type: 'number', isNullable: true },
            ]
        }), true)

        // await queryRunner.createForeignKey("andamento", new TableForeignKey({
        //     columnNames: ["id_andamento"],
        //     referencedColumnNames: ["id"],
        //     referencedTableName: "andamento",
        //     onDelete: "CASCADE"
        // }));

        // await queryRunner.createForeignKey("answer", new TableForeignKey({
        //     columnNames: ["id_andamentocoger"],
        //     referencedColumnNames: ["id"],
        //     referencedTableName: "andamentocoger",
        //     onDelete: "CASCADE"
        // }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("sindicancias");
    }

}
