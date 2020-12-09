import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class user1607000317341 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                { name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                
                { name: 'name', type: 'varchar', isNullable: true, },
                { name: 'rg', type: 'varchar', isNullable: true, },
                { name: 'cpf', type: 'varchar', isNullable: true, },
                { name: 'block', type: 'boolean', isNullable: true, default: false},
                { name: 'terms', type: 'boolean', isNullable: true, default: false},
                { name: 'email', type: 'varchar', isNullable: true, },
                { name: 'password', type: 'varchar', isNullable: true, },

                { name: 'class', type: 'varchar', isNullable: true, },
                { name: 'position', type: 'varchar', isNullable: true, },
                { name: 'group', type: 'varchar', isNullable: true, },
                { name: 'subgroup', type: 'varchar', isNullable: true, },

                { name: 'opm_code', type: 'varchar', isNullable: true, },
                { name: 'cdopm', type: 'varchar', isNullable: true, },

                { name: "created_at", type: "timestamp", default: 'now()'},
                { name: "updated_at", type: "timestamp", isNullable: true },
                { name: "deleted_at", type: "timestamp", default: null, isNullable: true},
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
