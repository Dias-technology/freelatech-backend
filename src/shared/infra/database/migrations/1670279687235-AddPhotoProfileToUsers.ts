import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AddPhotoProfileToUsers1670279687235
	implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'users',
			new TableColumn({
				name: 'avatar_url',
				type: 'varchar',
				isNullable: true,
			}),
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn('users', 'avatar_url')
	}
}
