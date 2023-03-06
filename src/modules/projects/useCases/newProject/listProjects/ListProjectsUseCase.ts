import { inject, injectable } from 'tsyringe'

import { AppError } from '@/shared/errors/AppError'

import { INewProjectRepository } from '@/modules/projects/repositories/INewProjectRepository'
import { NewProject } from '@/modules/projects/infra/entities/NewProject'

@injectable()
class ListProjectsUseCase {
	constructor(
		@inject('NewProjectRepository')
		private NewProjectRepository: INewProjectRepository,
	) {}

	async execute(): Promise<NewProject[]> {
		return await this.NewProjectRepository.findProjectByID()
	}

	async executeOne(id: string): Promise<NewProject> {
		const project =
			await this.NewProjectRepository.findOneProjectByID(id)

		if (project.status == false) {
			throw new AppError({
				statusCode: 400,
				message: 'This project has already been disabled.',
			})
		}

		return project
	}
}

export { ListProjectsUseCase }
