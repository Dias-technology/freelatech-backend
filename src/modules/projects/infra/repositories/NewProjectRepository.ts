import { getRepository, Repository } from 'typeorm'

import { NewProject } from '@/modules/projects/infra/entities/NewProject'

import { INewProjectRepository } from '@/modules/projects/repositories/INewProjectRepository'
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

	async findProjectByID(): Promise<NewProject[]> {
		return this.repository.find()
	}

	async findOneProjectByID(id: string): Promise<NewProject> {
		return this.repository.findOne({ id })
	}
}

export { NewProjectRepository }
