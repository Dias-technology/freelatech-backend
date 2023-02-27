
import { inject, injectable } from 'tsyringe'

import { ICoursesRepository } from '@/modules/freelancerInformation/repositories/ICoursesRepository'
import { Courses } from '@/modules/freelancerInformation/infra/typeorm/entities/Courses'

@injectable()
class ListCoursesUseCase {

    constructor(
        @inject('CoursesRepository')
        private CoursesRepository: ICoursesRepository
    ){}

    async execute(user_id:string): Promise<Courses[]>{
        return await this.CoursesRepository.findByUserID(user_id)
    }


}

export { ListCoursesUseCase }