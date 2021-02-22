import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CriaTabelas1591320163375 implements MigrationInterface {
  name = 'CriaTabelas1591320163375';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE content (id int NOT NULL AUTO_INCREMENT, description varchar(100) NOT NULL, linkContent varchar(100) NOT NULL, CONSTRAINT PK_6a2083913f3647b44f205204e36 PRIMARY KEY (id))`,
    );
    await queryRunner.query(
      `CREATE TABLE lesson (id int NOT NULL AUTO_INCREMENT, description varchar(100) NOT NULL, created_At TIMESTAMP NOT NULL DEFAULT now(), updated_At TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT PK_0ef25918f0237e68696dee455bd PRIMARY KEY (id))`,
    );
    await queryRunner.query(
      `CREATE TABLE student (id int NOT NULL AUTO_INCREMENT, name varchar(100) NOT NULL, keyy integer NOT NULL, created_At TIMESTAMP NOT NULL DEFAULT now(), updated_At TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT PK_3d8016e1cb58429474a3c041904 PRIMARY KEY (id))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE student`);
    await queryRunner.query(`DROP TABLE lesson`);
    await queryRunner.query(`DROP TABLE content`);
  }
}
