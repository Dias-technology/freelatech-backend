import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from 'typeorm'

export class CreateOccupancyArea1676573259418
	implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.createTable(
			new Table('occupancy_area', [
				{
					type: 'uuid',
					name: 'id',
					isPrimary: true,
				},
				{
					name: 'areas',
					type: 'varchar',
				},
				{
					name: 'areaFunction',
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
		await queryRunner.dropTable('occupancy_area')
	}
}
