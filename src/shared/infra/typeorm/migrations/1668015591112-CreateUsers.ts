import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsers1668015591112 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table('users', [
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
					name: 'type',
					type: 'varchar',
				},
				{
					name: 'document',
					type: 'varchar',
					length: '14',
				},
				{
					name: 'email',
					type: 'varchar',
					isUnique: true,
				},
				{
					name: 'password',
					type: 'varchar',
				},
				{
					name: 'deleted_at',
					type: 'timestamp',
					isNullable: true,
				},
				{
					name: 'created_at',
					type: 'timestamp',
					default: 'now()',
				},
				{
					name: 'updated_at',
					type: 'timestamp',
					default: 'now()',
				},
			]),
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('users')
	}
}
