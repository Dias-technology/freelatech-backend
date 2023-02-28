import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from 'typeorm'

export class CreateWorks1677589412457 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.createTable(
			new Table('work', [
				{
					type: 'uuid',
					name: 'id',
					isPrimary: true,
				},
				{
					name: 'business',
					type: 'varchar',
				},
				{
					name: 'company',
					type: 'varchar',
				},
				{
					name: 'start_work',
					type: 'timestamp with time zone',
				},
				{
					name: 'end_work',
					type: 'timestamp with time zone',
                    isNullable: true,
				},
				{
					name: 'user_id',
					type: 'uuid',
				},
				{
					name: 'created_at',
					type: 'timestamp with time zone',
					default: 'now()'
				}
			]),
		)
		new TableForeignKey(
			'FKUserToken',
			['user_id'],
			['id'],
			'users',
			'id',
		)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('work')
    }

}
