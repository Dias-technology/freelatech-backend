
import { IcreateCoursesDTO } from '@/modules/freelancerInformation/dto/ICreateCoursesDTO'
import { Courses } from '../infra/typeorm/entities/Courses'


export interface ICoursesRepository {

    create: (data: IcreateCoursesDTO) => Promise<void>

    findByUserID: (user_id: string) => Promise<Courses[]>

}