import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class motivoconselho1602771626090 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "motivoconselhos",
            columns: [
                { name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: 'motivoconselho', type: 'varchar', isNullable: true, },
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("motivoconselhos");
    }

}
