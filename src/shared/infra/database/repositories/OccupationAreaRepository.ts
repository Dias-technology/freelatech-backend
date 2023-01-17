import { IOccupationAreaRepository } from '@/data/protocols/repositories/OccupationAreaRepository'

import { getRepository, Repository } from 'typeorm'
import { OccupationArea } from '@/domain/entities'
import { AppError } from '@/shared/errors'
import { SaveOccupationAreaDTO } from '@/data/protocols/dto'
class OccupationAreaRepository implements IOccupationAreaRepository {
	private readonly repository: Repository<OccupationArea>

	constructor() {
		this.repository = getRepository(OccupationArea)
	}

	async save(data: SaveOccupationAreaDTO): Promise<OccupationArea> {
		const ocupationArea = this.repository.create(data)

		await this.repository.save(ocupationArea)

		return ocupationArea
	}

	async findById(id: string): Promise<OccupationArea> {
		const userAlreadyExists = await this.repository.findOne(id)

		if (!userAlreadyExists) {
			throw new AppError({
				statusCode: 404,
				message: "User doesn't exists.",
			})
		}
		return userAlreadyExists
	}

	async findByArea(area: string): Promise<OccupationArea> {
		return this.repository.findOne({ area })
	}

	async findByIdUser(id_user: string): Promise<OccupationArea[]> {
		return this.repository.find({
			where: {
				user_id: id_user,
			},
		})
	}
}

export { OccupationAreaRepository }
