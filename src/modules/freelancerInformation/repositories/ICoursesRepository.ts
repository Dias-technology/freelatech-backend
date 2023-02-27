
import { IcreateCoursesDTO } from '@/modules/freelancerInformation/dto/ICreateCoursesDTO'


export interface ICoursesRepository {

    create: (data: IcreateCoursesDTO) => Promise<void>

}