import { inject, injectable } from 'tsyringe'
import { IOccupancyAreaRepository } from '@/modules/freelancerInformation/repositories/IOccupancyAreaRepository'
import { ICreateOccupancyAreaDTO } from '@/modules/freelancerInformation/dto/ICreateOccupancyAreaDTO'

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
		const areaAlreadyExistsThisUser =
			await this.OccupancyAreaRepository.findByUserID(user_id)

		if (areaAlreadyExistsThisUser.length >= 3) {
			throw new AppError({
				statusCode: 400,
				message: 'The user can only register 3 different areas',
			})
		}

		for (const areaUsed of areaAlreadyExistsThisUser) {
			if (areaUsed.areas == areas) {
				throw new AppError({
					statusCode: 400,
					message: 'Area already Exists',
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
