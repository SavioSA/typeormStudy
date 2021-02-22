import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateClass1590782013559 implements MigrationInterface {
  name = 'createClass1590782013559';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE class (id integer NOT NULL AUTO_INCREMENT, name varchar(100) NOT NULL, duration integer NOT NULL, created_At TIMESTAMP NOT NULL DEFAULT now(), updated_At TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT PK_0b9024d21bdfba8b1bd1c300eae PRIMARY KEY (id))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "class"`);
  }
}
