import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'

import { NewProject } from './NewProject'

@Entity('skills')
class Skills {
	@PrimaryColumn()
	id: string

	@Column()
	skill: string

	@Column()
	project_id: string

	@ManyToOne(() => NewProject)
	@JoinColumn({ name: 'project_id' })
	project: NewProject

	constructor() {
		if (!this.id) {
			this.id = uuid()
		}
	}
}

export { Skills }
