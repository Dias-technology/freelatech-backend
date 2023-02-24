import { ICreateOccupancyAreaDTO } from '@/modules/freelancerInformation/dto/ICreateOccupancyAreaDTO'
import { IOccupancyAreaRepository } from '@/modules/freelancerInformation/repositories/IOccupancyAreaRepository'
import { getRepository, Repository } from 'typeorm'
import { OccupancyArea } from '@/modules/freelancerInformation/infra/typeorm/entities/OccupancyArea'

class OccupancyAreaRepository implements IOccupancyAreaRepository {
	private readonly repository: Repository<OccupancyArea>

	constructor() {
		this.repository = getRepository(OccupancyArea)
	}

	async create(data: ICreateOccupancyAreaDTO): Promise<void> {
		const areas = this.repository.create(data)

		await this.repository.save(areas)
	}

	async findByArea(areas: string): Promise<OccupancyArea> {
		return this.repository.findOne({ areas })
	}

	async findByUserID(user_id: string): Promise<OccupancyArea[]> {
		return this.repository.find({ user_id })
	}
}

export { OccupancyAreaRepository }
