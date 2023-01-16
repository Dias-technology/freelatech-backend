import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class OccupationArea1673800289843
	implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'OccupationArea',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						isGenerated: true,
					},
					{
						name: 'area',
						type: 'varchar',
					},
					{
						name: 'areaFunction',
						type: 'varchar',
					},
				],
			}),
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('OccupationsArea')
	}
}
