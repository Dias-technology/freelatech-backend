import { Expose } from 'class-transformer'
import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryColumn,
	UpdateDateColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('users')
class User {
	@PrimaryColumn()
	id: string

	@Column()
	name: string

	@Column()
	email: string

	@Column()
	password: string

	@Column()
	type: string

	@Column()
	document: string

	@Column()
	avatar: string

	@CreateDateColumn()
	created_at: Date

	@UpdateDateColumn()
	updated_at: Date

	@Column()
	deleted_at: Date

	@Expose({ name: 'avatar_url' })
	avatar_url(): string {
		switch (process.env.DISK) {
			case 'local':
				return `${process.env.APP_API_URL}/avatar/${this.avatar}`
			case 's3':
				return `${process.env.AWS_BUCKET_URL}/avatar/${this.avatar}`
			default:
				return null
		}
	}

	constructor() {
		if (!this.id) {
			this.id = uuid()
		}
	}
}

export { User }
