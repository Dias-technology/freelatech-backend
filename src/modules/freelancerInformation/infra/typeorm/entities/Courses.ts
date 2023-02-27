import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'

import { User } from '@/modules/accounts/infra/typeorm/entities/User'

@Entity('courses')
class Courses {
	@PrimaryColumn()
	id: string

	@Column()
	name: string

    @Column()
	institute: string

    @Column()
	status: string

    @Column()
	category: string

	@Column()
	user_id: string

	@ManyToOne(() => User)
	@JoinColumn({ name: 'user_id' })
	user: User

	constructor() {
		if (!this.id) {
			this.id = uuid()
		}
	}
}

export { Courses }
