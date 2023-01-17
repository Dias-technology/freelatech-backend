import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
} from 'typeorm'

import { User } from '@/domain/entities/user'

@Entity('OccupationArea')
class OccupationArea {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	area: string

	@Column()
	areaFunction: string

	@ManyToOne(() => User)
	@JoinColumn({ name: 'user_id' })
	user: User

	@Column()
	user_id: string
}

export { OccupationArea }
