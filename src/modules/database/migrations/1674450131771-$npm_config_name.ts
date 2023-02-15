import { MigrationInterface, QueryRunner } from 'typeorm'

export class $npmConfigName1674450131771 implements MigrationInterface {
  name = '$npmConfigName1674450131771'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`item\` ADD \`parentId\` int NULL`)
    await queryRunner.query(
      `ALTER TABLE \`item\` ADD CONSTRAINT \`FK_2e3b654a1f669d356e259e7ca3c\` FOREIGN KEY (\`parentId\`) REFERENCES \`item\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`item\` DROP FOREIGN KEY \`FK_2e3b654a1f669d356e259e7ca3c\``,
    )
    await queryRunner.query(`ALTER TABLE \`item\` DROP COLUMN \`parentId\``)
  }
}
