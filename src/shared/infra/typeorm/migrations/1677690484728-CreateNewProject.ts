import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from 'typeorm'

export class CreateNewProject1677690484728 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.createTable(
			new Table('new_project', [
				{
					type: 'uuid',
					name: 'id',
					isPrimary: true,
				},
                {
					name: 'title',
					type: 'varchar',
				},
				{
					name: 'description',
					type: 'varchar',
				},
				{
					name: 'file',
					type: 'varchar',
				},
                {
					name: 'skills',
					type: 'varchar',
                    isNullable: true,
				},
				{
					name: 'experience_level',
					type: 'varchar',
                    isNullable: true,
				},
                {
					name: 'budget',
					type: 'varchar'
				},
                {
					name: 'occupancy',
					type: 'varchar',
				},
                {
					name: 'sub_occupancy',
					type: 'varchar'
				},
				{
					name: 'start_project',
					type: 'timestamp with time zone',
                    isNullable: true,
				},
				{
					name: 'end_project',
					type: 'timestamp with time zone',
                    isNullable: true,
				},
                {
					name: 'created_at',
					type: 'timestamp with time zone',
					default: 'now()',
				},
                {
					name: 'updated_at',
					type: 'timestamp with time zone',
					default: 'now()',
				},
                {
					name: 'deleted_at',
					type: 'timestamp with time zone',
					isNullable: true,
				},
				{
					name: 'worker_id',
					type: 'uuid',
                    isNullable: true,
				},
				{
					name: 'owner_id',
					type: 'uuid',
				},
			]),
		)
		new TableForeignKey(
			'FKWorkerToken',
			['worker_id'],
			['id'],
			'users',
			'id',
		),
        new TableForeignKey(
			'FKOwnerToken',
			['owner_id'],
			['id'],
			'users',
			'id',
		)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('new_project')
    }

}
