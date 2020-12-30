import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addInPermission1609353131860 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('permissions', [
            new TableColumn({ name: 'description', type: 'varchar', isNullable: true}),
            new TableColumn({ name: 'group', type: 'varchar', isNullable: true}),
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('permissions','description')
        await queryRunner.dropColumn('permissions','group')
    }

}
