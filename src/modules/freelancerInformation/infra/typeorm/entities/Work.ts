import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryColumn,

} from 'typeorm'
import { v4 as uuid } from 'uuid'

import { User } from '@/modules/accounts/infra/typeorm/entities/User'

@Entity('work')
class Work {
	@PrimaryColumn()
	id: string

	@Column()
	business: string

    @Column()
    company: string

    @Column({ type: 'date' })
	start_work: Date

    @Column({ type: 'date' })
	end_work: Date

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

export { Work }
