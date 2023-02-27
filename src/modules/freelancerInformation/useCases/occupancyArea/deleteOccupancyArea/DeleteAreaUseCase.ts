import { inject, injectable } from 'tsyringe'

import { IOccupancyAreaRepository } from '@/modules/freelancerInformation/repositories/IOccupancyAreaRepository'

@injectable()
class DeleteAreaUseCase {
	constructor(
		@inject('OccupancyAreaRepository')
		private OccupancyAreaRepository: IOccupancyAreaRepository,
	) {}

	async execute(id: string): Promise<void> {
		return await this.OccupancyAreaRepository.deleteById(id)
	}
}

export { DeleteAreaUseCase }
