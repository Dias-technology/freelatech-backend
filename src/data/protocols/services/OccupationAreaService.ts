import { SaveOccupationAreaDTO } from '@/data/protocols/dto'
import { OccupationArea } from '@/domain/entities'

interface IOccupationAreaService {
	create: (data: SaveOccupationAreaDTO) => Promise<OccupationArea>
}

export { IOccupationAreaService }
