import { ICreateWorkDTO } from '@/modules/freelancerInformation/dto/ICreateWorkDTO'

export interface IWorkRepository {
    create: (data: ICreateWorkDTO) => Promise<void>
    
}