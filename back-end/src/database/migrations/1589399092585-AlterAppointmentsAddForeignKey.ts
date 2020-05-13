import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class AlterAppointmentsAddForeignKey1589399092585
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'links',
      new TableForeignKey({
        name: 'LinkUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('links', 'LinkUser');
  }
}
