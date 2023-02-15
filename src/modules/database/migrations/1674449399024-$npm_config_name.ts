import { MigrationInterface, QueryRunner } from 'typeorm'

export class $npmConfigName1674449399024 implements MigrationInterface {
  name = '$npmConfigName1674449399024'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`item\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(500) NOT NULL, \`description\` varchar(500) NOT NULL, \`type\` enum ('children', 'father') NOT NULL DEFAULT 'father', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`listIdId\` int NULL, \`userId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    )
    await queryRunner.query(
      `ALTER TABLE \`item\` ADD CONSTRAINT \`FK_5a139419a3c0ca8b5e22c7033ff\` FOREIGN KEY (\`listIdId\`) REFERENCES \`list\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE \`item\` ADD CONSTRAINT \`FK_5369db3bd33839fd3b0dd5525d1\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`item\` DROP FOREIGN KEY \`FK_5369db3bd33839fd3b0dd5525d1\``,
    )
    await queryRunner.query(
      `ALTER TABLE \`item\` DROP FOREIGN KEY \`FK_5a139419a3c0ca8b5e22c7033ff\``,
    )
    await queryRunner.query(`DROP TABLE \`item\``)
  }
}
