import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm'
import { v4 as uuid } from 'uuid'

import { User } from '@/modules/accounts/infra/typeorm/entities/User'


@Entity('new_project')
class NewProject {
    @PrimaryColumn()
	id: string

    @Column()
	title: string

    @Column()
	description: string

    @Column()
	file: string

    @Column({default: true})
	status: boolean

    @Column()
	budget: string

    @Column()
	occupancy: string

    @Column()
	sub_occupancy: string

    @Column({ type: 'date' })
	start_project: Date

	@Column({ type: 'date' })
	end_project: Date

    @CreateDateColumn()
	created_at: Date

	@UpdateDateColumn()
	updated_at: Date

	@Column()
	deleted_at: Date

    @Column()
	worker_id: string

    @ManyToOne(() => User)
	@JoinColumn({ name: 'worker_id' })
	worker: User

    @Column()
	owner_id: string

    @ManyToOne(() => User)
	@JoinColumn({ name: 'owner_id' })
	owner: User

	constructor() {
		if (!this.id) {
			this.id = uuid()
		}
	}
}

export { NewProject }