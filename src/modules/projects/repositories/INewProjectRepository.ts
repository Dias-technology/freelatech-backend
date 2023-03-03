import { ICreateNewProjectDTO } from '@/modules/projects/dto/ICreateNewProjectDTO'

class INewProjectRepository {
    create: (datas: ICreateNewProjectDTO) => Promise<void>
}

export { INewProjectRepository }