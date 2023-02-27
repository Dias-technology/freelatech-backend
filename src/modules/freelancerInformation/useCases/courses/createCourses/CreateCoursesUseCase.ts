import { inject, injectable } from 'tsyringe'

import { ICoursesRepository } from '@/modules/freelancerInformation/repositories/ICoursesRepository'
import { IcreateCoursesDTO } from '@/modules/freelancerInformation/dto/ICreateCoursesDTO'

@injectable()
class CreateCoursesUseCase{
    constructor(
        @inject('CoursesRepository')
        private CoursesRepository: ICoursesRepository
    ){}


    async execute({
        name, institute, status, category, user_id 
    }: IcreateCoursesDTO): Promise<void>{

        await this.CoursesRepository.create({
            name, institute, status, category, user_id})

    }


}

export { CreateCoursesUseCase }