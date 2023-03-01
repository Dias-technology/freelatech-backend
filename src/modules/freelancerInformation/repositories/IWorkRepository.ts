import { ICreateWorkDTO } from '@/modules/freelancerInformation/dto/ICreateWorkDTO'
import { Work } from '../infra/typeorm/entities/Work'

export interface IWorkRepository {
    create: (data: ICreateWorkDTO) => Promise<void>

    findJobsByUserID: (user_id: string) => Promise<Work[]>

    deleteJobByID: (id: string) => Promise<void>
    
}