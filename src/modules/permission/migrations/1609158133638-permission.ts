import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class permission1609158133638 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'permissions',
            columns:[
                { name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: "permission", type: "varchar", isNullable: true}, 
                { name: "created_at", type: "timestamp", default: 'now()'},
                { name: "updated_at", type: "timestamp", isNullable: true },
                { name: "deleted_at", type: "timestamp", default: null, isNullable: true},
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("permissions");
    }

}
