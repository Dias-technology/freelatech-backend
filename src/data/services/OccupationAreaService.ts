import { inject, singleton } from 'tsyringe'
import { IOccupationAreaService } from '@/data/protocols/services'
import { SaveOccupationAreaDTO } from '@/data/protocols/dto'
import { OccupationArea } from '@/domain/entities'
import { AppError } from '@/shared/errors'
import { IStorageProvider } from '@/data/protocols/providers'
import { IOccupationAreaRepository } from '@/data/protocols/repositories'

interface IQuantityOccupation {
	user_id: string
	area: string

	functionArea: string
}
@singleton()
class OccupationAreaService implements IOccupationAreaService {
	constructor(
		@inject('OccupationAreaRepository')
		private readonly occupationAreaRepository: IOccupationAreaRepository,
		@inject('StorageProvider')
		private readonly storageProvider: IStorageProvider,
	) {}

	async create(
		data: SaveOccupationAreaDTO[],
	): Promise<OccupationArea[]> {
		const ocuppations: OccupationArea[] = []
		for (const item of data) {
			const hasArea = await this.checkAreaIsUnique(item.area)

			const hasUserId = await this.checkUserId(item.user_id)

			if (hasArea) {
				for (const userId of hasUserId) {
					hasArea.user_id == userId.user_id
					throw new AppError({
						statusCode: 400,
						message: 'Área já cadastrada para o usuário.',
					})
				}
			}

			const quantityUserAlreadyExists =
				await this.occupationAreaRepository.findByIdUser(item.user_id)

			if (quantityUserAlreadyExists?.length >= 3) {
				throw new AppError({
					statusCode: 400,
					message: 'Quantidade excedida.',
				})
			}

			ocuppations.push(
				Object.assign(
					item,
					await this.occupationAreaRepository.save(item),
				),
			)
		}

		return ocuppations
	}

	private async checkAreaIsUnique(
		area: string,
	): Promise<OccupationArea | null> {
		return this.occupationAreaRepository.findByArea(area)
	}

	private async checkUserId(
		user_id: string,
	): Promise<OccupationArea[]> {
		return this.occupationAreaRepository.findByIdUser(user_id)
	}
}

export { OccupationAreaService }
