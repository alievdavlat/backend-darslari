import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1695999619835 implements MigrationInterface {
    name = 'Migration1695999619835'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "players" RENAME COLUMN "name" TO "username"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "players" RENAME COLUMN "username" TO "name"`);
    }

}
