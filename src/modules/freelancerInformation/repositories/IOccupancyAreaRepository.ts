import { OccupancyArea } from '@/modules/freelancerInformation/infra/typeorm/entities/OccupancyArea'
import { ICreateOccupancyAreaDTO } from '@/modules/freelancerInformation/dto/ICreateOccupancyAreaDTO'

export interface IOccupancyAreaRepository {
	create: (data: ICreateOccupancyAreaDTO) => Promise<void>

	findByArea: (area: string) => Promise<OccupancyArea[]>
}
