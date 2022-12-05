import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

export enum TypeUser {
	WORKER = 'worker',
	CUSTOMER = 'customer',
}

@Entity('users')
export class User {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	name: string

	@Column()
	email: string

	@Column()
	password: string

	@Column({
		enum: TypeUser,
	})
	type: string

	@Column()
	document: string

	@Column()
	avatar_url: string

	@CreateDateColumn()
	created_at: Date

	@UpdateDateColumn()
	updated_at: Date

	@DeleteDateColumn()
	deleted_at: Date
}
