
import { inject, injectable } from 'tsyringe'

import { INewProjectRepository } from '@/modules/projects/repositories/INewProjectRepository'
import { NewProject } from '@/modules/projects/infra/entities/NewProject'

@injectable()
class ListProjectsUseCase {

    constructor(
        @inject('NewProjectRepository')
        private NewProjectRepository: INewProjectRepository
    ){}

    async execute(): Promise<NewProject[]>{
        return await this.NewProjectRepository.findProjectByID()
    }

}

export { ListProjectsUseCase }