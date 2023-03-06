import { inject, injectable } from 'tsyringe'

import { INewProjectRepository } from '@/modules/projects/repositories/INewProjectRepository'
import { NewProject } from '@/modules/projects/infra/entities/NewProject'

interface IRequestProject {
    id: string

    status: boolean
}

interface IRequestProjectWorker{
    id: string

    worker_id: string
}

@injectable()
class UpdateProjectUseCase {
    constructor(
		@inject('NewProjectRepository')
		private NewProjectRepository: INewProjectRepository,
	) {}

    async executeStatus({id, status}:IRequestProject): Promise<void>{
        const project = await this.NewProjectRepository.findOneProjectByID(id)
        
        project.status = status

        await this.NewProjectRepository.create(project)
    }

    async executeWorker({id, worker_id}:IRequestProjectWorker):Promise<void>{
        const project = await this.NewProjectRepository.findOneProjectByID(id)

        project.worker_id = worker_id

        await this.NewProjectRepository.create(project)

    }


}

export { UpdateProjectUseCase }