import { inject, injectable } from 'tsyringe'

import { ISkillsRepository } from '@/modules/projects/repositories/ISkillsRepository'
import { ICreateSkillsDTO } from '@/modules/projects/dto/ICreateSkillsDTO'

@injectable()
class CreateSkillsUseCase {
	constructor(
		@inject('SkillsRepository')
		private SkillsRepository: ISkillsRepository,
	) {}

	async execute({
		skill,
		project_id,
	}: ICreateSkillsDTO): Promise<void> {
		await this.SkillsRepository.create({ skill, project_id })
	}
}

export { CreateSkillsUseCase }
