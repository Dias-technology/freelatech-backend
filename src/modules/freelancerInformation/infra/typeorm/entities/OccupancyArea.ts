import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'

import { User } from '@/modules/accounts/infra/typeorm/entities/User'

@Entity('occupancy_area')
class OccupancyArea {
	@PrimaryColumn()
	id: string

	@Column()
	areas: string

	@Column()
	user_id: string

	@Column()
	areaFunction: Date

	@ManyToOne(() => User)
	@JoinColumn({ name: 'user_id' })
	user: User

	constructor() {
		if (!this.id) {
			this.id = uuid()
		}
	}
}

export { OccupancyArea }
