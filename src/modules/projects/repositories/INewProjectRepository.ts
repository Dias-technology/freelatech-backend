import { ICreateNewProjectDTO } from '@/modules/projects/dto/ICreateNewProjectDTO'
import { NewProject } from '../infra/entities/NewProject'

class INewProjectRepository {
	create: (datas: ICreateNewProjectDTO) => Promise<void>

	findProjectByID: () => Promise<NewProject[]>

	findOneProjectByID: (id: string) => Promise<NewProject>
}

export { INewProjectRepository }
