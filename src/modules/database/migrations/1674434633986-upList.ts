import { MigrationInterface, QueryRunner } from 'typeorm'

export class $npmConfigName1674434633986 implements MigrationInterface {
  name = '$npmConfigName1674434633986'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`list\` ADD \`userId\` int NULL`)
    await queryRunner.query(
      `ALTER TABLE \`list\` ADD CONSTRAINT \`FK_46ded14b26382088c9f032f8953\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`list\` DROP FOREIGN KEY \`FK_46ded14b26382088c9f032f8953\``,
    )
    await queryRunner.query(`ALTER TABLE \`list\` DROP COLUMN \`userId\``)
  }
}
