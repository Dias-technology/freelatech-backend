import { inject, injectable } from 'tsyringe'

import { INewProjectRepository } from '@/modules/projects/repositories/INewProjectRepository'
import { NewProject } from '@/modules/projects/infra/entities/NewProject'

interface IRequestProject {
    id: string

    status: boolean
}

@injectable()
class UpdateProjectUseCase {
    constructor(
		@inject('NewProjectRepository')
		private NewProjectRepository: INewProjectRepository,
	) {}

    async execute({id, status}:IRequestProject): Promise<void>{
        const project = await this.NewProjectRepository.findOneProjectByID(id)
        
        project.status = status

        await this.NewProjectRepository.create(project)
    }


}

export { UpdateProjectUseCase }