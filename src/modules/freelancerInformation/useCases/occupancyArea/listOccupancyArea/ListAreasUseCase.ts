import { inject, injectable } from 'tsyringe'
import { OccupancyArea } from '@/modules/freelancerInformation/infra/typeorm/entities/OccupancyArea'

import { IOccupancyAreaRepository } from '@/modules/freelancerInformation/repositories/IOccupancyAreaRepository'

@injectable()
class ListAreasUseCase {
	constructor(
		@inject('OccupancyAreaRepository')
		private OccupancyAreaRepository: IOccupancyAreaRepository,
	) {}

	async execute(user_id: string): Promise<OccupancyArea[]> {
		return await this.OccupancyAreaRepository.findByUserID(user_id)
	}
}

export { ListAreasUseCase }
