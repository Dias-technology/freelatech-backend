import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from 'typeorm'

export class CreateSkills1677762154541 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.createTable(
			new Table('skills', [
				{
					type: 'uuid',
					name: 'id',
					isPrimary: true,
				},
				{
					name: 'skill',
					type: 'varchar',
				},
				{
					name: 'project_id',
					type: 'uuid',
				},
			]),
		)
		new TableForeignKey(
			'FKProjectToken',
			['project_id'],
			['id'],
			'new_project',
			'id',
		)
	}

	public async down(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.dropTable('skills')
	}
}
