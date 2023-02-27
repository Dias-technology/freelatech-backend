import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from 'typeorm'

export class CreateCourses1677536231523
	implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.createTable(
			new Table('courses', [
				{
					type: 'uuid',
					name: 'id',
					isPrimary: true,
				},
				{
					name: 'name',
					type: 'varchar',
				},
				{
					name: 'institute',
					type: 'varchar',
				},
				{
					name: 'status',
					type: 'varchar',
				},
				{
					name: 'category',
					type: 'varchar',
				},
				{
					name: 'user_id',
					type: 'uuid',
				},
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
		await queryRunner.dropTable('courses')
	}
}
