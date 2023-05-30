import { MigrationInterface, QueryRunner } from "typeorm";

export class default1685447445610 implements MigrationInterface {
    name = 'default1685447445610'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "match" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), "idhost" integer, "idvisitor" integer, CONSTRAINT "PK_92b6c3a6631dd5b24a67c69f69d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "team" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_cf461f5b40cf1a2b8876011e1e1" UNIQUE ("name"), CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "match" ADD CONSTRAINT "fk_host_id" FOREIGN KEY ("idhost") REFERENCES "team"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "match" ADD CONSTRAINT "fk_visitor_id" FOREIGN KEY ("idvisitor") REFERENCES "team"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "match" DROP CONSTRAINT "fk_visitor_id"`);
        await queryRunner.query(`ALTER TABLE "match" DROP CONSTRAINT "fk_host_id"`);
        await queryRunner.query(`DROP TABLE "team"`);
        await queryRunner.query(`DROP TABLE "match"`);
    }

}
