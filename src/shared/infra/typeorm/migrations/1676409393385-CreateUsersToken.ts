import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from 'typeorm'

export class CreateUsersToken1676409393385
	implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.createTable(
			new Table('users_tokens', [
				{
					type: 'uuid',
					name: 'id',
					isPrimary: true,
				},
				{
					name: 'refresh_token',
					type: 'varchar',
				},
				{
					name: 'user_id',
					type: 'uuid',
				},
				{
					name: 'expires_date',
					type: 'timestamp',
				},
				{
					name: 'created_at',
					type: 'timestamp',
					default: 'now()',
				},
			]),
		)
		new TableForeignKey(
			'FKUserToken',
			['user_id'],
			['id'],
			'users',
			'id',
			'CASCADE',
		)
	}

	public async down(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.dropTable('users_tokens')
	}
}
