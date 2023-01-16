import { OccupationArea } from '@/domain/entities'
import { SaveOccupationAreaDTO } from '@/data/protocols/dto'

interface IOccupationAreaRepository {
	save: (data: SaveOccupationAreaDTO) => Promise<OccupationArea>
	findById: (id: string) => Promise<OccupationArea>
	findByArea: (area: string) => Promise<OccupationArea>
}

export { IOccupationAreaRepository }
