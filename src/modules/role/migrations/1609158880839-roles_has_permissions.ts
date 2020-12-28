import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class rolesHasPermissions1609158880839 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'roles_has_permissions',
            columns:[
                { name: "role_id", type: "integer", isNullable: true}, 
                { name: "permission_id", type: "integer", isNullable: true}, 
                { name: "group", type: "varchar", isNullable: true}, 
            ]
        }))

        await queryRunner.createForeignKey("roles_has_permissions", new TableForeignKey({
            columnNames: ["role_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "roles",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("roles_has_permissions", new TableForeignKey({
            columnNames: ["permission_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "permissions",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("roles_has_permissions");
    }

}
