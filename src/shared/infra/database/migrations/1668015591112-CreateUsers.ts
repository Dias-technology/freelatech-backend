import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsers1668015591112 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'users',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						isGenerated: true,
					},
					{
						name: 'name',
						type: 'varchar',
					},
					{
						name: 'type',
						type: 'enum',
						enum: ['customer', 'worker'],
						isNullable: false,
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
						name: 'hour_value',
						type: 'decimal',
						isNullable: true,
						precision: 8,
						scale: 2,
					},
					{
						name: 'time_available_weekly',
						type: 'int',
						isNullable: true,
						default: 0,
						comment: 'Tempo contabilizado em horas semanais.',
					},
					{
						name: 'profile_photo',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'background_photo',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'whatsapp',
						type: 'varchar',
						length: '13',
						isNullable: true,
					},
					{
						name: 'linkedin',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'instagram',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'deleted_at',
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
				],
			}),
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('users')
	}
}
