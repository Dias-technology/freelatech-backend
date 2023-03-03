import { inject, injectable } from 'tsyringe'

import { INewProjectRepository } from '@/modules/projects/repositories/INewProjectRepository'
import { ICreateNewProjectDTO } from '@/modules/projects/dto/ICreateNewProjectDTO'


@injectable()
class CreateNewProjectUseCase {
    constructor(
        @inject('NewProjectRepository')
        private NewProjectRepository: INewProjectRepository
    ){}

    async execute(datas: ICreateNewProjectDTO): Promise<void>{
        
        await this.NewProjectRepository.create(datas)
    }


}

export { CreateNewProjectUseCase }
