import { inject, injectable } from 'tsyringe'

import { ISkillsRepository } from '@/modules/projects/repositories/ISkillsRepository'
import { ICreateSkillsDTO } from '@/modules/projects/dto/ICreateSkillsDTO'

import { AppError } from '@/shared/errors/AppError'

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
		const skillAlreadyExists = 
		await this.SkillsRepository.findSkillsByProject(project_id)

		if (skillAlreadyExists.length >= 6) {
			throw new AppError({
				statusCode: 400,
				message: 'The project can only register 6 different skills',
			})
		}

		for (const skillUsed of skillAlreadyExists) {
			if (skillUsed.skill == skill) {
				throw new AppError({
					statusCode: 400,
					message: 'The skill already exists for this project',
				})
			}
		}


		await this.SkillsRepository.create({ skill, project_id })
	}
}

export { CreateSkillsUseCase }
