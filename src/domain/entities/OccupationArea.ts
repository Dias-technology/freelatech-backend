import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('OccupationArea')
class OccupationArea {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	area: string

	@Column()
	areaFunction: string
}

export { OccupationArea }
