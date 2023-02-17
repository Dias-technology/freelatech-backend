import { inject, injectable } from 'tsyringe'
import { IOccupancyAreaRepository } from '@/modules/freelancerInformation/repositories/IOccupancyAreaRepository'
import { ICreateOccupancyAreaDTO } from '../../dto/ICreateOccupancyAreaDTO'

import { AppError } from '@/shared/errors/AppError'

@injectable()
class CreateAreaUseCase {
	constructor(
		@inject('OccupancyAreaRepository')
		private OccupancyAreaRepository: IOccupancyAreaRepository,
	) {}

	async execute({
		areas,
		areaFunction,
		user_id,
	}: ICreateOccupancyAreaDTO): Promise<void> {
		for (const areaArray of areas) {
			const areaAlreadyExists =
				await this.OccupancyAreaRepository.findByArea(areaArray)
			console.log('areaAlreadyExists', areaAlreadyExists)

			if (areaAlreadyExists) {
				throw new AppError({
					statusCode: 400,
					message: `Area ${areaAlreadyExists} already exists.`,
				})
			}
		}

		await this.OccupancyAreaRepository.create({
			areas,
			areaFunction,
			user_id,
		})
	}
}

export { CreateAreaUseCase }
