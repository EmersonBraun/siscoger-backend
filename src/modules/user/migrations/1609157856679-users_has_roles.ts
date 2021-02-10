import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class usersHasRoles1609157856679 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users_has_roles',
            columns:[
                { name: "user_id", type: "integer", isNullable: true}, 
                { name: "role_id", type: "integer", isNullable: true}, 
            ]
        }))

        await queryRunner.createForeignKey("users_has_roles", new TableForeignKey({
            columnNames: ["role_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "roles",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("users_has_roles", new TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users_has_roles");
    }

}
