import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class andamento1602766107617 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "andamentos",
            columns: [
                { name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: 'andamento', type: 'varchar', isNullable: true, },
                { name: 'procedimento', type: 'varchar', isNullable: true, },
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("andamentos");
    }

}
