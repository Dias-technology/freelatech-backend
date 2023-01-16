import { inject, singleton } from 'tsyringe'
import { IOccupationAreaService } from '@/data/protocols/services'
import { SaveOccupationAreaDTO } from '@/data/protocols/dto'
import { OccupationArea } from '@/domain/entities'
import { AppError } from '@/shared/errors'
import { IStorageProvider } from '@/data/protocols/providers'
import { IOccupationAreaRepository } from '@/data/protocols/repositories'

@singleton()
class OccupationAreaService implements IOccupationAreaService {
	constructor(
		@inject('OccupationAreaRepository')
		private readonly occupationAreaRepository: IOccupationAreaRepository,
		@inject('StorageProvider')
		private readonly storageProvider: IStorageProvider,
	) {}

	async create(data: SaveOccupationAreaDTO): Promise<OccupationArea> {
		const userAlreadyExists = await this.checkAreaIsUnique(data.area)

		if (userAlreadyExists) {
			throw new AppError({
				statusCode: 400,
				message: 'Area already created.',
			})
		}

		return this.occupationAreaRepository.save(data)
	}

	private async checkAreaIsUnique(
		area: string,
	): Promise<OccupationArea | null> {
		return this.occupationAreaRepository.findByArea(area)
	}
}

export { OccupationAreaService }
