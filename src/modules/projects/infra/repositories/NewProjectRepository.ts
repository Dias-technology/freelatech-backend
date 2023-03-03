import { getRepository, Repository } from 'typeorm'
import { INewProjectRepository } from '@/modules/projects/repositories/INewProjectRepository'
import { NewProject } from '@/modules/projects/infra/entities/NewProject'
import { ICreateNewProjectDTO } from '@/modules/projects/dto/ICreateNewProjectDTO'

class NewProjectRepository implements INewProjectRepository {
    private readonly repository: Repository<NewProject>

    constructor() {
        this.repository = getRepository(NewProject)
    }

    async create(datas: ICreateNewProjectDTO): Promise<void> {
        const newProject = this.repository.create(datas)

        await this.repository.save(newProject)
    }
}

export { NewProjectRepository }