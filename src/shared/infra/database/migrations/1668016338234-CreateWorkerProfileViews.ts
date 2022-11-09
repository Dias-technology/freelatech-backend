import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateWorkerProfileViews1668016338234
	implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'worker_profile_views',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						isGenerated: true,
					},
					{
						name: 'user_id',
						type: 'uuid',
						comment:
							'Deixei genérico, pois um freelancer pode estar olhando o perfil do outro, por isso não ficou como customer_id',
					},
					{
						name: 'worker_id',
						type: 'uuid',
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
				],
				foreignKeys: [
					{
						name: 'FK_USER_ID_WORKER_PROFILE_VIEWS',
						columnNames: ['user_id'],
						referencedColumnNames: ['id'],
						referencedTableName: 'users',
					},
					{
						name: 'FK_WORKER_ID_WORKER_PROFILE_VIEWS',
						columnNames: ['worker_id'],
						referencedColumnNames: ['id'],
						referencedTableName: 'users',
					},
				],
			}),
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('worker_profile_views')
	}
}
