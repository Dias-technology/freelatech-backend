import { getRepository, Repository } from 'typeorm'
import { ICreateSkillsDTO } from '@/modules/projects/dto/ICreateSkillsDTO'

import { ISkillsRepository } from '@/modules/projects/repositories/ISkillsRepository'
import { Skills } from '@/modules/projects/infra/entities/Skills'

class SkillsRepository implements ISkillsRepository {
	private readonly repository: Repository<Skills>

	constructor() {
		this.repository = getRepository(Skills)
	}

	async create(data: ICreateSkillsDTO): Promise<void> {
		const skill = this.repository.create(data)

		await this.repository.save(skill)
	}
}

export { SkillsRepository }
