import { MigrationInterface, QueryRunner } from 'typeorm'

export class $npmConfigName1674420925955 implements MigrationInterface {
  name = '$npmConfigName1674420925955'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(500) NOT NULL, \`email\` varchar(500) NOT NULL, \`login\` varchar(500) NOT NULL, \`password\` varchar(500) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    )
    await queryRunner.query(
      `CREATE TABLE \`list\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(500) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    )
    await queryRunner.query(
      `CREATE TABLE \`item\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(500) NOT NULL, \`description\` varchar(500) NOT NULL, \`type\` varchar(500) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`item\``)
    await queryRunner.query(`DROP TABLE \`list\``)
    await queryRunner.query(`DROP TABLE \`user\``)
  }
}
